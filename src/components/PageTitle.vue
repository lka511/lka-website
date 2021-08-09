<template>
<h2>{{title}}</h2>
</template>

<script>
export default {
  name: 'MenuBar',
  data() {
    return {

    }
  },
  props: {
    // Remember basic type checks on props
    title: String,
  }
}

</script>


<style scoped>
h2{
  font-family: Geneva;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  color: #231f20;
  letter-spacing: 0em;
  line-height: 1.2em;
}
</style>


