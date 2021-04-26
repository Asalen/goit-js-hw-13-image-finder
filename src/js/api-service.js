export default class ApiService {
    constructor() {
        this.searchQuery = ''
        this.page = 1
    }
    fetchImages() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=21321053-d8ae0287a3fbd3723a6e0c994`
        return fetch(url)
            .then(response => response.json())
            .then(({ hits }) => {
                this.incrementPage()
                return hits;
            })
            .catch(error => console.log(error))

    }
    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
    incrementPage() {
        this.page += 1
    }
    resetPage() {
        this.page = 1
    }
}