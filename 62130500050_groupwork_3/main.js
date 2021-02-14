const app = {
    data() {
        return {
            tasks: [{
                title: 'Emeral Lake, USA',
                src: './images/Emeral_Lake.jpg',
                detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores facere nemo sunt excepturi exercitationem? Neque consequatur, ullam voluptatibus soluta labore, praesentium in quae blanditiis itaque fuga dolore reiciendis quam.',

                like: false,
                dislike: true,
                showInfo: false
            },
            {
                title: 'Floras Lake, USA',
                src: './images/Floras_Lake.jpg',
                detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores facere nemo sunt excepturi exercitationem? Neque consequatur, ullam voluptatibus soluta labore, praesentium in quae blanditiis itaque fuga dolore reiciendis quam.',

                like: false,
                dislike: true,
                showInfo: false
            },
            {
                title: 'Ninh Binh, Vietname',
                src: './images/Ninh_Binh_Vietnam.jpg',
                detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores facere nemo sunt excepturi exercitationem? Neque consequatur, ullam voluptatibus soluta labore, praesentium in quae blanditiis itaque fuga dolore reiciendis quam.',

                like: false,
                dislike: true,
                showInfo: false
            },
            {
                title: 'Oak Alley, USA',
                src: './images/Oak_Alley_Us.jpg',
                detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores facere nemo sunt excepturi exercitationem? Neque consequatur, ullam voluptatibus soluta labore, praesentium in quae blanditiis itaque fuga dolore reiciendis quam.',

                like: false,
                dislike: true,
                showInfo: false
            },
            {
                title: 'Skagit Valley, USA',
                src: './images/Skagit_Valley_Us.jpg',
                detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores facere nemo sunt excepturi exercitationem? Neque consequatur, ullam voluptatibus soluta labore, praesentium in quae blanditiis itaque fuga dolore reiciendis quam.',

                like: false,
                dislike: true,
                showInfo: false
            }
            ]
        }
    },

    methods: {
        toggleShow(index) {
            this.tasks[index].showInfo = !this.tasks[index].showInfo
            console.log(`ShowInfo : ${this.tasks[index].showInfo}`)
        },
        toggleLike(index) {
            this.tasks[index].dislike = !this.tasks[index].dislike
            this.tasks[index].like = !this.tasks[index].like
            console.log(`${index} \n  LIKE : ${this.tasks[index].like} \n DISLIKE : ${this.tasks[index].dislike}`);
        },

    },
    computed: {
        countLike() {
            return this.tasks.filter(t => t.like).length
        }
    }


}
Vue.createApp(app).mount('#app')