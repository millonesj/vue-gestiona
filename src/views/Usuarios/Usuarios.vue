<template>
  <default-layout>
    <section slot="content">
      <div class="container-fluid">
        <div class="row pt-5">
          <div class="col-md-4">
            <b-card
              header="Nuevo Usuario"
            >
              <b-form>
                <b-form-group>
                  <b-form-input
                    id="nombre"
                    type="text"
                    required
                    placeholder="Ingresa nombre"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="apPaterno"
                    type="text"
                    required
                    placeholder="Ingresa apellido paterno"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="apMaterno"
                    type="text"
                    required
                    placeholder="Ingresa apellido materno"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="usuario"
                    type="text"
                    required
                    placeholder="Ingresa Usuario"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="clave"
                    type="text"
                    required
                    placeholder="Ingresa clave"
                  />
                </b-form-group>
                <b-button block variant="primary">Grabar</b-button>
              </b-form>
            </b-card>
          </div>
          <div class="col-md-8">
            <div class="container-fluid">
              <table class="table-striped table-borded table-responsive table-hover">
                <caption>Lista de Usuarios</caption>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>nombre</th>
                      <th>apellido paterno</th>
                      <th>apellido materno</th>
                      <th>usuario</th>
                      <th>correo</th>
                      <th>creado el</th>
                      <th>modificado el</th>
                      <th>perfil</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="usuario of usuarios" :key="usuario.id">
                      <td>{{usuario.nombre}}</td>
                      <td>{{usuario.apPaterno}}</td>
                      <td>{{usuario.apMaterno}}</td>
                      <td>{{usuario.usuario}}</td>
                      <td>{{usuario.correo}}</td>
                      <td>{{usuario.correo}}</td>
                      <td>{{usuario.correo}}</td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </default-layout>
</template>
<script>
import DefaultLayout from '@/views/layouts/DefaultLayout'
import {getUsuarios} from '@/services/usuarios'
export default {
  name: 'Usuarios',

  data () {
    return {
      usuarios: []
    }
  },
  created () {
    getUsuarios()
      .then(Response => {
        this.usuarios = Response.data
      })
      .catch(err => { console.log(err) })
  },
  components: {
    DefaultLayout
  }
}
</script>
