import { createApp } from 'vue'
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  Table,
  Input,
  Button,
  Checkbox,
  Modal,
  Tooltip,
  Alert,
  Spin,
} from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './assets/styles/global.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.component('ALayout', Layout)
app.component('ALayoutHeader', LayoutHeader)
app.component('ALayoutContent', LayoutContent)
app.component('ALayoutFooter', LayoutFooter)
app.component('ATable', Table)
app.component('AInput', Input)
app.component('AButton', Button)
app.component('ACheckbox', Checkbox)
app.component('AModal', Modal)
app.component('ATooltip', Tooltip)
app.component('AAlert', Alert)
app.component('ASpin', Spin)
app.mount('#app')
