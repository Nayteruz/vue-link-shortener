<template>
  <form
    action="#"
    class="p-5 mx-auto w-full bg-white flex flex-col rounded-xl shadow border-2 bg-stone-100"
    @submit.prevent="sendShort">
    <div
      class="flex gap-3 items-center "
    >
      <input
        type="text"
        class="w-full text-xl text-gray-800 p-1 px-4 rounded-xl h-12"
        placeholder="https://www.google.com/search?q=smile"
        v-model="link_value"
        @keydown.enter.prevent="addLink"
      >
      <button
          type="button"
          class="p-1 px-5 text-2xl rounded-xl text-white bg-green-700 h-12 hover:bg-green-600 active:bg-green-900"
          @click="addLink"
      >
        +
      </button>
    </div>
    <div v-if="error_message" class="error text-xl bg-red-200 rounded-xl my-4 py-2 px-5">{{ error_message }}</div>
    <ul class="list-added mt-4 flex flex-col gap-3">
      <li v-for="link in links" :key="link.id" class="flex gap-3 w-full items-center">
        <span class="bg-white whitespace-nowrap truncate text-ellipsis w-full text-xm text-gray-800 p-1 px-4 rounded-xl h-8">{{ link.link }}</span>
        <button
            type="button"
            class="px-1 text-xl rounded-xl text-white bg-red-700 h-8 w-8 hover:bg-red-600 active:bg-red-900"
            @click="removeLink(link.id)"
            style="flex:0 0 auto"
        >
          -
        </button>
      </li>
    </ul>
    <button
      type="submit"
      class="p-1 ml-auto mt-4 px-5 text-xl rounded-xl text-white bg-emerald-800 h-12 hover:bg-emerald-700 active:bg-emerald-900"
    >
      Сгенерировать
    </button>
  </form>

</template>

<script setup lang="ts">
import {useShortStore} from "@/stores/shortLinkStore";
import {ref, inject, watch,} from "vue";
import {customAlphabet} from "nanoid";
// @ts-ignore
import {db, ref_db, push_ref, update_db, child_db} from "@/config/config_api.js"

const store = useShortStore();
const link_value = ref('');
const links = ref([]);
const error_message = ref('');
const emitter = inject('emitter');

watch(()=> link_value.value, (n,o)=>{
    if(n.length && !isUrl(n)){
      error_message.value = "Текст не является ссылкой";
    } else {
      error_message.value = "";
    }
})

const addLink = (): void => {
  if(!isUrl(link_value.value)) {
    error_message.value = 'Текст не является ссылкой';
    return;
  }
  let data: object = {
    link: link_value.value,
    id: Date.now(),
  }
  links.value.push(data);
  link_value.value = '';
}
const removeLink = (link_id: number): void => {
  links.value = links.value.filter(l=>l.id !== link_id)
}

const sendShort = async (): Promise<void> => {
  if(!links.value.length) {
    error_message.value = 'Список ссылок пуст';
    return;
  }
  store.isLoading = true;
  const newShortKey = push_ref(child_db(ref_db(db), 'links')).key;
  const short_code = generateId(newShortKey);
  const updates = {};
  const data:object = {
    original_links: links.value,
    timestamp: Date.now(),
    short_link: document.location.origin + import.meta.env.BASE_URL + short_code,
    short_code: short_code,
    code: newShortKey,
  }
  links.value = [];
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
const isUrl = (str: string): boolean=> {
  let urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
      '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
  return !!urlPattern.test(str);
}
</script>
