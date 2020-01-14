<template>
    <div>
        <h3>ユーザー登録</h3>
        <p>{{ "名前: " + name }}</p>
        <input id="name" type="text" v-model="name">
        <p>{{ "自己紹介: " +bio }}</p>
        <input id="bio" type="text" v-model="bio">
        <br>
        <button @click="editUser">変更する</button>
        <p>
            <router-link
            to="/users"
            >もどる</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            name: localStorage.name,
            bio: localStorage.bio
        }
    },
    methods: {
        editUser() {
            axios.delete(`users/${localStorage.id}`,
            {
                "user_params": {
                    "name": this.name,
                    "bio": this.bio,
                }
            },
            {
                headers: {"Authorization": `Bearer ${localStorage.token}`}
            }
            )
            .then(response => response.data)
            .then(object => {
                alert("編集が完了しました。");
                localStorage.name = object.name,
                localStorage.bio = object.bio,
                location.href = "/users"
            })
            .catch(error => {
                alert(error);
            });
        }
    }
}
</script>
