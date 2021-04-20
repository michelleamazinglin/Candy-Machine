let db = firebase.firestore();
let candiesRef = db.collection('candies');


let app = new Vue({
  el: "#app",
  data: {
    candies: [],
    candyBody: "",
    candyWrap: 1,
    error: "",
    isHidden: true,
    num: 0,
    newCandy: "",
    candyWrap: 0,
    candyId: "",
    username: "",
    searchedUsername: "",
    sortedCandies: [],
  },
  methods: {
    addCandy(){
      if (this.candyBody != "" && this.username != "") {
        candiesRef.add({
        body: this.candyBody,
        wrap: this.candyWrap,
        username: this.username,
      })
      .then(function(doc) {
        doc.set({id: doc.id}, {merge: true});
      });
      this.reset();
      this.updateData();
      this.error = "Thank you for dropping a candy!";
      } else {
        this.error = "username/candy input can't be empty";
      }
    },
    
    reset() {
      this.candyBody = "";
      this.candyWrap = 1;
      this.error = "";
      this.resetNum();
    },
    
    updateData(){
      candiesRef.get().then(snapshot => {
        let candies = [];
        snapshot.forEach(doc => {
          candies.push(doc.data());
        });
        this.candies = candies;
      })
    },  
    
    getModal(){
      this.isHidden = false;
      this.getNewCandy();
    },
    
    closeModal(){
      this.isHidden = true;
      // document.location.reload(true);
    },
    
    resetNum(){
      this.num = this.candies.length;
    },
    
    getNewCandy(){
      let num = Math.floor(Math.random() * this.candies.length);
      let newCandy =  this.candies[num];
      this.newCandy = newCandy.body;
      this.candyWrap = newCandy.wrap;
      this.candyId = newCandy.id;
      this.searchedUsername = newCandy.username;
      return newCandy;
    },
    
    deleteCandy() {
      let id = this.candyId;
      candiesRef.doc(id).delete();
      this.reset();
      this.closeModal();
    },
    
    deleteSortedCandy(id){
      candiesRef.doc(id).delete();
      this.sortedCandies = this.sortedCandies.filter(candy => candy.id != id);
    },
    
    searchCandies(){
      let candies = this.candies;
      candies.filter(candy => candy.username == this.searchedUsername);
      this.sortedCandies = candies.filter(candy => candy.username == this.searchedUsername);
    }
    
  },
  computed: {
    wrap1(){
      return this.candyWrap == 1;
    },
    wrap2(){
      return this.candyWrap == 2;
    },
    wrap3(){
      return this.candyWrap == 3;
    },
    wrap4(){
      return this.candyWrap == 3;
    },
    candyLength(){
      return this.candies.length;
    },
    
    
  },
  mounted() {
    candiesRef.onSnapshot(querySnapshot => {
      let candies = [];
      querySnapshot.forEach(doc => {
        candies.push(doc.data());
      })
      this.candies = candies;
    });
  }
});