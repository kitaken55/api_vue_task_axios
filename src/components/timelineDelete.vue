<template>
    <div>
        <p>id指定</p>
        <input type="number" v-model="id">
        <br>
        <button @click="delete_text">変更する</button>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            id: "",
        }
    },
    methods: {
        delete_text() {
            axios.delete(`posts/${this.id}`,
            {
                headers: {"Authorization": `Bearer ${localStorage.token}`}
            },
            )
            .then(result => {
                alert("削除に成功しました");
                location.href = '/timeline';
            })

            .catch(error => {
                alert(error);
            });
        }
    }
}
</script>