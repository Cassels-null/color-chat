import React from 'react';

import Message from './message.jsx';
import Submit from './submit.jsx';

//default react setup
class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(<div id="chat">
        {/* render a message component for each element in the messages prop*/}
            {this.props.messages.map((message)=>{return(
                <Message message={message}/>
            )})}
            <div id="mark"/>{/* target for automatic scrolling. used in onComponentDidMount in messages.jsx */}
            <Submit/>
        </div>)
    }
};

export default Chat;