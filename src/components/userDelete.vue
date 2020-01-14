<template>
    <div>
        <h2>ユーザーを削除する</h2>
        <button @click="deleteUser">削除する</button>
    </div>
</template>

<script>
import axios from "axios"
export default {
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
                    location.href = '/'
                )
                .catch(error => {
                    alert(error);
                });
            }
        }
    }
}
</script>