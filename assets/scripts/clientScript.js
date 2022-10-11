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

                categorySelected: ''
            }   
        },
        methods: {

            changeCategory(name){
                this.categorySelected = name;
            },

        },
        mounted() {
            axios.get('/getData').then(response => { 
                this.products = response.data.products;
                this.categories = response.data.categories;
                // console.log(response.data)
            })
        }
    }

    const mainApp = Vue.createApp(clientData).mount('#mainApp');





