import './assets/main.css';

// Importar los estilos de Element Plus
import '../node_modules/element-plus/theme-chalk/index.css';

// Importar Element Plus y Vue
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';

// Crear la aplicación Vue
const app = createApp(App);

// Usar Element Plus con la aplicación Vue
app.use(ElementPlus);

// Montar la aplicación
app.mount('#app');
