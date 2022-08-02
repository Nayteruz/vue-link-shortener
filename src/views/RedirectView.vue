<template>
  <div class="fixed left-0 top-0 flex items-center justify-center w-screen h-screen">
    <LoadingRound class="relative top-0 left-0" v-if="founded!==false"/>
    <div class="block text-center text-3xl" v-if="founded===false">
      Ссылка не найдена<br/>
      <router-link :to="{name:'home'}" class="text-base text-blue-300 font-normal">На главную</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  import LoadingRound from "@/components/LoadingRound.vue"
  import {useShortStore} from "@/stores/shortLinkStore";
  import {useRoute} from "vue-router";
  import {computed, ref} from "vue";
  // @ts-ignore
  import {db, ref_db, query_db, orderByChild_db, equalTo_db, get_db, } from "@/config/config_api.js"

  const store = useShortStore();
  const route = useRoute();
  const founded = ref(null);

  const urlKey = computed(():string => {
    return route.path.replace('/', '');
  })

  const getUrlInfo = async () => {
    store.isLoading = true;
    const dbRef = ref_db(db, '/links');
    const recentLinksRef = query_db(dbRef, orderByChild_db('short_code'), equalTo_db(urlKey.value));
    const querySnapshot = await get_db(recentLinksRef);
    if (querySnapshot.size === 0){
      // @ts-ignore
      founded.value = false;
    } else {
      // @ts-ignore
      founded.value = true;
      querySnapshot.forEach((childSnapshot:any):void => {
        let value = childSnapshot.val();
        document.location.href = value.original_link;
        store.isLoading = false;
      });
    }
  }
  getUrlInfo();

</script>
