import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: purple;
  width: 400px;
  margin: auto;
`;

const ChatTyperWrapper = styled.div`
  width: 70%;
`;

const ChatInput = styled.input`
  width: -webkit-fill-available;
  border-radius: 10px;
  border: none;
  height: 25px;
  padding-left: 12px;
  outline: none;
`;

const ButtonSend = styled.button`
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  padding: 0px 12px;
`;

const Space = styled.div`
  height: 50px;
`;

const ChatAction = ({ sendChat }) => {
  const [text, setText] = useState("");

  const goToBottom = () => {
   
    setTimeout(() =>  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    }), 100)
  };

  return (
    <>
      <Space />
      <Container>
        <ChatTyperWrapper>
          <ChatInput
            type="text"
            placeholder="Start Typing..."
            onChange={(data) => setText(data.target.value)}
          />
        </ChatTyperWrapper>
        <ButtonSend
          onClick={() => {
            sendChat(text);
            setText("");
            goToBottom();
          }}
        >
          Send
        </ButtonSend>
      </Container>
    </>
  );
};

export default ChatAction;
