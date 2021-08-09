<template>
  <footer class="footer">
      <div class="footer-content">
        &copy; {{ year }} Liam Allwood
      </div>
  </footer>

</template>

<script>
export default {
  name: 'FooterElement',
  mounted() {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    this.year = yearNow;
  },
  data() {
    return {
      year: null
    }
  }
}

/* Todo

*/
</script>


<style scoped>

.footer{
  border-top: 1px solid #e5e5e5;
  padding: 40px 0;
  color: #949494;
}
.footer-content{
  margin: 0 auto;
  width: fit-content;
}
</style>


