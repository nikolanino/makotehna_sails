//
//  clientScript.js
//
/*==================================*/


    const clientData = {
        el: "#mainApp",
        data() {
            return {
                products: {},
                categories: {},

                images: [
                    "../images/background.png",
                    "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
                ],

                timer: null,
                currentIndex: 0,

                categorySelected: ''
            }   
        },

        mounted() {
            axios.get('/getData').then(response => { 
                this.products = response.data.products;
                this.categories = response.data.categories;
                // console.log(response.data)
            });

            this.startSlide();
        },

        methods: {

            changeCategory(name){
                this.categorySelected = name;
            },

            currentImg() {
                return this.images[Math.abs(this.currentIndex) % this.images.length];
            },
            
            startSlide() {
                this.timer = setInterval(this.next, 4000);
            },

            next() {
                this.currentIndex += 1;
            },
            prev() {
                this.currentIndex -= 1;
            }

        },
    }

    const mainApp = Vue.createApp(clientData).mount('#mainApp');





