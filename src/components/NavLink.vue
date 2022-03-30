<template lang="html">
    <nav>
        <span>Random Users</span>
        <div>
            <router-link :to="{ name: '/', params: {} }">Home</router-link>
        </div>
        <div class="social">
            <li>FaceBook</li>
            <li>WhatSapp</li>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavLink'
}
</script>

<style lang="scss" scoped>
    nav {
        background-color:  #212F3D;
        padding: 18px;
        color: white;
        display: flex;
        justify-content: space-between;

        span {
            letter-spacing: 3px;
            font-weight: 900;
            font-size: 18px
        }

        div {
            display: flex;
            justify-content: center;

            a {
                text-decoration: none;
                color: white;
            }

            li {
                list-style-type: none;
                padding-left: 5px;
            }
        }

    }
</style>
