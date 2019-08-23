import Vue from 'vue'
import Router from 'vue-router'

// Views
import HomeView from '@/views/Home/Home'
import ProveedorView from '@/views/Proveedor/Proveedor'
import Usuarios from '@/views/Usuarios/Usuarios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/proveedores',
      name: 'Proveedor',
      component: ProveedorView
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: Usuarios
    }
  ]
})
