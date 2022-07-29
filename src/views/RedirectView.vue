<template>
  <div class="fixed left-0 top-0 flex items-center justify-center w-screen h-screen">
    <LoadingRound class="relative top-0 left-0"/>
  </div>
</template>

<script setup lang="ts">
  import LoadingRound from "@/components/LoadingRound.vue"
  import {useShortStore} from "@/stores/shortLinkStore";
  import {useRoute} from "vue-router";
  import {computed, ref, watch} from "vue";
  import {db, ref_db, query_db, orderByChild_db, equalTo_db, onValue_db} from "@/config/config_api.js"

  const store = useShortStore();
  const route = useRoute();

  const urlKey = computed(() => {
    return route.path.replace('/', '');
  })
  const urlRedirect = ref('');

  watch(urlRedirect, (nVal) => {
    document.location.href = nVal;
  },{ deep: true })

  const getUrlInfo = () => {
    store.isLoading = true;
    const dbRef = ref_db(db, 'links');
    const linkRef = query_db(dbRef, orderByChild_db('short_code'), equalTo_db(urlKey.value));
    onValue_db(linkRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let value = childSnapshot.val();
        urlRedirect.value = value.original_link;
        //store.isLoading = false;
      });
    }, {
      onlyOnce: true
    });
  }
  getUrlInfo();

</script>
