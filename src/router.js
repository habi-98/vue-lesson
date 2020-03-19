import Vue from 'vue'
import Router from 'vue-router'
import Services from './components/Services/Services'
import Main from './components/Main.vue'
import ServicesPage from './components/SevicesPage/ServicesPage'
import TodoList from './components/TodoList/TodoList'
Vue.use(Router)

    
export default new Router({
    mode: 'history',
    routes: [
        {path: '/main', component: Main}, 
        {path: '/services', component: Services},
        {path: '/todo' , component: TodoList},

        {path: '/services/:id', name: 'services',  component: ServicesPage, props: true},


    ]
})