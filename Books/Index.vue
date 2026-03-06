<template>
  <div>
    <h2>Get all books</h2>
    <p><button v-on:click="navigateTo('/book/create')">สร้าง Book</button></p>
    <h4>จำนวนหนังสือ {{ books.length }}</h4>

    <div v-for="book in books" v-bind:key="book.id" style="border: 1px solid #ccc; margin-bottom: 10px; padding: 10px;">
      <p>id: {{ book.id }}</p>
      <p><b>ชื่อหนังสือ (Title):</b> {{ book.title }}</p>
      <p><b>ผู้แต่ง (Author):</b> {{ book.author }}</p>
      <p><b>หมวดหมู่ (Genre):</b> {{ book.genre }}</p>
      <p><b>ราคา (Price):</b> {{ book.price }}</p>
      <p><b>วันที่ตีพิมพ์:</b> {{ book.publicationDate }}</p>
      
      <p>
        <button v-on:click="navigateTo('/book/'+ book.id)">ดูข้อมูล Book</button>
        <button v-on:click="navigateTo('/book/edit/'+ book.id)">แก้ไข Book</button>
        <button v-on:click="deleteBook(book)">ลบข้อมูล Book</button>
      </p>
    </div>
  </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {
  data () {
    return {
      books: []
    }
  },
  async created () {
    this.refreshData()
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteBook (book) {
      let result = confirm("Want to delete?")
      if (result) {
        try {
          await BooksService.delete(book)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },
    async refreshData() {
      try {
        this.books = (await BooksService.index()).data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>