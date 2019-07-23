import React, { Component } from 'react';
import {sendMessageToDb} from '../config/firebase';
import monent from 'moment'
import * as firebase from 'firebase';
import 'firebase/firestore'

var db = firebase.firestore();



class Chat extends Component {
constructor(props) {
    super(props);
    this.state  ={
        text : '',
        messages : [],
    }
}


componentWillMount(){
this.getAllMessages()
}

async getAllMessages(){
    const roomId = this.props.match.params.id;
    
    //this work in action

    db.collection('chatrooms').doc(roomId).collection('messages')
    .orderBy('timeStamp').onSnapshot(snapshot =>{
        const messages = [];
        snapshot.forEach(element => {
            messages.push({data: element.data(),id : element.id})
        });

        this.setState({messages},()=>{
            const scrollHeight = this.messageList.scrollHeight;
            const height = this.messageList.clientHeight;
            const maxScrollTop = scrollHeight - height
            this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        })
    })
}

sendMessage(){
    const roomId = this.props.match.params.id;

    sendMessageToDb(roomId,this.state.text)
    this.setState({text: ""})
}


    render() {
        const {text,messages} = this.state;
        return (
            <div style={{width:'100vw',height:'100'}}>
            
            <div
            ref={(el)=>{this.messageList = el;}}
            style={{paddingBottom:'10px', height:'100vh' , overflow:'scroll'}}
            >
            {messages.map((items)=>{
                const messagesStyle = items.data.userId === firebase.auth().currentUser.uid ?
                {background : 'blue' , color:'white', marginBottom : 40 , marginLeft : '50vw', padding : 5 }
                :
                {background : 'green' , color:'white', marginBottom : 40 , marginRight: '50vw' ,  padding : 5}

                return <div style={messagesStyle}>
                            <p>{items.data.message}<br/>
                            {monent(items.data.timeStamp).fromNow() }
                            </p>   
                       </div>
            })}
            </div>

            <div style={{position:'fixed', bottom:0, width:'10vw',left:0}}>
                <button
                onClick={this.sendMessage.bind(this)}
                style={{position:'fixed',bottom:20,right:10,fontSize:'18px'}}>Send</button>
                <input
                onChange={e =>{this.setState({text:e.target.value})}}
                value={text}
                placeholder="Type Messages here"  style={{width:'100vw',fontSize:'18px',height:'50px'}}  type='text' />
            </div>

            </div>
        );
    }
}

export default Chat;