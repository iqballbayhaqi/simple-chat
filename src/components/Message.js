import React from "react";
import styled from "styled-components";

const Photo = styled.img`
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 15px;
  justify-content: ${({ variant }) =>
    variant === "left" ? "flex-start" : "flex-end"};
  background-color: #fff
`;

const BodyChat = styled.div`
  background-color: ${({ variant }) =>
    variant === "left" ? "purple" : "#e9e9e9e9"};
  color: ${({ variant }) => (variant === "left" ? "white" : "black")};
  ${({ variant }) =>
    variant === "left" ? "margin-left: 10px" : "margin-right: 10px"};
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
`;

const ChatText = styled.p`
  margin: 0px;
`;

const Name = styled.p`
  margin: 0px 0px 5px 15px;
  font-size: 12px;
  color: #8c8c8c;
`;

const Message = ({ variant = "left", data }) => {
  return (
    <Container variant={variant}>
      {variant === "left" && (
        <Photo
          src={data.photo}
          height={80}
          alt="photo profile"
        />
      )}
      <div>
        <Name>{data.name}</Name>
        <BodyChat variant={variant}>
          <ChatText>{data.text}</ChatText>
        </BodyChat>
      </div>
      {variant === "right" && (
        <Photo
          src={data.photo}
          height={80}
          alt="photo profile"
        />
      )}
    </Container>
  );
};

export default Message;
