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
                    "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
                ],

                timer: null,
                i: 0,

                categorySelected: '',
                backgroundImage: ''

            }   
        },

        mounted() {
            axios.get('/getData').then(response => { 
                this.products = response.data.products;
                this.categories = response.data.categories;
                // console.log(response.data)
            });
            this.changeBG();
        },

        methods: {

            changeCategory(name){
                this.categorySelected = name;
            },
    
            changeBG: function() {
                this.i++;
                if(this.i == this.images.length){
                    this.i = 0;
                }

                this.backgroundImage = this.images[this.i];
                setTimeout(() => {
                    this.changeBG()
                    AOS.init();
                }, 5000);
            },

            redirectToCategory(id){
                window.location.replace('/category/'+id);
            }     

        },
    }

    const mainApp = Vue.createApp(clientData).mount('#mainApp');





