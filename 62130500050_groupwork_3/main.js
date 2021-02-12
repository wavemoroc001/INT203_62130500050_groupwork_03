const app = {
    data() {
        return {
            tasks: [{ show1: false, like: false },
            { show: false, like: false },
            { show: false, like: false }
            ]
        }
    },
    method: {
        toggleShow(index) {
            this.tasks[index].show = !this.tasks[index].show
        },
        toggleLike(index) {
            this.tasks[index].like = !this.tasks[index].like
        }
    }
}
mountedApp = Vue.createApp(app).mount('#app')