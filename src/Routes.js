import Home from './components/selectmain/home-cpn.vue'
import Search from './components/selectmain/search-cpn.vue'
import YourLibrary from './components/selectmain/yourlibrary-cpn.vue'
import CreatePlaylist from './components/selectmain/createplaylist-cpn.vue'
import Likedsong from './components/selectmain/likedsong-cpn.vue'
import Install from './components/selectmain/install-cpn.vue'


const routes = [
    {
        path: '/app-music/home', 
        component: Home,
        name: 'Home',
    },

    {
        path: '/app-music/search', 
        component: Search,
        name: 'Search',
    },

    {
        path: '/app-music/yourlibrary', 
        component: YourLibrary,
        name: 'YourLibrary',
    },

    {
        path: '/app-music/createplaylist', 
        component: CreatePlaylist,
        name: 'CreatePlaylist',
    },

    {
        path: '/app-music/likedsong', 
        component: Likedsong,
        name: 'Likedsong',
    },
    
    {
        path: '/app-music/install', 
        component: Install,
        name: 'Install',
    }
]

export default routes;