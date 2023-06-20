<script setup>
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px"><NavBar></NavBar></el-aside>
        <el-container>
          <el-header><Header></Header></el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
<style scoped>
.common-layout {
    height: 100vh; /* 100% de la altura de la ventana */
    margin: 0;
    padding: 0;
}

.el-container, .el-header {
    height: 100%; /* 100% del alto del contenedor padre */
}

.el-main {
    height: calc(100% - altura_del_header); /* Restar la altura del header si es necesario */
}
</style>

