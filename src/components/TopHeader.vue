<template>
  <nav id="navbar" class="navbar navbar-expand-lg py-2  m-0 sticky-top">
    <div class="container-fluid">
      <router-link
        class="navbar-brand fs-3 fw-bold primary text-decoration-none d-flex align-items-center"
        to="/"
      >
          <img src="@/assets/logo.png" class="img-fluid" style="width: 30px">
          <strong class="ms-2">WhatToMix</strong>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-row-reverse" id="collapsibleNavbar">
        <ul class="navbar-nav d-flex align-items-center">

            <li class="nav-item" >
                <router-link to="/search" class="item text-decoration-none ">
                    Search
                </router-link>
            </li>

            <li class="nav-item" >
            <router-link to="/mixMatch" class="item text-decoration-none ">
                MixMatch
            </router-link>
            </li>

            <li class="nav-item" >
                <router-link to="/glass" class="item text-decoration-none ">
                    Glass
                </router-link>
            </li>

            <li class="nav-item" >
                <router-link to="/category" class="item text-decoration-none ">
                    Category
                </router-link>
            </li>

            <li class="nav-item" >
                <router-link to="/Alcoholic" class="item text-decoration-none ">
                    Alcoholic
                </router-link>
            </li>

        </ul>
      </div>
    </div>
  </nav>

</template>

<script setup lang="ts">



</script>

<style lang="css" scoped>
#navbar{
  background-color: rgba(247, 247, 248, 0.7);
}

.item {
  color: black;
  font-size: 20px;
  margin-inline: 14px;
}

.navbar-nav .nav-item {
  padding: 10px;
}


</style>
