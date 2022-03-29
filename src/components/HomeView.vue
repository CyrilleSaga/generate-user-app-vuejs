<template lang="html">
    <div class="container">
        <div class="user-container"  v-for="user in data" :key="user.id.name" >
            <div class="user-avatar">
                <img :src="user.picture.large" alt="Image de l'utilisateur">
            </div>
            <div class="user-footer">
                <div class="user-name">
                    {{ user.name.title +" "+ user.name.first +" "+ user.name.last }}
                </div>
                <div class="user-country">
                    {{ user.location.country }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data() {
        return {
            data: [

            ]
        }
    },
    beforeMount() {
        this.getUsers()
    },
    methods: {
        async getUsers() {
            const { data } = await axios.get("https://randomuser.me/api/?results=52")
            this.data = data.results
        }
    }
}
</script>

<style lang="scss" scoped>

.container {
    padding: 1em 3em;
    text-align: center;
    background-color: #F9F9F9;

    .user-container{
        background-color: #ffffff;
        width: 23%;
        margin: 0.5% 1%;
        padding: 1.5% 0px;
        display: inline-block;
        box-shadow: 1px 1px 20px rgba(01, 01, 01, 0.2);
        border-radius: 20px;

        &:hover {
            box-shadow: 0px 0px 0px white;
            transition: 1s;
        }

        .user-avatar {
            padding: 2% 0%;

            img {
                border-radius: 50%;
            }
        }

        .user-footer {
            .user-name {
                font-weight: 600;
                padding: 7px;
            }

            .user-country {
                color: gray;
            }
        }
    }
}

</style>
