import { createApp } from 'vue';
import axios from 'axios';
import { createWebHistory, createRouter } from 'vue-router';

import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Menubar from 'primevue/menubar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Message from 'primevue/message';
import Checkbox from 'primevue/checkbox';
import MultiSelect from 'primevue/multiselect';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Panel from 'primevue/panel';
import Knob from 'primevue/knob';
import Dialog from 'primevue/dialog';
import Badge from 'primevue/badge';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Fieldset from 'primevue/fieldset';
import Divider from "primevue/divider";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Chip from 'primevue/chip';

import "primevue/resources/themes/md-light-indigo/theme.css"; //theme
import "primevue/resources/primevue.min.css";                 //core css
import "primevue/resources/primevue.min.css";                 //core css
import "primeicons/primeicons.css";                           //icons"
import 'primeflex/primeflex.css';

import App from './App.vue';
import Home from './Views/Home.vue';
import Projects from "./Views/Projects";


const routes = [
    {
        path: "/",
        component: Home,
    },

    {
        path: "/projects",
        component: Projects
    }



];

const router = createRouter({
    routes,
    history: createWebHistory()
});

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.use(router);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Message', Message);
app.component('Checkbox', Checkbox);
app.component('MultiSelect', MultiSelect);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('Panel', Panel);
app.component('Knob', Knob);
app.component('Dialog', Dialog);
app.component('Badge', Badge);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('Fieldset', Fieldset);
app.component('Divider', Divider);
app.component('TabPanel', TabPanel);
app.component('TabView', TabView);
app.component('Chip', Chip);

app.config.globalProperties.axios = axios;
app.mount('#app');
