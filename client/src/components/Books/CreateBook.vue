<template>
  <div>
    <h2>Create Book</h2>
    <form v-on:submit.prevent="createBook">
      <p>ชื่อหนังสือ (Title): <input type="text" v-model="book.title" required></p>
      <p>ผู้แต่ง (Author): <input type="text" v-model="book.author"></p>
      <p>หมวดหมู่ (Genre): <input type="text" v-model="book.genre"></p>
      <p>ราคา (Price): <input type="number" step="0.01" v-model="book.price"></p>
      <p>วันที่ตีพิมพ์ (Date): <input type="date" v-model="book.publicationDate"></p>
      <p><button type="submit">create book</button></p>
    </form>
  </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {
  data () {
    return {
      book: {
        title: '',
        author: '',
        genre: '',
        price: '',
        publicationDate: ''
      }
    }
  },
  methods: {
    async createBook () {
      try {
        await BooksService.post(this.book)
        this.$router.push({ name: 'books' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>