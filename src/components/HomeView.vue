<template lang="html">
    <div class="container">
        <div class="user-container"  v-for="user in pageOfItems" :key="user.id.name">
            <router-link :to="{ name: 'userDetail', params: {id : user.id.value} }">
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
            </router-link>
        </div>
        <div class="paginate">
            <jw-pagination :items="data" :disableDefaultStyles="false" @changePage="onChangePage" pageSize="12" :labels="defaultLabels" ></jw-pagination>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            data: [],
            pageOfItems: [],
            defaultLabels: {
                first: '<<',
                last: '>>',
                previous: '<',
                next: '>'
            }
        }
    },
    beforeMount() {
        this.getUsers()
    },
    methods: {
        async getUsers() {
            const {
                data
            } = await axios.get("https://randomuser.me/api/?results=52")
            this.data = data.results
        },

        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: 1em 3em;
    text-align: center;
    background-color: #F9F9F9;

    .paginate {
        margin: 1em 0;
    }

    .user-container {
        background-color: #ffffff;
        width: 23%;
        margin: 0.5% 1%;
        padding: 1.5% 0;
        display: inline-block;
        box-shadow: 1px 1px 20px rgba(01, 01, 01, 0.2);
        border-radius: 20px;
        cursor: pointer;

        &:hover {
            box-shadow: 0 0 0 white;
            transition: 1s;
        }

        a {
            text-decoration: none;
        }

        .user-avatar {
            padding: 2% 0;

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
