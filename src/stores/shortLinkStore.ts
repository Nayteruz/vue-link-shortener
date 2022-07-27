import {defineStore} from "pinia";

export const useShortStore = defineStore({
    id: "shortStore",
    state: () => ({
        links: [],
        isLoading: false
    }),
    getters: {
        //doubleCount: (state) => state.counter * 2,
        getLinks: (state) => {
            if (localStorage.getItem('short_links')) {
                // @ts-ignore
                state.links = JSON.parse(localStorage.getItem('short_links'));
            }
            return state.links;
        },
    },
    actions: {
        setLinks(link) {
            link._id = Date.now();
            link.copied = false;
            this.links.push(link);
            localStorage.setItem('short_links', JSON.stringify(this.links));
        },
        deleteLink(link: object): void {
            this.links = this.links.filter(l => l !== link);
            localStorage.setItem('short_links', JSON.stringify(this.links));
        },
        setLableCopy(link = null){
            this.links.forEach(l =>{
                l.copied = l === link;
            })
        }

    },
});
