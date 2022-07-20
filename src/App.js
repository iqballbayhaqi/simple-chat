import { useEffect, useState, useRef } from "react";
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
  background: #ffffff;
`;

const App = (props) => {
  const [updated, setUpdated] = useState(false);
  const [listDataChat, setListDataChat] = useState([]);

  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    setListDataChat(JSON.parse(localStorage.getItem("dataChat")));
    window.addEventListener("storage", (e) => {
      setListDataChat(JSON.parse(localStorage.getItem("dataChat")));
    });
  }, [updated]);

  const sendChat = async (text) => {
    if (text.length === 0) return;

    let currentData = JSON.parse(localStorage.getItem("dataChat"));

    if (currentData) {
      currentData.find((value, index) => {
        if (value.name === props.name) {
          localStorage.setItem(
            "dataChat",
            JSON.stringify([
              ...currentData,
              {
                id: currentData.length + 1,
                name: props.name,
                text,
                createdAt: new Date(),
                photo: value.photo,
              },
            ])
          );
          return true;
        } else if (props.name === "") {
          localStorage.setItem(
            "dataChat",
            JSON.stringify([
              ...currentData,
              {
                id: currentData.length + 1,
                name: "Anonymous",
                text,
                createdAt: new Date(),
                photo: `https://xsgames.co/randomusers/assets/avatars/${
                  Math.floor(Math.random() * 2) === 0 ? "female" : "male"
                }/${Math.floor(Math.random() * 50)}.jpg`,
              },
            ])
          );
        } else {
          localStorage.setItem(
            "dataChat",
            JSON.stringify([
              ...currentData,
              {
                id: currentData.length + 1,
                name: props.name,
                text,
                createdAt: new Date(),
                photo: `https://xsgames.co/randomusers/assets/avatars/${
                  Math.floor(Math.random() * 2) === 0 ? "female" : "male"
                }/${Math.floor(Math.random() * 50)}.jpg`,
              },
            ])
          );
        }
      });
    } else {
      localStorage.setItem(
        "dataChat",
        JSON.stringify([
          {
            id: 1,
            name: props.name,
            text,
            createdAt: new Date(),
            photo: `https://xsgames.co/randomusers/assets/avatars/${
              Math.floor(Math.random() * 2) === 0 ? "female" : "male"
            }/${Math.floor(Math.random() * 50)}.jpg`,
          },
        ])
      );
    }

    setUpdated(!updated);
  };

  return (
    <Container>
      <ChatWrapper>
        {listDataChat.map((res) => (
          <Message
            key={res.id}
            variant={res.name === props.name ? "right" : "left"}
            data={res}
          />
        ))}
      </ChatWrapper>
      <ChatAction sendChat={sendChat} />
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
