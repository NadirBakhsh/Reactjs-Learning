import React, { Component } from 'react';
import { getAllUser , createRoom } from '../config/firebase'
class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }


    }

    componentDidMount() {
        this.getUserfun()
    }


    async getUserfun() {
        try {
            const getingUser = await getAllUser();
            this.setState({ users: getingUser })
        } catch{
        }
    }


    async creatChatRoom(friendId){
      const chatRoomRes =  await createRoom(friendId)
      if(chatRoomRes){
        this.props.history.push(`/Chat${chatRoomRes.id}`)
      }
    }

    render() {

        const { users } = this.state;

        console.log(users)
        return (<div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                {users.map((items) => {
                    return <div key={items.email}>{items.email + ' '}
                        <button onClick={this.creatChatRoom.bind(this, items.id)}>chat</button>
                    </div>
                })}
            </div>

        </div>);
    }
}

export default Home;