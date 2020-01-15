<template>
    <div>
        <user-edit></user-edit>
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
import userDelete from "./userDelete"
export default {
    components: {
        userEdit,
        userDelete
    },
    methods: {
        logout() {
            alert("ログアウトしました。")
            localStorage.clear();
            location.href = '/';
        }
    }
}
</script>