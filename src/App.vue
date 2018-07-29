<template>
  <div id="app">
    <div class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">GIS TEST</a>

          <a role="button" class="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" id="navMenu">
          <div class="navbar-end">
            <router-link to="/" class="navbar-item e-item">Home</router-link>
            <router-link to="Blog" class="navbar-item e-item">Blog</router-link>
          
            <div class="navbar-item">
              <p class="control">
                <router-link to="Login" class="button is-primary is-outlined">Login</router-link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: 
  document.addEventListener('DOMContentLoaded', () => {

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

})
  }
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

#app
  padding: 0
  margin: 0
  overflow: hidden

.navbar
  background-color: #383838
  a:hover
    color: gray

.navbar-brand a
  color: #fff
  font-weight: bold

a.e-item
  color: #C1C1C1
  padding: 0.5rem 1rem
  +mobile
    color: gray
    &:hover
        background-color: #F1F1F1


</style>
