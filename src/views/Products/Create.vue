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
export default {
  data() {
    return {
      productName: '',
      productDetail: ''
    }
  },
  methods: {
    createProduct() {
      // You can perform any logic here to handle the creation of the product
      console.log('Product Name:', this.productName)
      console.log('Product Detail:', this.productDetail)

      // For a real application, you might want to send the data to a server using API calls.
      // Here, we are just logging the data for demonstration purposes.
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
