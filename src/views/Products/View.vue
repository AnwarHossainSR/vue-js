<script>
import axios from 'axios'
export default {
  name: 'ProductsView',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      axios.get('http://localhost:8000/api/products').then((response) => {
        this.products = response.data.data
      })
    }
  }
}
</script>

<template>
  <main class="container py-4">
    <div class="card p-4">
      <div class="d-flex justify-content-between mb-4">
        <h1 class="text-center">Products</h1>
        <button class="btn btn-primary">Add Product</button>
      </div>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody v-if="products.length > 0">
          <tr v-for="(product, index) in products" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ product.name }}</td>
            <td>{{ product.detail }}</td>
            <td>{{ product.created_at }}</td>
            <td>
              <RouterLink class="btn btn-primary" to="/">Edit</RouterLink>
              <button class="btn btn-danger ml-1">Delete</button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="7" class="text-center">No Products Found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
