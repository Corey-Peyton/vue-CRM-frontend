<template>
    <div class="sidebar-container">
        <div class="sidebar">

            <div class="sidebar-header">
                <a href="#" class="sidebar-header-link dark-mode:text-white">CRM Cliente</a>
                <sidebar-menu-button :showMenu="showMenu" @toggle="showMenu = ! showMenu"/>
            </div>

            <nav :class="{'block': showMenu, 'hidden': !showMenu}" class="flex-grow sm:block px-4 pb-4 sm:pb-0 sm:overflow-y-auto my-1">
                
                <sidebar-link :active="routeName === 'dashboard'" path="dashboard">
                    <customers-icon width="25" class="mr-3 ml-4"/>
                    <p style="width:50px" class="text-left">Clientes</p>
                </sidebar-link>

                <sidebar-link :active="routeName === 'products'" path="productos">
                    <products-icon width="25" class="mr-3 ml-4"/>
                    <p style="width:50px" class="text-left">Productos</p>
                </sidebar-link>

                <sidebar-link :active="routeName === 'pedidos'" path="pedidos">
                    <orders-icon width="25" class="mr-3 ml-4"/>
                    <p style="width:50px" class="text-left">Pedidos</p>
                </sidebar-link>

                <hr class="border border-blue-300 mx-2">

                <sidebar-link :active="routeName === 'about'" path="nosotros">
                    <about-us-icon width="25" class="mr-3 ml-4"/>
                    <p style="width:50px" class="text-left">Nosotros</p>
                </sidebar-link>

                <button @click="doLogout" class="w-full">
                    <a class="exit-button" href="#">
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
import SidebarMenuButton from '../components/SidebarMenuButton';
import CustomersIcon from '../components/icons/CustomersIcon';
import ProductsIcon from '../components/icons/ProductsIcon';
import OrdersIcon from '../components/icons/OrdersIcon';
import AboutUsIcon from '../components/icons/AboutUsIcon';
import LogoutIcon from '../components/icons/LogoutIcon';
import { mapActions } from "vuex";
export default {
    components: { 
        SidebarMenuButton,
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
