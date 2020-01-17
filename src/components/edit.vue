<template>
    <div id="components-demo">
        <!-- <user-edit></user-edit> -->
        <user-delete></user-delete>
        <br>
        <button @click="logout">ログアウトする</button>
        <br><br>
        <router-link
            to="/users"
        >もどる</router-link>
    </div>
</template>

<script>
import userEdit from "./userEdit"
import axios from "axios"
// import userDelete from "./userDelete"
new Vue({ el: '#components-demo' })

Vue.component('user-delete', {
    methods: {
        deleteUser() {
            if (confirm("本当にけしますか？")) {
                axios.put(`users/${localStorage.id}`,
                {
                    headers: {"Authorization": `Bearer ${localStorage.token}`}
                }
                )
                .then(
                    localStorage.clear(),
                    alert("ユーザーは消えました"),
                    this.$router.push('/')
                )
                .catch(error => {
                    alert(error);
                });
            }
        }
    },
    template: `<div>
                    <h2>ユーザーを削除する</h2>
                    <button @click="deleteUser">削除する</button>
                </div>`
})

export default {
    components: {
        userEdit,
        // userDelete
    },
    methods: {
        logout() {
            alert("ログアウトしました。")
            localStorage.clear();
            this.$router.push('/');
        }
    }
}
</script>