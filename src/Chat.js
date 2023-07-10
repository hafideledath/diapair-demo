import './Chat.css';

import { useState } from 'react';

import firestore from 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Chat = ({firebase}) => {
    const firestore = firebase.firestore();
    const auth = firebase.auth();

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState("");

    const sendMessage = async(e) => {
        e.preventDefault();
        const { uid } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid
        });

        setFormValue('');
    }

    function ChatMessage(props) {
        const { text, uid } = props.message;

        const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

        return (
            <div className={`message ${messageClass} text-2xl`}> 
                <p>{text}</p>
            </div>
        );
    }

    return (
        <div className="Chat">
            <div className="messages">
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </div>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value) } />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
}

export default Chat;