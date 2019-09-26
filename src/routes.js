import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Index from './views/Index.vue'

let routes = [
	{
	    path: '/Index',
	    component: Index,
	    name: 'Index',
	    hidden: true
	},
    {
        path: '/Login',
        component: Login,
        name: 'Login',
        hidden: true
    },
    {
        path: '/Register',
        component: Register,
        name: 'Register',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '404',
        hidden: true
    },
    {
        path: '/Home',
        component: Home,
        name: 'Home'
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/Index' }
    }
];

export default routes;