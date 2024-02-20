import React, { useState } from 'react';
import styled from 'styled-components';
import { messagesList } from '../Data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 2;
  background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 15px;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
`;

const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
`;

const Message = styled.div`
  background: ${(props) => (props.isYours ? 'lightblue' : 'lightgrey')};
  max-width: 70%;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const FilesIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
`;

const ConversationComponents = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState(messagesList);

  const handleMessageSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        messageType: 'TEXT',
        text: inputText,
        senderID: 0,
        addedOn: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessageSend();
    }
  };

  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src="/ProfileImage.jpg" />
        Sharmila
      </ProfileHeader>
      <MessageContainer>
        {messages.map((messageData) => (
          <MessageDiv key={messageData.id} isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
          </MessageDiv>
        ))}
      </MessageContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="Type a message"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleMessageSend}>Send</Button>
      </InputContainer>
    </Container>
  );
};

export default ConversationComponents;
