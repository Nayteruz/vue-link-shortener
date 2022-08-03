<template>
  <form action="#" class="p-5 mx-auto w-full bg-white flex items-center gap-3 rounded-xl shadow border-2 bg-blue-400 "
        @submit.prevent="sendShort">
    <input type="text" class="w-full text-xl text-gray-800 p-1 px-4 rounded-xl h-12"
           placeholder="https://www.google.com/search?q=smile" v-model="link_value">
    <button type="submit"
            class="p-1 px-5 text-xl rounded-xl text-white bg-indigo-800 h-12 hover:bg-indigo-700 active:bg-indigo-900">
      Сгенерировать
    </button>
  </form>
  <div v-if="error_message" class="error text-xl bg-red-200 rounded-xl mt-4 py-2 px-5">{{ error_message }}</div>
</template>

<script setup lang="ts">
import {useShortStore} from "@/stores/shortLinkStore";
import {ref, inject,} from "vue";
import {customAlphabet} from "nanoid";
// @ts-ignore
import {db, ref_db, push_ref, update_db, child_db} from "@/config/config_api.js"

const store = useShortStore();
const link_value = ref('');
const error_message = ref('');
const emitter = inject('emitter');

const sendShort = async (): Promise<void> => {
  store.isLoading = true;
  const newShortKey = push_ref(child_db(ref_db(db), 'links')).key;
  const short_code = generateId(newShortKey);
  const updates = {};
  const data:object = {
    original_link: link_value.value,
    timestamp: Date.now(),
    short_link: document.location.origin + import.meta.env.BASE_URL + short_code,
    short_code: short_code,
    code: newShortKey,
  }

  // @ts-ignore
  updates['/links/' + newShortKey] = data;
  update_db(ref_db(db), updates)
    .then(()=>{
      link_value.value = '';
      store.setLinks(data);
      // @ts-ignore
      emitter.emit('sendData');
      store.isLoading = false;
    }).catch((e:string)=>{
      error_message.value = 'Ошибка отправки данных ' + e;
      store.isLoading = false;
  })
}

const generateId = (key: string): string => {
  const nanoid = customAlphabet(key, 5)
  return nanoid();
}
</script>
