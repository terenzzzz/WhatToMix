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

            <li class="nav-item" >
                <i class="bi bi-translate btn " data-bs-toggle="modal" data-bs-target="#languageModal"></i>
            </li>
        </ul>
      </div>
    </div>
  </nav>
    <!-- Modal -->
    <div class="modal modal-xl fade" id="languageModal" tabindex="-1" aria-labelledby="languageModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="languageModal"> <i class="bi bi-translate me-2"></i>Language Translations</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Since the service is provided by a third party (<a href="https://www.thecocktaildb.com/">TheCocktailDB</a>) and they do not offer a translation interface, we recommend using a browser extension for easier access to the website.</p>

                    <p>Suggested plugin: <a href="https://chromewebstore.google.com/detail/%E6%B2%89%E6%B5%B8%E5%BC%8F%E7%BF%BB%E8%AF%91-%E7%BD%91%E9%A1%B5%E7%BF%BB%E8%AF%91%E6%8F%92%E4%BB%B6-pdf%E7%BF%BB%E8%AF%91-%E5%85%8D%E8%B4%B9/bpoadfkcbjbfhfodiogcnhhhpibjhbnh?pli=1">沉浸式翻译</a>(Free)</p>

                </div>
            </div>
        </div>
    </div>

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
