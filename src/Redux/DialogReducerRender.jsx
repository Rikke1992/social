let initialState = {



    messageValue: '',
    newMessage: [
        {
        id: 1,
        img: 'https://www.kino-teatr.ru/acter/photo/7/5/58857/962994.jpg',
        message: [{
            id: 1,
            message: 'I`am Muccaley Calcine!'
        }],
        likes: 100
    },
    {
        id: 2,
        img: 'https://i.work.ua/sent_photo/3/f/b/3fbd713111982c5e75525843a3990ea2.jpg',
        message: 'I`am Vladimir!',
        likes: '+10050'
    },
    {
        id: 3,
        img: 'https://media.licdn.com/dms/image/C560BAQFVPgY4cV4Knw/company-logo_200_200/0?e=2159024400&v=beta&t=CLgJ7rnh_gY-gG1akmPOVPN7wGtqe970Gcr2RoxOyIo',
        message: 'I`am Olha!',
        likes: '+100'
    }],
    peopls: [
        {
            id: 1,
            name: 'Muccaley'
        },
        {
            id: 2,
            name: 'Vladimir'
        },
        {
            id: 3,
            name: 'Olga'
        }],
    idDialog: ''


};

const DialogReducerRender = (state = initialState, action) => {

    switch (action.type) {
        // case 'newMessage': {
        //     let newMessage = {
        //         id: 'Iam',
        //         message: state.Messages.messageValue,
        //         likes: '+10050'
        //     };
        //     state.Messages.newMessage.forEach((item) => {

        //         //  item.id == action.id ? item.message.push(newMessage) : item;
        //     })
        //     // в общем нужно будет реализоватьвозможность добалвения сообщения в определенный массив  у кого был вызов
        //     return state
        // }
        //     break;

        case "OnChange": {
            let newState = {...state};
            // newState.newMessage = [...newMessage];
            // newState.peopls = [...peopls]
            state.Messages.messageValue = action.Value
            return state

        }
            break;
            
        default: {
            return state
        }


    };
};

export default DialogReducerRender;