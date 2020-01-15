<template>
    <div>
        <user-edit></user-edit>
        <user-delete></user-delete>
        <br>
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
    }
}
</script>