<template>
    <div>
        <p>テキスト変更</p>
        <input type="text" v-model="text">
        <br>
        <button @click="edit">変更する</button>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            id: this.$route.query.id,
            text: this.$route.query.text,
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
                this.$router.push('/timeline');
            })

            .catch(error => {
                alert(error);
            });
        }
    }
}
</script>