<template>
  <div class="list-links relative">
  <ul class="m-0 mt-5 p-0 list-none flex flex-col gap-2">
    <li
      v-for="link in links"
      class="flex items-center justify-between gap-4 bg-blue-200 rounded-lg px-4 py-3">
        <span class="overflow-hidden text-ellipsis h-6">{{ link.original_link }}</span>
        <span class="ml-auto">{{ link.full_short_link2 }}</span>
        <button
          @click.prevent="copyLink(link)"
          class="copy w-24 px-3 py-1 text-white rounded-lg cursor-pointer select-none"
          :class="{'bg-purple-700': link.copied === true, 'bg-blue-500 hover:bg-blue-400 active:bg-blue-600': !link.copied}"
        >
          {{ link.copied ? 'Copied' : 'Copy' }}
        </button>
        <button
          @click.prevent="store.deleteLink(link)"
          class="text-lg px-2 py-0 text-white rounded-lg cursor-pointer bg-red-500 hover:bg-red-400 active:bg-red-600 select-none"
        >
          ×
        </button>
    </li>
  </ul>
  <span v-if="store.isLoading" class="loading absolute left-2/4 top-5 -mx-12 block w-24 h-24 rounded-full border-8 border-indigo-800"></span>
  </div>
</template>

<script lang="ts" setup>
import {useShortStore} from "@/stores/shortLinkStore";
import {computed} from "vue";

const store = useShortStore();

const links = computed(() => {
  let linksStore = store.getLinks;
  return linksStore.sort(sortById).slice(0,10);
})

const sortById = (a:any, b:any):number => {
  if (b._id < a._id) {
    return -1;
  }
  if (b._id > a._id) {
    return 1;
  }
  return 0;
}

const copyLink = (link:object):void => {
  navigator.clipboard.writeText(link.full_short_link2);
  store.setLableCopy(link);
  setTimeout(() => {
    store.setLableCopy();
  },5000)
}

</script>

<style scoped lang="scss">
  .copy {
    width: 92px;
  }
  .loading {
    border-top-color: transparent;
    animation: 1s linear rotate-round infinite;
  }

  @keyframes rotate-round {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>