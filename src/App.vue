<template>
  <menu-bar></menu-bar>
  <div class="pseudo-menu"></div>
  <div class="p-grid padded-content">
    <div class="p-col-12 p-xl-8 p-xl-offset-2 p-lg-10 p-lg-offset-1" id="wrapper">
      <router-view></router-view>
    </div>
  </div>
  <footer-element></footer-element>
</template>

<script>
import MenuBar from "./components/MenuBar";
import FooterElement from "./components/FooterElement";

export default {
  name: 'App',
  components: {
    MenuBar,
    FooterElement
  }
}
</script>

<style>
p{
  font-family: Garamond;
}
.p-fieldset-legend-text{
  font-family: Garamond;
  font-size: 1.5rem;
}
.padded-content{
  padding: 1rem;
}
.p-menubar{
  position: fixed;
  width: 100%;
  background: #FFFFFF;
  height: 90px;
  z-index: 999;
  padding: 0;
  margin: 0;
  top: 0px;
}
.pseudo-menu{
  height: 90px;
}
.p-menubar ul{
  margin: 0 auto 0 auto;
}
.p-menubar-button{
  margin: 0 auto 0 auto;
}
.active-nav-item{
  border-bottom: 1px dashed #a7a6a6;
  display: inline;
  line-height: 1.5;
}

</style>
