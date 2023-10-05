import styled from "styled-components";
import { messagesList } from "../Data";
import { SearchContainer, SearchInput } from "./ContactListComponents";

const Container = styled.div`
display: flex ;
flex-direction: column;
height: 100%;
flex: 2;
background: #f6f7f8;
`;
const ProfileHeader=styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 15px;
    align-items: center;
    gap : 10px;
`;

const ProfileImage =styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`;

const ChatBox =styled.div`
display: flex;
background: #f0f0f0;
padding: 10px;
align-items: center;
bottom : 0;
`;

const EmojiImage =styled.img`
width:30px;
height: 28px;
opacity: 0.4;
cursor: pointer;
padding-left:10px;
`;


const MessageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background:transparent;
`;

const MessageDiv = styled.div`
justify-content: ${(props) => (props.isYours ?'flex-end':'flex-start') };
display:flex;
margin: 5px 16px;
`;

const Message = styled.div`
background: ${(props) => (props.isYours ?"lightgrey":"white" )};
max-width:50%;
color: #303030;
border-radius:50px;
padding: 8px 10px;
font-size: 15px;
`;

const ConversationComponent = () => {
    return (
    <Container>
        <ProfileHeader>
        <ProfileImage src="/ProfileImage.jpg" />
        Sharmila
        </ProfileHeader>
        <MessageContainer>
            {messagesList.map((messageData) => (
                <MessageDiv isYours={messageData.senderID === 0}>
                  <Message isYours={messageData.senderID === 0}>{[messageData.text]} </Message>
                </MessageDiv>
            ))}

        </MessageContainer>
        <ChatBox>
            <EmojiImage src={"/data.svg"}/>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" color="#696969" cursor="pointer" xmlns="http://www.w3.org/2000/svg"><path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"></path></svg>
            <SearchContainer>
                <SearchInput placeholder="Type a message"/>
            </SearchContainer>
        </ChatBox>
        </Container>
    );
};
export default ConversationComponent;
