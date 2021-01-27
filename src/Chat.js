import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css'

function Chat() {
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar />
                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen...</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                <p className="chat__message chat__reciver">
                    <span className='chat__name'>Pacar</span>
                    Otewe cng otw...
                    <span className='chat__timeStamp'>13:59</span>
                </p>
            </div>
            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type your message" type="text" />
                    <button type="submit">Send message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat