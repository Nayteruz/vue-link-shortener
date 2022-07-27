<template>
  <form action="#" class="p-5 mx-auto w-full bg-white flex items-center gap-3 rounded-xl shadow border-2 bg-blue-400 " @submit.prevent="sendShort">
    <input type="text" class="w-full text-xl text-gray-800 p-1 px-4 rounded-xl h-12" placeholder="https://www.google.com/search?q=smile" v-model="link_value">
    <button type="submit"
            class="p-1 px-5 text-xl rounded-xl text-white bg-indigo-800 h-12 hover:bg-indigo-700 active:bg-indigo-900">
      Сгенерировать
    </button>
  </form>
  <div v-if="error_message" class="error text-xl bg-red-200 rounded-xl mt-4 py-2 px-5">{{ error_message }}</div>
</template>

<script setup lang="ts">
import {API_BASE_URL} from "@/config/config_api.js"

import {ref} from "vue";
import axios from "axios";
import {useShortStore} from "@/stores/shortLinkStore";

const link_value = ref('');
const store = useShortStore();
const error_message = ref('');


const sendShort = async (): Promise<void> => {
  let url: string = API_BASE_URL + link_value.value;
  store.isLoading = true;

  try {
    const request = await axios.get(url);
    if (request.data?.ok){
      link_value.value = '';
      store.setLinks(request.data?.result);
      error_message.value = '';
      store.isLoading = false;
    }
  } catch (e){
    error_message.value = e.response.data.error;
    store.isLoading = false;
  }
}
</script>

<style scoped lang="scss">

</style>