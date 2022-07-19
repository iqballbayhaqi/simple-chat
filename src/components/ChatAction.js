import React from "react";
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

const ChatAction = () => {
  return (
    <Container>
      <ChatTyperWrapper>
        <ChatInput type="text" placeholder="Start Typing..." />
      </ChatTyperWrapper>
      <ButtonSend>Send</ButtonSend>
    </Container>
  );
};

export default ChatAction;
