// console.log('hello world');

var app = new Vue ({
    el: '#root',
    data: {
        user: {
            name: 'User',
            photo: 'img/profile.jpg',
            thoughts: 'Sono un pug',
        },
        contacts: [
            {
                name: 'Cat cont1',
                photo: 'img/c_1.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ue come va?',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Tutto bene',
                        status: 'recived-messages'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tu?',
                        status: 'recived-messages'
                    },
                    {
                        date: '10/01/2020 16:20:22',
                        message: 'Tutto bene anche io',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 16:25:22',
                        message: 'Hai bisogno?',
                        status: 'recived-messages'
                    },
                    {
                        date: '10/01/2020 16:27:22',
                        message: 'no tu?',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 16:29:22',
                        message: 'Nemmeno io',
                        status: 'recived-messages'
                    },
                    {
                        date: '10/01/2020 16:30:22',
                        message: 'A posto allora',
                        status: 'sent-messages'
                    },
                ]
            },
            {
                name: 'Dog cont1',
                photo: 'img/c_2.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent-messages'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'recived-messages'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent-messages'
                    },
                    {
                        date: '20/03/2020 16:38:00',
                        message: 'Ho finito le ossa.',
                        status: 'sent-messages'
                    },
                    {
                        date: '20/03/2020 16:45:00',
                        message: 'Ah mi spiace.',
                        status: 'recived-messages'
                    },
                ]
            },
            {
                name: 'Dog cont2',
                photo: 'img/c_3.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'Ciao come stai?',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Bene grazie?',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Son contento',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:20:22',
                        message: 'Anche io grazie',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: 'E\' sempre un piacere parlare con te',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:35:22',
                        message: 'Grazie',
                        status: 'sent-messages'
                    },
                ]
            },
            {
                name: 'Cat cont2',
                photo: 'img/c_4.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Tranquillo!',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: 'Il cane è scappato!',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:27:22',
                        message: 'Rincorrilo!',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:28:22',
                        message: 'Sai che non posso',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:30:22',
                        message: 'Tornerà',
                        status: 'recived-messages'
                    },
                ]
            },
            {
                name: 'Cat cont3',
                photo: 'img/c_5.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hey ciao',
                        status: 'recived-messages'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Quanto tempo!',
                        status: 'recived-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'ci sarà un motivo',
                        status: 'sent-messages'
                    },

                ]
            },
            {
                name: 'Dog cont3',
                photo: 'img/c_6.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Sai che sono intollerante?',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah non lo sapevo!',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: 'Ma l\'altro giorno hai mangiato la pizza',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:35:22',
                        message: 'Ma in fatti non sono itollerante alla pizza....',
                        status: 'recived-messages'
                    },

                ]
            },
            {
                name: 'Rino cont',
                photo: 'img/c_7.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao!',
                        status: 'recived-messages'
                    },
                    {
                        date: '20/01/2020 16:30:55',
                        message: 'Ciao!',
                        status: 'recived-messages'
                    },
                    {
                        date: '22/01/2020 17:30:55',
                        message: 'Ciao!',
                        status: 'recived-messages'
                    },
                    {
                        date: '29/01/2020 18:30:55',
                        message: 'Ciao!',
                        status: 'recived-messages'
                    },

                ]
            },
            {
                name: 'Bear cont',
                photo: 'img/c_8.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai sentito?',
                        status: 'recived-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Tranquillo',
                        status: 'sent-messages'
                    },
                ]
            },
            {
                name: 'Cama cont',
                photo: 'img/c_9.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao!',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Eri alla festa?',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si ero li',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Non ti ho visto!',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: '-.-',
                        status: 'recived-messages'
                    },
                ]
            },
            {
                name: 'Ping cont',
                photo: 'img/c_10.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ciao',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ciao',
                        status: 'sent-messages'
                    }
                ]
            },
            {
                name: 'Tarta cont',
                photo: 'img/c_11.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Stasera esci?',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si',
                        status: 'recived-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'dove ci vediamo?',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Solito posto',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:25:22',
                        message: 'Quale solito?',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:35:22',
                        message: 'Solito 1 o solito 2?',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:45:22',
                        message: 'Solito 2',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:47:22',
                        message: 'Manda indirizzo',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:55:22',
                        message: 'Via Solito 2',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Meglio che parto ora',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ok a dopo',
                        status: 'sent-messages'
                    },
                ]
            },
        ],
        active: 0,
        userWriting: '',
    },
    methods:{
        // funzione che al click deve far cambiare lo stato di active e prendere il valore dell'index dell'elemento cliccato
        changeChat(index){
            this.active = index;
            // console.log(index);
        },
        sendMessages(){
            this.contacts[this.active].messages.push({
                message: this.userWriting,
                status: 'sent-messages'
            });
            this.userWriting = '';
            // console.log(this.active);
        },
        // funzione che aggiunge la risposta
        autoReply(){
            // console.log('ciao');
            this.contacts[this.active].messages.push({
                message: 'ok',
                status: 'recived-messages'
            });
        },
        // funzione che fa scattare il timer per poi richiamare autoReply
        startReply(){
            setTimeout(this.autoReply, 1000);

        },
    },
});
