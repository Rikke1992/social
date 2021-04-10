import React from "react";
import DialogsReducer from './DialogsReducer';


let rerenderingDomTree = ()=>{};
const store = {
    state: {
        postValue: '',
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
        newMessage: [{
            id: 1,
            img: 'https://www.kino-teatr.ru/acter/photo/7/5/58857/962994.jpg',
            message: 'I`am Muccaley Calcine!',
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
        post: [{
            id: 1,
            name: 'Jone',
            text: 'Hi man'
        },
        {
            id: 2,
            name: 'Dan',
            text: 'Hi. How are you?'
        }],



    },
    // rerenderingDomTree: () => {

    // },
    subcribe: (observer) => {
        rerenderingDomTree = observer
       return  rerenderingDomTree()
    },

    dispatch: (type) => {
        switch (type) {
            case 'newPostTex':
                {

                    DialogsReducer(store)
                    rerenderingDomTree(store.state);
                }
                break;

        }



    }
};

// export const subcribe = (observer) => {
//     rerenderingDomTree = observer
//     this.rerenderingDomTree()
// };



// нужно будет создать окно сообщений в диалогах
// и реализоват ькомпоненту по добавлению сообщений



export default store;
window.store = store;


