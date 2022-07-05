import Home from './components/selectmain/home-cpn.vue'
import Search from './components/selectmain/search-cpn.vue'
import YourLibrary from './components/selectmain/yourlibrary-cpn.vue'
import CreatePlaylist from './components/selectmain/createplaylist-cpn.vue'
import Likedsong from './components/selectmain/likedsong-cpn.vue'
import Install from './components/selectmain/install-cpn.vue'


const routes = [
    {
        path: '/home', 
        component: Home,
        name: 'Home',
    },
    {
        path: '/', 
        component: Home,
        name: 'Home',
    },

    {
        path: '/search', 
        component: Search,
        name: 'Search',
    },

    {
        path: '/yourlibrary', 
        component: YourLibrary,
        name: 'YourLibrary',
    },

    {
        path: '/createplaylist', 
        component: CreatePlaylist,
        name: 'CreatePlaylist',
    },

    {
        path: '/likedsong', 
        component: Likedsong,
        name: 'Likedsong',
    },
    
    {
        path: '/install', 
        component: Install,
        name: 'Install',
    }
]

export default routes;