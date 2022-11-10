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
                    "../images/background.jpeg",
                    "../images/1.jpeg",
                    "../images/2.jpeg",
                    "../images/3.jpeg"
                ],

                timer: null,
                i: 0,

                language: '',

                categorySelected: '',
                backgroundImage: '',

                showMessage: false,
                messageText: '',

                device: '',

            }   
        },

        mounted() {
            axios.get('/getData').then(response => { 
                this.products = response.data.products;
                this.categories = response.data.categories;
                // console.log(response.data)
            });
            this.changeBG();

            var lang = sessionStorage.getItem("lang");
            document.querySelector("html").setAttribute('lang', lang);
            this.language = lang;

            if(lang == null){
                sessionStorage.setItem("lang", 'mk');
                this.language = 'mk';
            }

            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                this.device = 'mobile';
            }else{
                this.device = 'desktop';
            }

            var url = window.location.pathname;
            var category_id = sessionStorage.getItem("categoryID");
            if(url == '/category/'+category_id){
                var product_id = sessionStorage.getItem("productID");
                setTimeout(() => {
                    var element = document.getElementById("productModal_"+product_id);
                    element.style.display = "block";

                    document.getElementById("button_"+product_id).style.background = "#2e611b";
                    document.getElementById("button_text_"+product_id).style.background = "#2e611b";
                    document.getElementById("button_text_"+product_id).style.color = "#fff";

                    sessionStorage.setItem("productID", '');
                    sessionStorage.setItem("categoryID", '');
                }, 500);

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
                    // AOS.init();
                }, 5000);
            },

            redirectToCategory(id){
                window.location.replace('/category/'+id);
            },

            changeLanguageOld(){
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

            changeLanguage(selectedLang){
                sessionStorage.setItem("lang", selectedLang);
                document.querySelector("html").setAttribute('lang', selectedLang);
                this.language = selectedLang;
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

            openModal(productID, categoryID){
                sessionStorage.setItem('productID', productID);
                sessionStorage.setItem('categoryID', categoryID);
                window.location.href = "/category/"+categoryID;
            }   

        },
    }

    const mainApp = Vue.createApp(clientData).mount('#mainApp');





