<template>
  <main class="container py-4">
    <div class="card p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="text-center">Products</h1>
        <RouterLink class="btn btn-primary" to="/products/create">Add Product</RouterLink>
      </div>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-if="products.length > 0">
          <tr v-for="(product, index) in products" :key="index">
            <th scope="row">{{ product.id }}</th>
            <td>{{ product.name }}</td>
            <td>{{ product.detail }}</td>
            <td>{{ formattedDate(product.created_at) }}</td>
            <td>
              <RouterLink class="btn btn-primary" :to="`/products/${product.id}/edit`"
                >Edit</RouterLink
              >
              <button class="btn btn-danger ml-1" @click="confirmDelete(product.id)">Delete</button>
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

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
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
    },
    formattedDate(date) {
      // Format the date using the Date object and return the formatted string
      const formattedDate = new Date(date).toLocaleString() // Adjust the format based on your requirements
      return formattedDate
    },
    confirmDelete(productId) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this product!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProduct(productId)
        }
      })
    },

    deleteProduct(productId) {
      axios
        .delete(`http://localhost:8000/api/products/${productId}`)
        .then(() => {
          // Remove the deleted product from the products array
          this.products = this.products.filter((product) => product.id !== productId)
          Swal.fire('Deleted!', 'Your product has been deleted.', 'success')
        })
        .catch((error) => {
          console.error('Error deleting product:', error)
          Swal.fire('Error', 'Unable to delete the product.', 'error')
        })
    }
  }
}
</script>
