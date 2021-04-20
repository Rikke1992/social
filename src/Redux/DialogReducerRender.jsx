
const DialogReducerRender = (state, action) => {

    switch (action.type) {
        case 'newMessage': {
            let newMessage = {
                id: 'Iam',
                message: state.Messages.messageValue,
                likes: '+10050'
            };
            state.Messages.newMessage.forEach((item) => {
                
                //  item.id == action.id ? item.message.push(newMessage) : item;
            })
            // в общем нужно будет реализоватьвозможность добалвения сообщения в определенный массив  у кого был вызов
            return state
        }
            break;

        case "OnChange": {
            state.Messages.messageValue = action.Value
            return state

        }
            break;


    };
};

export default DialogReducerRender;