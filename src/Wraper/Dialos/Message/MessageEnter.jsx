import React from 'react';









const MessageEnter = (props) => {



    let messageValue = props.messageValue;
    let newPostElement = React.createRef();

    let onChange = () => {
        
        let value = newPostElement.current.value;

        props.OnChange(value)


    };

    let renderDialog = () => {



        let res = props.newMessage[0].message.map((item) => {
            return (<div id={item.id}>{item.message}</div>)
        });
        return res
    };

    return (
        <div>
            <div>{renderDialog()}</div>
            
                <input type="text" ref={newPostElement} onChange={onChange} value={messageValue} />
                <button onClick={() => { }}>Отправить</button>
            
        </div>
    )
};
export default MessageEnter;