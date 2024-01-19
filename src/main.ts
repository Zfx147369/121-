import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 富文本编辑器
import { quillEditor } from 'vue3-quill'

createApp(App).use(quillEditor).use(ElementPlus).use(store).use(router).mount('#app')
