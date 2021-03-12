
// console.log('hello world');

var app = new Vue ({
    el: '#root',
    data: {
        user: {
            name: 'User',
            photo: 'img/profile.jpg',
            thoughts: 'Disponibile',
        },
        emojis : ['🙂', '😀', '😂', '🤣', '😅', '😆', '❤️', '😁', '😇', '🥰', '🤩', '😋', '🤯',' 🤠', '😎', '🤓', '😨', '😢', '😈', '👾', '👍', '👋', '👌', '🤟', '🙈', '🙉', '🙊', '🐶', '🐯', '🐭', '🦔', '🐼', '🐨', '🐔', '🐸', '🦖'],
        contacts: [
            {
                name: 'Mario',
                photo: 'img/c_1.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ue come va?',
                        status: 'sent-messages',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Tutto bene',
                        status: 'recived-messages',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tu?',
                        status: 'recived-messages',
                    },
                    {
                        date: '10/01/2020 16:20:22',
                        message: 'Tutto bene anche io',
                        status: 'sent-messages',
                    },
                    {
                        date: '10/01/2020 16:25:22',
                        message: 'Hai bisogno?',
                        status: 'recived-messages',
                    },
                    {
                        date: '10/01/2020 16:27:22',
                        message: 'no tu?',
                        status: 'sent-messages',
                    },
                    {
                        date: '10/01/2020 16:29:22',
                        message: 'Nemmeno io',
                        status: 'recived-messages',
                    },
                    {
                        date: '10/01/2020 16:30:22',
                        message: 'Ok',
                        status: 'sent-messages',
                    },
                ]
            },
            {
                name: 'Luigi',
                photo: 'img/c_2.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent-messages',
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'recived-messages',
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent-messages',
                    },
                    {
                        date: '20/03/2020 16:38:00',
                        message: 'Ho finito le ossa.',
                        status: 'sent-messages',
                    },
                    {
                        date: '20/03/2020 16:45:00',
                        message: 'Ah mi spiace.',
                        status: 'recived-messages',
                    },
                ]
            },
            {
                name: 'Paola',
                photo: 'img/c_3.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'Ciao come stai?',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Bene grazie?',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Son contento',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:20:22',
                        message: 'Anche io grazie',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: 'E\' sempre un piacere parlare con te',
                        status: 'recived-messages',

                    },
                    {
                        date: '28/03/2020 16:35:22',
                        message: 'Grazie',
                        status: 'sent-messages',
                    },
                ]
            },
            {
                name: 'Giulia',
                photo: 'img/c_4.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent-messages',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Tranquillo!',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: 'Il cane è scappato!',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:27:22',
                        message: 'Rincorrilo!',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:28:22',
                        message: 'Sai che non posso',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:30:22',
                        message: 'Tornerà',
                        status: 'recived-messages',
                    },
                ]
            },
            {
                name: 'Giuliano',
                photo: 'img/c_5.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hey ciao',
                        status: 'recived-messages',
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Quanto tempo!',
                        status: 'recived-messages',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'ci sarà un motivo',
                        status: 'sent-messages',
                    },

                ]
            },
            {
                name: 'Sara',
                photo: 'img/c_6.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent-messages',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Sai che sono intollerante?',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah non lo sapevo!',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: 'Ma l\'altro giorno hai mangiato la pizza',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:35:22',
                        message: 'Ma in fatti non sono intollerante alla pizza....',
                        status: 'recived-messages',
                    },

                ]
            },
            {
                name: 'Rino',
                photo: 'img/c_7.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao!',
                        status: 'recived-messages',
                    },
                    {
                        date: '20/01/2020 16:30:55',
                        message: 'Ciao!',
                        status: 'recived-messages',
                    },
                    {
                        date: '22/01/2020 17:30:55',
                        message: 'Ciao!',
                        status: 'recived-messages',
                    },
                    {
                        date: '29/01/2020 18:30:55',
                        message: 'Ciao!',
                        status: 'recived-messages',
                    },

                ]
            },
            {
                name: 'Marco',
                photo: 'img/c_8.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai sentito?',
                        status: 'recived-messages',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Tranquillo',
                        status: 'sent-messages',
                    },
                ]
            },
            {
                name: 'Martino',
                photo: 'img/c_9.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao!',
                        status: 'sent-messages',
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Come va?',
                        status: 'sent-messages',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Tutto bene grazie',
                        status: 'recived-messages',
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'A te come va?',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Non mi lamento',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: 'Bene!',
                        status: 'recived-messages',
                    },
                ]
            },
            {
                name: 'Pino',
                photo: 'img/c_10.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao',
                        status: 'sent-messages',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ciao',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ciao',
                        status: 'sent-messages',
                    }
                ]
            },
            {
                name: 'Giustino',
                photo: 'img/c_11.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Stasera esci?',
                        status: 'sent-messages',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si',
                        status: 'recived-messages',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'dove ci vediamo?',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Solito posto',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: 'Quale solito?',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:35:22',
                        message: 'Solito 1 o solito 2?',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:45:22',
                        message: 'Solito 2',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:47:22',
                        message: 'Manda indirizzo',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:55:22',
                        message: 'Via Solito 2',
                        status: 'sent-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Meglio che parto ora',
                        status: 'recived-messages',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ok a dopo',
                        status: 'sent-messages',
                    },
                ]
            },
        ],
        active: 0,
        userWriting: '',
        chatSearch: '',
        attualIndex: 0,
        emojiCondition: false,
    },
    methods:{
        // funzione che al click deve far cambiare lo stato di active e prendere il valore dell'index dell'elemento cliccato
        changeChat(index){
            this.active = index;
            // console.log(index);

        // MESSO PER SCROLL GIA FATTO QUANDO CAMBIO CHAT
            this.$nextTick(function(){
                document.getElementById("box-messages").scrollTop = document.getElementById("box-messages").scrollHeight;
            });

            this.emojiCondition = false;

        },
        sendMessages(){
        // se l'utente ha digitato almeno un carattere invia il messaggio
            if (this.userWriting.trim().length > 0 ) {
                this.contacts[this.active].messages.push({
                    message: this.userWriting,
                    status: 'sent-messages',
                    date: dayjs().format('HH:mm'),
                });


                this.startReply();

                // soluzione per scroll down senza setTimeout
                this.$nextTick(function(){
                    document.getElementById("box-messages").scrollTop = document.getElementById("box-messages").scrollHeight;
                });

            }
            this.emojiCondition = false;
            this.userWriting = '';
        },

// -------------RISPOSTA AUTOMATICA--------------------
        // funzione che aggiunge la risposta
        autoReply(){
            this.contacts[this.active].messages.push({
                message: 'Ciao tutto bene e te?',
                status: 'recived-messages',
                date: dayjs().format('HH:mm'),
            });


            // soluzione per scroll down senza setTimeout
            this.$nextTick(function(){
                document.getElementById("box-messages").scrollTop = document.getElementById("box-messages").scrollHeight;

            });

        },

        // funzione che fa scattare il timer per poi richiamare autoReply
        startReply(){
            setTimeout(this.autoReply, 2000);

        },

// -------------FINE RISPOSTA AUTOMATICA--------------------


// FUNZIONE PER CERCARE NELL'INPUT IL NOME DEL CONTATTO
        searchInChat(item){
        // imposto una variabile per calcolare la prima lettera come maiuscola
        let letLower = item.name.charAt(0).toLowerCase() + item.name.slice(1);
            if (letLower.includes(this.chatSearch)) {
                return true;
            }
        },
// FINE FUNZIONE PER CERCARE NELL'INPUT IL NOME DEL CONTATTO



        showHiddenMenu(index){
            if (this.contacts[this.active].messages[index].hiddenChatMenu == 'hidden-menu') {
                this.contacts[this.active].messages[index].hiddenChatMenu = 'show-menu';
            }else {
                this.contacts[this.active].messages[index].hiddenChatMenu = 'hidden-menu';
            }
        },

        funzione(index){
            this.attualIndex = index;
            console.log(this.contacts[this.active].messages[index]);
            if (this.contacts[this.active].messages[index].hiddenChatMenu == 'hidden-menu') {
                this.contacts[this.active].messages[index].hiddenChatMenu = 'show-menu'
            } else {
                this.contacts[this.active].messages[index].hiddenChatMenu = 'hidden-menu'
            }

        },



// --------------------DUE FUNZIONI PER CANCELLARE UN MESSAGGIO------
// metodo 1
      //   removeElement(index) {
      //     this.contacts[this.active].messages.splice(index, 1);
      // },

 // metodo 2

        removeElement(index) {
          this.$delete(this.contacts[this.active].messages, index);
      },

      addKey() {

          for (var i = 0; i < this.contacts.length; i++) {
              let elementoCorrente = this.contacts[i];


              for (var j = 0; j < elementoCorrente.messages.length; j++) {
                  this.$set(elementoCorrente.messages[j], 'hiddenChatMenu', 'hidden-menu')
              }
          }


      },
// --------------------FINE FUNZIONI PER CANCELLARE UN MESSAGGIO------

    //EMOJI
        emojiVisible() {

            this.emojiCondition = !this.emojiCondition;
        },

        emojiPush(item) {
            // this.contacts[this.active].messages.push({})
            this.userWriting += item;
            // console.log(this.userWriting);
        },
    },

    mounted: function(){
        this.addKey();

    //PROVA PER METTERE ORA NEI BOX MESSAGGI
        this.$nextTick(function(){
            // dayjs.extend(customParseFormat);
            for (var i = 0; i < this.contacts.length; i++) {
                let elementoCorrente = this.contacts[i];
                for (var j = 0; j < elementoCorrente.messages.length; j++) {
                    let oggettoCorrente = elementoCorrente.messages[j];
                    oggettoCorrente.date = dayjs(oggettoCorrente.date, 'DD MM YYYY HH mm ss').format('HH:mm');
                    console.log(oggettoCorrente.date);
                }

            }
        });


        // MESSO PER SCROLL GIA FATTO QUANDO APRO LA PAGINA
        this.$nextTick(function(){
            document.getElementById("box-messages").scrollTop = document.getElementById("box-messages").scrollHeight;
        });
    },

});
