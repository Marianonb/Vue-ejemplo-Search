const API = "https://api.github.com/users/";



const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    async doSearch(){
        const response = await fetch(API + 'Marianonb')
        const data = await response.json()
        console.log(data)
    }
  }
});