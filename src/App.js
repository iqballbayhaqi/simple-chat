import { useEffect } from "react";
import "./App.css";
import ChatAction from "./components/ChatAction";
import styled from "styled-components";
import Message from "./components/Message";
import { connect } from "react-redux";
import { appendData } from "./redux/action";
import swal from "sweetalert";

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
  const dataChat = [
    {
      id: 1,
      name: "iqbal",
      text: "Hai Semuanya !",
      createdAt: new Date(),
      photo: "https://xsgames.co/randomusers/assets/avatars/male/0.jpg"
    },
    {
      id: 2,
      name: "elsa",
      text: "Hai juga Semuanya !",
      createdAt: new Date(),
      photo: "https://xsgames.co/randomusers/assets/avatars/female/0.jpg"
    },
  ];

  useEffect(() => {
    swal({
      text: "Input your name!",
      content: "input",
      button: {
        text: "Start Chat",
        closeModal: true,
      },
    }).then((data) =>
      props.appendData({
        name: data,
      })
    );
  }, []);

  return (
    <Container>
      <ChatWrapper>
        {dataChat.map((res) => (
          <Message key={res.id} variant={res.name === props.name ? "right" : "left"} data={res} />
        ))}
      </ChatWrapper>
      <ChatAction />
    </Container>
  );
};

const mapDispatchToProps = {
  appendData,
};

const mapStateToProps = (state) => ({
  name: state.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
