<template>
  <default-layout>
    <section slot="content">

      <div>
      <div class="container-fluid">
        <div class="row pt-5">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <span class="h2" v-if="edit===false">Nuevo Proveedor</span>
                <span class="h2" v-else>Editar Proveedor</span>
              </div>
              <div class="card-body">
                <form @submit.prevent="enviarProveedor">
                  <div class="form-group">
                    <input type="text" v-model="proveedor.nombreCorto" name="nombreCorto" class="form-control" placeholder="nombre corto" autofocus>
                  </div>
                  <div class="form-group">
                    <input type="text" name="razonSocial" v-model="proveedor.razonSocial" class="form-control" placeholder="razol social">
                  </div>
                  <div class="form-group">
                    <input type="number"  name="ruc" v-model="proveedor.ruc"  class="form-control" placeholder="ruc">
                  </div>
                  <div class="form-group">
                    <input type="text" name="direccion" v-model="proveedor.direccion" placeholder="dirección" class="form-control">
                  </div>
                  <div class="form-group">
                    <input type="text" name="web" v-model="proveedor.web" placeholder="sito web" class="form-control">
                  </div>
                  <template v-if="edit === false">
                    <button class="form-control btn btn-primary">Grabar nuevo
                      </button>
                  </template>
                  <template v-else>
                      <button class="form-control btn btn-primary">Editar</button>
                  </template>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="container">
              <table class="table table-striped table-borded table-hover table-responsive">
                  <caption>Lista de proveedores</caption>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Nombre corto</th>
                      <th>Razón social</th>
                      <th>Ruc</th>
                      <th>Sitio web</th>
                      <th>activo</th>
                      <th>Editar</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="proveedor of proveedores"  :key="proveedor.id">
                        <td>{{proveedor.id}}</td>
                        <td>{{proveedor.nombreCorto}}</td>
                        <td>{{proveedor.razonSocial}}</td>
                        <td>{{proveedor.ruc}}</td>
                        <td><a :href="'http://'+proveedor.web" target="_blank">{{proveedor.web}}</a></td>
                        <td ><input type="checkbox" name="" id="" :checked="proveedor.activo" @click="activarProveedor(proveedor.id, $event)"></td>
                        <!-- <td><a href="/proveedores/edit/${proveedor.id}" class="btn btn-secondary">editar</a></td> -->
                        <td><button class="btn btn-secondary" @click="editarProveedor(proveedor.id)">editar</button></td>
                        <td><button class="btn btn-danger" @click="eliminarProveedor(proveedor.id)">eliminar</button></td>
                    </tr>
                  </tbody>
              </table>
          </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="modalSiONo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </section>
  </default-layout>
</template>

<script>

import axios from 'axios'
import DefaultLayout from '@/views/layouts/DefaultLayout'

class Proveedor {
  constructor (nombreCorto, razonSocial, ruc, direccion, web) {
    this.nombreCorto = nombreCorto
    this.razonSocial = razonSocial
    this.ruc = ruc
    this.direccion = direccion
    this.web = web
  }
};

export default {
  name: 'ProveedorView',
  components: {
    DefaultLayout
  },
  data () {
    return {
      proveedor: new Proveedor(),
      proveedores: [],
      edit: false,
      proveedorAEditar: 0
    }
  },
  created () {
    this.getProveedores()
  },
  methods: {
    getProveedores () {
      axios
        .get('http://localhost:3000/api/proveedores')
        .then(response => {
          this.proveedores = response.data
          console.log(this.proveedores)
        })
    },
    enviarProveedor () {
      if (this.edit === false) {
        axios.post('http://localhost:3000/api/proveedores',
          this.proveedor
        )
          .then(res => {
            console.log(res)
            this.getProveedores()
          })
          .catch(error => {
            console.log(error)
          })
        this.proveedor = new Proveedor()
      } else {
        axios
          .put('http://localhost:3000/api/proveedores/' + this.proveedorAEditar,
            this.proveedor)
          .then(result => {
            console.log(result)
            this.getProveedores()
            this.edit = false
          })
      }
      this.proveedor = new Proveedor()
    },
    eliminarProveedor (id) {
      // $('#modalSiONo').modal('show');
      this.$refs.modalSiONo.modal('show')
      axios
        .delete('http://localhost:3000/api/proveedores/' + id)
        .then(res => {
          this.getProveedores()
        })
    },
    editarProveedor (id) {
      this.edit = true
      this.proveedorAEditar = id
      console.log('editar proveedor: ' + id)
      axios
        .get('http://localhost:3000/api/proveedores/' + id)
        .then(result => {
          let {nombreCorto, razonSocial, ruc, direccion, web} = result.data
          this.proveedor = new Proveedor(
            nombreCorto,
            razonSocial,
            ruc,
            direccion,
            web
          )
        })
    },
    activarProveedor (id, event) {
      let checked = 0
      if (event.target.checked) {
        checked = 1
      }

      let proveedor = new Proveedor()
      proveedor.activo = checked

      axios
        .put('http://localhost:3000/api/proveedores/' + id,
          proveedor
        )
        .then(result => {
          console.log(result)
        })
    }
  }
}
</script>
