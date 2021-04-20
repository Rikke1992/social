import React from "react";
import DialogReducerRender from "./DialogReducerRender";
import PostsReducer from './PostsReducer';



const store = {
    _state: {
        rerenderingDomTree() {

        },


        Messages: {
            messageValue: '',
            newMessage: [{
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
        },
        Post: {
            postValue: '',
            postItem: [{
                id: 1,
                name: 'Jone',
                text: 'Hi man'
            },
            {
                id: 2,
                name: 'Dan',
                text: 'Hi. How are you?'
            }]
        }
    },
    getState() {
        return this._state
    },
    subcribe(observer) {

        this._state.rerenderingDomTree = observer
        return this._state.rerenderingDomTree()
    },

    dispatch(action) {
       this.getState.Post =  PostsReducer(this.getState().Post, action)
        // DialogReducerRender(this.getState(), action)

        return this.getState().rerenderingDomTree()
    }
};








export default store;
window.store = store;


