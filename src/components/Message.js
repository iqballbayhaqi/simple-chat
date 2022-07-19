import React from "react";
import styled from "styled-components";

const Photo = styled.img`
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 15px;
  justify-content: ${({variant}) => variant === "left" ? "flex-start" : "flex-end"};
`;

const BodyChat = styled.div`
  background-color: ${({variant}) => variant === "left" ? "purple" : "#e9e9e9e9"};
  color: ${({variant}) => variant === "left" ? "white" : "black"};
  ${({variant}) => variant === "left" ? "margin-left: 10px" : "margin-right: 10px"};
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
`;

const ChatText = styled.p`
  margin: 0px;
`;

const Message = ({ variant = "left" }) => {
  return (
    <Container variant={variant}>
      {variant === "left" && (
        <Photo
          src="https://xsgames.co/randomusers/assets/avatars/female/9.jpg"
          height={80}
          alt="photo profile"
        />
      )}

      <BodyChat variant={variant} >
        <ChatText>Ini Test Chat</ChatText>
      </BodyChat>
      {variant === "right" && (
        <Photo
          src="https://xsgames.co/randomusers/assets/avatars/female/9.jpg"
          height={80}
          alt="photo profile"
        />
      )}
    </Container>
  );
};

export default Message;
