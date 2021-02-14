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
            toggleLike(index) {
            this.tasks[index].dislike = !this.tasks[index].like
            this.tasks[index].like = !this.tasks[index].dislike
            console.log("state \n tasks[index].dislike \n tasks[index].like")
        },
         welcome:function (event) {
            console.log("Hello");            
        }
    }
}
mountedApp = Vue.createApp(app).mount('#app')