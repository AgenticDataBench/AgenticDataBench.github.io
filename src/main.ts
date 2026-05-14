import { createApp } from 'vue'
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  Table,
  Input,
  Button,
  RadioGroup,
  RadioButton,
  Empty,
  ConfigProvider,
} from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './assets/styles/global.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(ConfigProvider)
app.component('ALayout', Layout)
app.component('ALayoutHeader', LayoutHeader)
app.component('ALayoutContent', LayoutContent)
app.component('ALayoutFooter', LayoutFooter)
app.component('ATable', Table)
app.component('AInput', Input)
app.component('AButton', Button)
app.component('ARadioGroup', RadioGroup)
app.component('ARadioButton', RadioButton)
app.component('AEmpty', Empty)
app.mount('#app')