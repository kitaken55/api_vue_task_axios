<template>
    <div>
        <p>
            <router-link
            to="/me/edit"
            >ユーザー編集</router-link>
            |
            <router-link
            to="/me/timeline"
            >自分のタイムライン</router-link>
            |
            <router-link
            to="/timeline/all"
            >みんなのタイムライン</router-link>
        </p>
       <div v-if="auth">
            <h1>ユーザー一覧</h1>
            <div class="board" v-for="users in getUsers" :key="users.id">
                <hr>
                <div>名前: {{ users.name }}</div>
                <br>
            </div>
       </div>
       <div v-else>
           <p>ログインしていません</p>
       </div>

    </div>
</template>

<script>
import axios from "axios"
import userDelete from "./userDelete"
export default {
        data() {
            return {
                auth: false,
                getUsers: []
            }
        },
        components: {
            userDelete
        },
        created() {
            if(localStorage.token) {
                this.auth = true;
                axios.get('users', {
                    headers: {"Authorization": `Bearer ${localStorage.token}`}
                })
                .then(response => response.data)
                .then(object => this.getUsers = object)
                .catch(error => {
                    alert(error);
                });
            }
        }
}
</script>