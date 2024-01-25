<template>
  <div class="container mt-5">
    <h2>Create Product</h2>
    <form @submit.prevent="createProduct">
      <div class="mb-3">
        <label for="productName" class="form-label">Product Name</label>
        <input type="text" class="form-control" id="productName" v-model="productName" required />
      </div>
      <div class="mb-3">
        <label for="productDetail" class="form-label">Product Detail</label>
        <textarea
          class="form-control"
          id="productDetail"
          v-model="productDetail"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Create Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      productName: '',
      productDetail: ''
    }
  },
  methods: {
    async createProduct() {
      //call api to create product
      const product = {
        name: this.productName,
        detail: this.productDetail
      }

      let response = await axios.post('http://localhost:8000/api/products', product)

      if (response.status === 201) {
        this.$toast.open('Created')
        this.$router.push({ name: 'ProductsIndex' })
      } else {
        this.$toast.open('Something went wrong!')
      }
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
