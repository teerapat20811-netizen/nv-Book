import { createRouter, createWebHistory } from 'vue-router'

// --- 1. Import Components ของเดิม ---
// Users
import UserIndex from '../components/Users/Index.vue'
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'

// Login
import Login from '../components/Login.vue'

// Blogs
import BlogIndex from '../components/Blogs/Index.vue'
import BlogCreate from '../components/Blogs/CreateBlog.vue'
import BlogEdit from '../components/Blogs/EditBlog.vue'
import BlogShow from '../components/Blogs/ShowBlog.vue'

// --- 2. Import Components ของ Books (ที่เพิ่มใหม่) ---
import BookIndex from '../components/Books/Index.vue'
import BookCreate from '../components/Books/CreateBook.vue'
import BookEdit from '../components/Books/EditBook.vue'
import BookShow from '../components/Books/ShowBook.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // --- Route ของ Users ---
    { path: '/users', name: 'users', component: UserIndex },
    { path: '/user/create', name: 'users-create', component: UserCreate },
    { path: '/user/edit/:userId', name: 'user-edit', component: UserEdit },
    { path: '/user/:userId', name: 'user', component: UserShow },
    
    // --- Route ของ Login ---
    { path: '/login', name: 'login', component: Login },

    // --- Route ของ Blogs ---
    { path: '/blogs', name: 'blogs', component: BlogIndex },
    { path: '/blog/create', name: 'blogs-create', component: BlogCreate },
    { path: '/blog/edit/:blogId', name: 'blog-edit', component: BlogEdit },
    { path: '/blog/:blogId', name: 'blog', component: BlogShow },

    // --- Route ของ Books (ที่เพิ่มใหม่สำหรับ Quiz 2) ---
    { path: '/books', name: 'books', component: BookIndex },
    { path: '/book/create', name: 'books-create', component: BookCreate },
    { path: '/book/edit/:bookId', name: 'book-edit', component: BookEdit },
    { path: '/book/:bookId', name: 'book', component: BookShow }
  ]
})

export default router