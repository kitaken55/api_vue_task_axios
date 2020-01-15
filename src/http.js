import axios from "axios"
export default {
    methods: {
        textPost(url) {
            axios.post('posts',
                {
                    "post_params": {
                        "text": this.text
                    }
                },
                {
                    headers: { "Authorization": `Bearer ${localStorage.token}` }
                },
            )
                .then(result => {
                    this.$router.push(url)
                })

                .catch(error => {
                    alert(error);
                });
        }
    }
}