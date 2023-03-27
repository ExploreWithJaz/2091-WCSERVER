const books = Vue.createApp({
  data() {
    return {
      showBooks: true,
      btitle: 'The Ledger',
      bauthor: 'Jazper Garcia',
      year: 2001,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});
books.mount('#books');
