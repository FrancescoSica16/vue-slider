var app = new Vue({

    el: '#app',

    data: {

        // myclass: "classe promva",

      images : [
          {
            source: "https://assets.change.org/photos/6/xg/aq/HrXGaqjJbVlPYcq-800x450-noPad.jpg?1525088692",
            alt:"L'ora esatta"
          },
          {
            source: "https://www.vivodibenessere.it/wp-content/uploads/2010/12/giorno-e-notte.jpg",
            alt:"Giorno e notte"
          },
          {
            source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/TG5_Prima_Pagina_-_Logo_2018.svg/1200px-TG5_Prima_Pagina_-_Logo_2018.svg.png",
            alt:"TG 5"
          },
      ],
      indexImages : 0,  // errore se lo metto fuori da images
    },

    

    methods: {
        previousImages : function(){   // posso scrivere le funzione solo cosi ?
            this.indexImages-- ;   //perche metto this ?
            console.log(this.indexImages) 
            
            if(this.indexImages < 0){
                this.indexImages = this.images.lenght-1;
            }
        },
        nextImages : function(){   
            this.indexImages++ ;
            console.log(this.indexImages)

            if(this.indexImages >= this.images.lenght){
                this.indexImages = 0;
            }  
        },
       
    },
  })