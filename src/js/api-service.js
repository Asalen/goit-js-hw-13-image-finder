// export default class ApiService {
//     constructor() {
//         this.searchQuery = ''
//         this.page = 1
//     }
//     fetchImages() {
//         const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=21321053-d8ae0287a3fbd3723a6e0c994`
//         return fetch(url)
//             .then(response => response.json())
//             .then(({ hits }) => {
//                 this.incrementPage()
//                 return hits;
//             })
//             .catch(error => console.log(error))

//     }
//     get query() {
//         return this.searchQuery
//     }
//     set query(newQuery) {
//         this.searchQuery = newQuery
//     }
//     incrementPage() {
//         this.page += 1
//     }
//     resetPage() {
//         this.page = 1
//     }
// }


const apiKey = '21321053-d8ae0287a3fbd3723a6e0c994';

export default {
    searchQuery: '',
    page: 1,
    onNotice() {
        notice({
            title: `Loading... Please wait`,
            delay: 500,
        })
    },
    onError() {
        error({
            title: `Something went wront. Please try again`,
            delay: 250,
        })
        loadMoreBtn.disable();

        return
    },
    fetchArticles() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;;

        return fetch(url)
            .then(res => res.json())
            .then(({ hits }) => {
                this.incrementPage();
                if (hits.length === 0) {
                    onError()
                    return
                }
                return hits;
            })
            .catch(error => console.log(error))

    },
    resetPage() {
        this.page = 1;
    },
    incrementPage() {
        this.page += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },
};