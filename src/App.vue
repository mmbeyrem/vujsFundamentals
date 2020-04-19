<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png" />
              Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link exact class="nav-link" to="/build">build</router-link>
          </li>
          <li class="nav-item">
            <router-link exact class="nav-link" to="/parts/browse">browse</router-link>
          </li>
          <li v-shine="{border:'solid'}" class="nav-item cart">
            <router-link
              exact
              class="nav-link"
              to="/cart"
            >shopping cart({{ shoppingCartItemsCount }})</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside-bar">
        <router-view name="sidebar" />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    shoppingCartItemsCount() {
      console.log(this.$store.state.robots.cart);
      return this.$store.state.robots.cart.length;
    }
  }
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside-bar {
  padding: 30px;
  background-color: ivory;
  width: 100px;
  min-height: 300px;
}
</style>
