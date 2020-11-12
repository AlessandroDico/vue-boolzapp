// console.log('hello world');

var app = new Vue ({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Contatto1',
                photo: 'img/second.jpg',
                visible: true,
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
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'recived-messages'
                    }
                ]
            },
            {
                name: 'Contatto2',
                photo: 'img/third.jpg',
                visible: false,
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
                    }
                ]
            },
            {
                name: 'Contatto3',
                photo: 'img/fourth.jpg',
                visible: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'recived-messages'
                    }
                ]
            },
            {
                name: 'Contatto4',
                photo: 'img/fifth.jpg',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent-messages'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'recived-messages'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'sent-messages'
                    }
                ]
            },
        ],
        active: 0,
    },
    methods:{
        // funzione che al click deve far cambiare lo stato di active e prendere il valore dell'index dell'elemento cliccato
        changeChat(index){
            this.active = index;
            // console.log(index);
        }
    },
});
