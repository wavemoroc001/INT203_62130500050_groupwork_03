const app = {
    data() {
        return {
            tasks: [{
                title: 'Emeral Lake USA',
                src: './images/Emeral Lake.jpg',
                des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, aperiam? Earum molestias vel voluptatibus, qui voluptatem sint possimus. Voluptatem, optio!',
                show: false,
                like: false,
                dislike: true
            }
            ]
        }
    },
    method: {
        toggleLike(){
        }
    }
}
mountedApp = Vue.createApp(app).mount('#app')