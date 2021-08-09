<template>
  <Card>
    <template #header>
      <img alt="user header" :src="require(`@/assets/${projectDetails.imageFileName}`)">
    </template>
    <template #title>
      {{ projectDetails.title }}
    </template>
    <template #content>
      {{ projectDetails.description }}
    </template>
    <template #footer>
      <div class="p-d-flex p-flex-wrap">
        <Chip v-for="category in projectDetails.categories" :key="category" :label="category" class="p-mr-2 p-mb-2" />
      </div>
      <div class="p-d-flex p-flex-wrap-reverse" style="padding: 1rem 0 0 0;">
       <Button icon="pi pi-arrow-circle-right" label="See Project" style="width: 100%;"/>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    // Basic type checks on props
    projectDetails: Object
  }
}
</script>

<style scoped>

</style>