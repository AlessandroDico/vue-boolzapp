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
                name: 'Contatto1',
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
                name: 'Contatto2',
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
                    }
                ]
            },
            {
                name: 'Contatto3',
                photo: 'img/c_3.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
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
                        message: 'Tutto fatto!',
                        status: 'recived-messages'
                    }
                ]
            },
            {
                name: 'Contatto5',
                photo: 'img/c_5.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
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
            {
                name: 'Contatto6',
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
            {
                name: 'Contatto7',
                photo: 'img/c_7.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
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
            {
                name: 'Contatto8',
                photo: 'img/c_8.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
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
            {
                name: 'Contatto9',
                photo: 'img/c_9.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
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
            {
                name: 'Contatto10',
                photo: 'img/c_10.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
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
            {
                name: 'Contatto11',
                photo: 'img/c_11.jpg',
                thoughts: 'Lorem ipsum dolor sit.',
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
