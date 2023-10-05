import React from 'react';
import styled from "styled-components";
import ContactListComponents from './components/ContactListComponents';
import ConversationComponents from './components/ConversationComponents';
import "../src/App.css"
const Container=styled.div`
display : flex;
flex-direction: row;
height: 100vh;
width: 100%;
background: #f8f9fb;
`
function App(){
  return (
    <Container>
      <ContactListComponents className="contact-list"/>
      <ConversationComponents className="conversation"/>
    </Container>
  )
}

export default App;