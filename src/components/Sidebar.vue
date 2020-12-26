<template>
    <div class="sm:flex flex-col sm:flex-row sm:min-h-screen w-full">
        <div class="flex flex-col w-full sm:w-64 text-gray-700 bg-indigo-100 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
            <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">CRM Cliente</a>
                <button class="rounded-lg sm:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="toggleShowMenu">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                        <path 
                            v-show="!showMenu" 
                            fill-rule="evenodd" 
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" 
                            clip-rule="evenodd">
                        </path>
                        <path 
                            v-show="showMenu" 
                            fill-rule="evenodd" 
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                            clip-rule="evenodd">
                        </path>
                    </svg>
                </button>
            </div>
            <nav :class="{'block': showMenu, 'hidden': !showMenu}" class="flex-grow sm:block px-4 pb-4 sm:pb-0 sm:overflow-y-auto">
                <sidebar-link 
                    :active="routeName === 'dashboard'" 
                    path="dashboard"
                >
                    <customers-icon width="25" class="mr-3 ml-4"/>
                    <p style="width:50px" class="text-left">Clientes</p>
                </sidebar-link>
                <sidebar-link 
                    :active="routeName === 'products'" 
                    path="productos"
                >
                    <products-icon width="25" class="mr-3 ml-4"/>
                    <p style="width:50px" class="text-left">Productos</p>
                </sidebar-link>
                <sidebar-link 
                    :active="routeName === 'pedidos'" 
                    path="pedidos"
                >
                    <orders-icon width="25" class="mr-3 ml-4"/>
                    <p style="width:50px" class="text-left">Pedidos</p>
                </sidebar-link>
                <hr class="border border-blue-300 mx-2">
                <sidebar-link 
                    :active="routeName === 'about'" 
                    path="nosotros"
                >
                    <about-us-icon width="25" class="mr-3 ml-4"/>
                    <p style="width:50px" class="text-left">Nosotros</p>
                    
                </sidebar-link>
                <button 
                    @click="doLogout"
                    class="w-full">
                    <a 
                        class="exit-button dark-mode:bg-transparent dark-mode:hover:bg-gray-600 
                                dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white 
                                dark-mode:text-gray-200 sm:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400 
                                focus:bg-gray-400 focus:outline-none focus:shadow-outline" 
                        href="#"
                    >
                        <logout-icon width="25" class="mr-3 ml-4"/>
                        <p style="width:50px" class="text-left">Salir</p> 
                    </a>
                </button>
            </nav>
        </div>
    </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue';
import CustomersIcon from '../components/icons/CustomersIcon';
import ProductsIcon from '../components/icons/ProductsIcon';
import OrdersIcon from '../components/icons/OrdersIcon';
import AboutUsIcon from '../components/icons/AboutUsIcon';
import LogoutIcon from '../components/icons/LogoutIcon';
import { mapActions } from "vuex";
export default {
    components: { 
        SidebarLink, 
        CustomersIcon, 
        ProductsIcon,
        OrdersIcon,
        AboutUsIcon,
        LogoutIcon 
    },
    data() {
        return {
            showMenu: false
        }
    },
    computed: {
        routeName() {
            return this.$route.name;
        }
    },
    methods: {
        ...mapActions('auth', ['logout']),
        toggleShowMenu() {
            this.showMenu = !this.showMenu;
        },
        doLogout() {
            this.logout();
            this.$router.push({name: 'auth'});
        } 
    }
}
</script>

<style scoped>
.active-item {
    background-color : black
}
</style>
