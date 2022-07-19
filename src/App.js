import "./App.css";
import ChatAction from "./components/ChatAction";
import styled from "styled-components";
import Message from "./components/Message";

const Container = styled.div`
  width: 420px;
  margin: auto;
  background: #ffffff;
  height: 100%;
`;

const ChatWrapper = styled.div`
  padding: 10px 10px;
`;

const App = (props) => {
  return (
    <Container>
      <ChatWrapper>
        <Message variant="left"/>
        <Message variant="right" />
      </ChatWrapper>
      <ChatAction />
    </Container>
  );
};

export default App;
