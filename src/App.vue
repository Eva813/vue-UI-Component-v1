<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Button</RouterLink>
        <RouterLink to="/paginationView">Pagination</RouterLink>
        <RouterLink to="/switchBtnView">Switch Button</RouterLink>
        <RouterLink to="/searchBarView">searchBarView</RouterLink>
        <RouterLink to="/selectView">select</RouterLink>
        <RouterLink to="/chipsView">chips</RouterLink>
        <RouterLink to="/dialogView">Dialog</RouterLink>
        <RouterLink to="/checkboxView">Checkbox</RouterLink>
        <RouterLink to="/expansionView">ExpansionView</RouterLink>
        <RouterLink to="/formsView">formsView</RouterLink>
        <RouterLink to="/sliderView">sliderView</RouterLink>
        <RouterLink to="/tooltipView">Tooltips</RouterLink>
        <RouterLink to="/uploadView">Upload</RouterLink>
        <RouterLink to="/cardView">Card</RouterLink>
        <div class="px-3">Other practice</div>
        <RouterLink to="/testPage">TEST</RouterLink>
        <RouterLink to="/scrollTest">scrollTest</RouterLink>
        <RouterLink to="/dynamicComponent_1">DynamicComponent_1</RouterLink>
        <RouterLink to="/dynamicComponent_1">DynamicComponent_1</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
