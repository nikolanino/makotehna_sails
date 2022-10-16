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

                language: '',

                categorySelected: '',
                backgroundImage: '',

                showMessage: false,
                messageText: '',

            }   
        },

        mounted() {
            axios.get('/getData').then(response => { 
                this.products = response.data.products;
                this.categories = response.data.categories;
                // console.log(response.data)
            });
            this.changeBG();

            console.log(document.querySelector("html").getAttribute('lang'));

            var lang = sessionStorage.getItem("lang");
            document.querySelector("html").setAttribute('lang', lang);
            this.language = lang;

            if(lang == null){
                sessionStorage.setItem("lang", 'mk');
                this.language = 'mk';
            }
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
            },

            changeLanguage(){
                var lang = sessionStorage.getItem("lang");

                if(lang == 'mk'){
                    sessionStorage.setItem("lang", "en");
                    document.querySelector("html").setAttribute('lang', 'en');
                    this.language = 'en';
                } else if(lang == 'en'){
                    sessionStorage.setItem("lang", "mk");
                    document.querySelector("html").setAttribute('lang', 'mk');
                    this.language = 'mk';
                }
            },

            submitCForm(){

                axios.post('/contact/sendmail', { 
                        emailFrom: this.$refs.emailInput.value, 
                        subject: this.$refs.subjectInput.value, 
                        message: this.$refs.messageInput.value 
                    }).then(response => {
                        if(response.message == 'Вашата порака не е испратена, пратете повторно.'){
                            this.showMessage = true;
                            this.messageText = response.data.message;
                        }else{
                            this.showMessage = true;
                            this.messageText = response.data.message;
                        }

                })
            },    

        },
    }

    const mainApp = Vue.createApp(clientData).mount('#mainApp');





