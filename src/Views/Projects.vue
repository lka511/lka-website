<template>
  <page-title title="Projects"></page-title>
  <p>Here are some of my recent projects, some personal, some to do with work. Take a look around and see what I've been up to!</p>
  <div class="p-field p-col-12">
    <span class="p-float-label">
        <MultiSelect id="multiselect" v-model="categoryFilterModel" :options="categoryList" optionLabel="name" display="chip" style="min-width: 200px; max-width: 100%" />
        <label for="multiselect">Filter by Category</label>
    </span>
  </div>
  <div class="p-grid">
    <div v-for="project in filteredProjects" :key="project" class="p-xl-4 p-md-6 p-sm-12">
      <project-card :project-details="project"/>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";

export default {
  name: 'Competitions',
  components: {
    PageTitle,
    ProjectCard
  },
  data() {
    return {
      categoryFilterModel: [],
      projects: [
        {
          title: "Processing Opensource Lidar Data into High Quality Farm Maps",
          description: "Processing 3D point cloud data into high quality maps. A big improvement on the quality of current farm maps. All using open source datasets from Land Information New Zealand.",
          imageFileName: "map.png",
          categories: ["Geospatial", "Visualization", "Graphic Design"],
          route: "/farm-mapping"
        },
        {
          title: "Mobile Application to Automate Tax Returns",
          description: "Creating an android mobile application that acts as a frontend for data input. This data is then automatically uploaded to a Google Sheets worksheet to produce financial reports.",
          imageFileName: "shearingapp.png",
          categories: ["Spreadsheets", "Finance", "Mobile", "Data Collection", "Coding"],
          route: "/2"
        },
        {
          title: "Personal Website",
          description: "The process of creating this website using the front-end framework Vue.js and the UI component library PrimeVue.",
          imageFileName: "thiswebsite.png",
          categories: ["Web", "Coding"],
          route: "/2"
        },
        {
          title: "Live Statistics for Sheep Shearers",
          description: "Creating an a",
          imageFileName: "placeholder.png",
          categories: ["Coding", "Mobile", "Data Collection"],
          route: "/2"
        },
      ]
    }
  },
  computed: {
    categoryList: function() {
      let list = [];
      let categories = [];
      for(let i=0; i<this.projects.length; i++){
        // For all the projects, grab the unique categories
        // saves typing them out twice when adding new ones
        let categoriesInProject = this.projects[i].categories;
        for(let j=0; j<categoriesInProject.length; j++){
          if(!list.includes(categoriesInProject[j])){
            // If the list doesn't already include that category, append it
            list.push(categoriesInProject[j]);
          }
        }
      }
      // Build the list as an object with name property
      for(let i=0; i<list.length; i++) {
        categories.push( {name: list[i]} );
      }
      // Sort by name A-Z
      categories.sort((a,b) => a.name > b.name ? 1 : -1);
      return categories;
    },
    filteredProjects: function(){
      let selectedCategories = this.categoryFilterModel;
      let allProjects = this.projects;
      let filteredProjects = [];
      if(selectedCategories.length == 0){
        // User has not used the filter option, show all projects
        return allProjects;
      }else{
        // User is filtering the projects
        for(let i=0; i<selectedCategories.length; i++){
          for(let j=0; j<allProjects.length; j++){
            if(allProjects[j].categories.includes(selectedCategories[i].name)){
              // If true, then the project matched the category
              if(!filteredProjects.includes(allProjects[j])){
                // If project is not already in the filtered list, add it to the filtered list
                filteredProjects.push(allProjects[j])
              }
            }
          }
        }
        return filteredProjects;
      }
    }
  }
}
</script>

<style scoped>

</style>
