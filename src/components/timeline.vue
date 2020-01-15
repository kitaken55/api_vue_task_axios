<template>
    <div>
        <p>
            <router-link
            to="/users"
            >もどる</router-link>
        </p>
        <h1>自分のタイムライン</h1>
        <input type="text" v-model="text">
        <br>
        <button @click="textPost('/timeline')">ツイートする</button>
        <div class="board" v-for="timeline in getTimeline" :key="timeline.id">
            <hr>
            <div>
                <p>{{ timeline.id }}</p>
                <p>名前: {{ timeline.text }}</p>
                <!-- ここにtimeline.idを使った動的なviwe-router -->
                <router-link :to="{ path: '/timeline/edit', query: {id: timeline.id, text: timeline.text}} ">テキスト編集</router-link >
                <br>
                <a class="delete_text" @click="delete_text(timeline.id)">テキストを削除</a>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import http from "../http.js"
export default {
        data() {
            return {
                text: "",
                getTimeline: [],
            }
        },
        created() {
            if(localStorage.token) {
                axios.get(`users/${localStorage.id}/timeline`, {
                    headers: {"Authorization": `Bearer ${localStorage.token}`}
                })
                .then(response => response.data)
                .then(object => this.getTimeline = object)
                .catch(error => {
                    alert(error);
                });
            }
        },
        mixins: [http],

        methods: {
            //投稿削除
            delete_text(id) {
                if (confirm(`この投稿(${id})を消しますか？`)) {
                    axios.delete(`posts/${id}`,
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
}
</script>

<style>
    .delete_text {
        cursor: pointer;
        border-bottom: solid 1px blue;
        color: blue;
    }
</style>