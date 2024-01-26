<template>
  <div class="container mt-5">
    <h2>Edit Product</h2>
    <form @submit.prevent="editProduct">
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
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      productName: 'Existing Product Name',
      productDetail: 'Existing Product Detail',
      productId: null,
      errors: []
    }
  },
  mounted() {
    this.productId = this.$route.params.id
    this.getProduct(this.$route.params.id)
  },
  methods: {
    async getProduct(productId) {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${productId}`)
        this.productName = response.data.data.name
        this.productDetail = response.data.data.detail
      } catch (error) {
        console.log(error)
        this.$notify({
          title: 'Error',
          text: error.response.data.message,
          type: 'error'
        })
        this.$router.push({ name: 'ProductsIndex' })
      }
    },
    editProduct() {
      try {
        axios.put(`http://localhost:8000/api/products/${this.productId}`, {
          name: this.productName,
          detail: this.productDetail
        })
        this.$notify({
          title: 'Success',
          text: 'Product updated successfully',
          type: 'success'
        })
        this.$router.push({ name: 'ProductsIndex' })
      } catch (error) {
        console.log(error)
        this.$notify({
          title: 'Error',
          text: error.response.data.message,
          type: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
