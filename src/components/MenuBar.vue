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

/* Todo
1. Active menu item underline? active-menu-item
*/
</script>


<style scoped>

</style>


