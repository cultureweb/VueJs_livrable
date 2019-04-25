
new Vue({
    el: '#app',

    data: {
        title: 'My first project with VueJS',
        title2: 'Mettre à jour ce contenu en saisissant et cliquant sur le bouton change title :',
        newTitle2: '',
        success: false,
        checked: false,
        isActive: false,
        showImg: false
       

        

    },

    methods: {
        

        record() {
            this.success = true;
            this.title2 = this.newTitle2;
        }
    }
});