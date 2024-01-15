<template>
  <el-container>
    <el-header>
      <el-tag class="mr-2" type="success">
        <router-link to="/home">Home页</router-link>
      </el-tag>
      <el-tag class="mr-2" type="warning">
        <router-link to="/demo">Demo页</router-link>
      </el-tag>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
