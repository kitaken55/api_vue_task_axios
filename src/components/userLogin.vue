<template>
   <div>
    <h3>ログイン</h3>
     <p>{{ `email: ${email}` }}</p>
     <input id="email" type="text" v-model="email">
     <p>{{ `パスワード:` }}</p>
     <input id="password" type="text" v-model="password">
     <p>{{ `パスワード(再入力):` }}</p>
     <input id="password_confirmation" type="text" v-model="password_confirmation">
     <br><br>
     <button @click="loginUsers">ログイン</button>
    <p>
        <router-link
        to="/"
        >新規登録はこちら</router-link>
    </p>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            email: "",
            password: "",
            password_confirmation: ""
        }
    },
    methods: {
        loginUsers() {
            axios.post('sign_in',{
                "sign_in_user_params": {
                    "email": this.email,
                    "password": this.password,
                    "password_confirmation": this.password_confirmation
                }
            })
            .then(response => response.data)
            .then(object => {
                if (object.token) {
                    alert("ログインしました");
                    localStorage.token = object.token;
                    localStorage.id = object.id;
                    localStorage.name = object.name;
                    localStorage.bio = object.bio;
                    this.$router.push('/users');
                } else {
                    alert("存在しないアカウントです。");
                }
                })
            .catch(error => {
                alert(error);
            });
        }
    }

}
</script>