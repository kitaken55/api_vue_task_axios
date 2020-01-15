<template>
    <div>
        <p>
            <router-link
            to="/users"
            >もどる</router-link>
        </p>
        <h1>みんなのタイムライン</h1>
        <input type="text" v-model="text">
        <br>
        <button @click="textPost('/timeline/all')">ツイートする</button>
        <div v-for="allTimeline in getAllTimeline" :key="allTimeline.id">
        <hr>
        <p>{{ allTimeline.text }}</p>
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
                getAllTimeline: []
            }
        },
        created() {
            axios.get(`posts`, {
                headers: {"Authorization": `Bearer ${localStorage.token}`}
            })
            .then(response => response.data)
            .then(object => this.getAllTimeline = object)
            .catch(error => {
                alert(error);
            });
        },
        mixins: [http],
}
</script>