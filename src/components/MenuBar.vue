<template>
      <Menubar :model="items"></Menubar>
</template>

<script>
export default {
  name: 'MenuBar',
  data() {
    return {
      items: [
        {
          label:'Home',
          to: '/'
        },
        {
          label:'Projects',
          to: '/projects'
        },
      ]
    }
  }
}
</script>


<style scoped>
.p-menubar ul{
  margin: 0 auto 0 auto;
}
</style>


