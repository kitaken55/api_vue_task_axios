<template>
    <div>

    </div>
</template>

<script>
import axios from "axios"
export default {
        created() {
            axios.get(`timeline`, {
                headers: {"Authorization": `Bearer ${localStorage.token}`}
            })
            .then(response => response.data)
            .then(object => this.getTimeline = object)
            .catch(error => {
                alert(error);
            });
    },
}
</script>