const app = Vue.createApp({

    data() {
        return {
            fName: "Patrick",
            lName: "Nouer",
            email: "patricknouer@gmail.com",
            gender: "male",
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        };
    },
    methods: {
       async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const  { results } = await res.json();
            
            (this.fName = results[0].name.fisrty),
            (this.lName = results[0].name.last),
            (this.email = results[0].email),
            (this.gender = results[0].gender),
            (this.picture = results[0].picture.large);
            
        },
    },
});
app.mount("#app");