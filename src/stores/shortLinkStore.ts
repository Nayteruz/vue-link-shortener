import {defineStore} from "pinia";

export const useShortStore = defineStore({
    id: "shortStore",
    state: () => ({
        links: [],
        isLoading: false
    }),
    getters: {
        getLinks: (state) => {
            if (localStorage.getItem('short_links')) {
                // @ts-ignore
                state.links = JSON.parse(localStorage.getItem('short_links'));
            }
            return state.links;
        },
    },
    actions: {
        setLinks(link: object) {
            // @ts-ignore
            link._id = Date.now();
            // @ts-ignore
            link.copied = false;
            // @ts-ignore
            this.links.push(link);
            localStorage.setItem('short_links', JSON.stringify(this.links));
        },
        deleteLink(link: object): void {
            this.links = this.links.filter(l => l !== link);
            localStorage.setItem('short_links', JSON.stringify(this.links));
        },
        setLableCopy(link = null){
            this.links.forEach(l =>{
                // @ts-ignore
                l.copied = l === link;
            })
        }

    },
});
