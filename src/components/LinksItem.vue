<template>
  <div class="list-links relative">
    <ul class="m-0 mt-5 p-0 list-none flex flex-col gap-2">
      <li
        v-for="link in linksReverse"
        :key="link?.short_code"
        class="flex items-center justify-between gap-4 bg-blue-200 rounded-lg px-4 py-3">
        <span class="overflow-hidden whitespace-nowrap text-ellipsis h-6">{{ link?.original_link }}</span>
        <span class="ml-auto whitespace-nowrap">{{ link?.short_link }}</span>
        <button
          @click.prevent="copyLink(link)"
          class="copy w-24 px-3 py-1 text-white rounded-lg cursor-pointer select-none"
          :class="{'bg-purple-700': link?.copied === true, 'bg-blue-500 hover:bg-blue-400 active:bg-blue-600': !link?.copied}"
        >
          {{ link?.copied ? 'Copied' : 'Copy' }}
        </button>
        <button
          @click.prevent="deleteItem(link)"
          class="text-lg px-2 py-0 text-white rounded-lg cursor-pointer bg-red-500 hover:bg-red-400 active:bg-red-600 select-none"
        >
          ×
        </button>
      </li>
    </ul>
    <LoadingRound/>
  </div>
</template>

<script lang="ts" setup>
import LoadingRound from "@/components/LoadingRound.vue"
import {useShortStore} from "@/stores/shortLinkStore";
// @ts-ignore
import {db, ref_db, remove_db} from "@/config/config_api.js"
import {inject, computed} from "vue";


const store = useShortStore();

const linksReverse = computed(():Array<any> => {
  return store.getLinks.reverse();
})

const emitter:any = inject('emitter');

const copyLink = (link: object): void => {
  // @ts-ignore
  navigator.clipboard.writeText(link?.short_link);
  // @ts-ignore
  store.setLableCopy(link);
  setTimeout(() => {
    store.setLableCopy();
  }, 5000)
}

const deleteItem = (link:any):void => {
  store.isLoading = true;
  remove_db(ref_db(db, 'links/' + link.code))
    .then(async () => {
      store.deleteLink(link);
      await store.getLinks;
      store.isLoading = false;
    }).catch((e:any) => {
      alert('Ошибка ' + e)
      store.isLoading = false;
  })
}

emitter.on('sendData', async ():Promise<void> => {
  await store.getLinks;
})

</script>

<style scoped lang="scss">
.copy {
  width: 92px;
  flex: 0 0 92px;
}
</style>