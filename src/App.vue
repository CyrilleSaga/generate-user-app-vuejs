<template>
    <div id="app">
        <NavLink />
        <router-view />
    </div>
</template>

<script>
    import NavLink from './components/NavLink.vue'
    export default {
        components: {
            'NavLink' : NavLink
        }
    }
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
a {
    text-decoration: none;
    color: white;
}
</style>

<!-- &.router-link-exact-active {
    color: #42b983;
} -->
