<template>
    <div>
        <p>id指定</p>
        <input type="number" v-model="id">
        <p>テキスト変更</p>
        <input type="text" v-model="text">
        <button @click="edit">変更する</button>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            id: "",
            text: "",
        }
    },
    methods: {
        edit() {
            axios.put(`posts/${this.id}`,
            {
                "post_params": {
                    "id": this.id,
                    "text": this.text
                }
            },
            {
                headers: {"Authorization": `Bearer ${localStorage.token}`}
            },
            )
            .then(result => {
                alert("編集に成功しました");
                location.href = '/timeline';
            })

            .catch(error => {
                alert(error);
            });
        }
    }
}
</script>