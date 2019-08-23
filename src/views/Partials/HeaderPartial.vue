<template>
  <header class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Sistema de Cobranza</b-navbar-brand>
      <b-navbar-toggle target="nav_text_collapse" />
      <div class="container">
        <b-collapse is-nav id="nav_text_collapse">
          <b-navbar-nav class="ml-auto">
            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Usuarios" right>
              <b-dropdown-item href="#/usuarios">Listado de Usuarios</b-dropdown-item>
              <b-dropdown-item href="/usuarios/add">agregar usuario</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Proveedores" right>
              <b-dropdown-item href="#/proveedores">Gestión Proveedores</b-dropdown-item>
              <b-dropdown-item href="/proveedor/add">agregar proveedor</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="/perfil">Perfil</b-nav-item>
            <b-nav-item href="/logout">Cerrar Sesion</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'HeaderPartial'
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Lato");
</style>
