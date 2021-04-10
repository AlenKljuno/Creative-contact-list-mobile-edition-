var vue = new Vue({
    el:'#app',
    data:{
        search:'',
        newSearch:'',
        showModal: false,
        newItem:'',
        contacts: [
            {   title:'Amir',number:'+38762154785'},
            {  title:'Jasmin',number:'+38762112356'},
            { title:'Tarik',number:'+38762451223'},
            {title:'Džejna',number:'+38762256853'}
        ],
        contacts2:[],
        modals : [
            {title:'Project - Contacts',desc:'I had this idea about contacts, but I wanted to make it like inside a phone, all with HTML CSS and JavaScript using framework Vue and a bit of Vanilla JS. '}]
       
       
    
    },
    methods:{
        addItem(){
            this.contacts2.push(this.newItem);
        this.newItem = '';
       

        },
        dlt(index){
        this.contacts.splice(index, 1);
        },
        enableEnter(e){
            if(e.keyCode === 13){
            this.addItem();
            }  
        },
        delete1(index){
            this.contacts2.splice(index, 1);
        }
   
    },
    computed: {
        filteredContacts: function(){
            return this.contacts.filter((contact) =>{
                return contact.title.match(this.search);
            })

        },
        filteredNewContacts: function(){
            return this.contacts2.filter((cont) =>{
                return cont.match(this.search)
            })
        }
    }
});