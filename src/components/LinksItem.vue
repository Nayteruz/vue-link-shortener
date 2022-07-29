<template>
  <div class="list-links relative">
  <ul class="m-0 mt-5 p-0 list-none flex flex-col gap-2">
    <li
      v-for="link in links.reverse()"
      :key="link.short_code"
      class="flex items-center justify-between gap-4 bg-blue-200 rounded-lg px-4 py-3">
        <span class="overflow-hidden whitespace-nowrap text-ellipsis h-6">{{ link.original_link }}</span>
        <span class="ml-auto">{{ link.short_link }}</span>
        <button
          @click.prevent="copyLink(link)"
          class="copy w-24 px-3 py-1 text-white rounded-lg cursor-pointer select-none"
          :class="{'bg-purple-700': link.copied === true, 'bg-blue-500 hover:bg-blue-400 active:bg-blue-600': !link.copied}"
        >
          {{ link.copied ? 'Copied' : 'Copy' }}
        </button>
        <button
          @click.prevent="deleteItem(link)"
          class="text-lg px-2 py-0 text-white rounded-lg cursor-pointer bg-red-500 hover:bg-red-400 active:bg-red-600 select-none"
        >
          ×
        </button>
    </li>
  </ul>
  <LoadingRound />
  </div>
</template>

<script lang="ts" setup>
import LoadingRound from "@/components/LoadingRound.vue"
import {useShortStore} from "@/stores/shortLinkStore";
import {db, ref_db, onValue_db, query_db, limitToLast_db, orderByValue_db, remove_db} from "@/config/config_api.js"
import {ref, onMounted, inject} from "vue";
const links = ref([]);
const store = useShortStore();

const emitter = inject('emitter');

const copyLink = (link:object):void => {
  navigator.clipboard.writeText(link.short_link);
  store.setLableCopy(link);
  setTimeout(() => {
    store.setLableCopy();
  },5000)
}

const deleteItem = (link) => {
  remove_db(ref_db(db, 'links/' + link.code))
    .then(()=>{
      getLast10Items();
    })
}

const getLast10Items = async () => {
  store.isLoading = true;
  const dbRef = ref_db(db, '/links');
  const recentLinksRef = query_db(dbRef, limitToLast_db(10));
  await onValue_db(recentLinksRef, (snapshot) => {
    links.value = [];
    snapshot.forEach((childSnapshot) => {
      links.value.push(childSnapshot.val());
    });
    store.isLoading = false;
  }, {
    onlyOnce: true
  });
}

emitter.on('sendData', ()=>{
  getLast10Items();
})

onMounted(() => {
  getLast10Items();
})

</script>

<style scoped lang="scss">
  .copy {
    width: 92px;
    flex:0 0 92px;
  }
</style>