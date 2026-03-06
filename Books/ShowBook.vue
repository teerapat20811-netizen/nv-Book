<template>
  <div>
    <h2>Show Book</h2>
    <div v-if="book">
      <p>id: {{ book.id }}</p>
      <p><b>ชื่อหนังสือ (Title):</b> {{ book.title }}</p>
      <p><b>ผู้แต่ง (Author):</b> {{ book.author }}</p>
      <p><b>หมวดหมู่ (Genre):</b> {{ book.genre }}</p>
      <p><b>ราคา (Price):</b> {{ book.price }}</p>
      <p><b>วันที่ตีพิมพ์:</b> {{ book.publicationDate }}</p>
      <p><button v-on:click="navigateTo('/books')">กลับ</button></p>
    </div>
  </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {
  data () {
    return {
      book: null
    }
  },
  async created () {
    try {
      let bookId = this.$route.params.bookId
      this.book = (await BooksService.show(bookId)).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>