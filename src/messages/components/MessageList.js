import React from "react";
import "./MessageList.css";
import MessageItem from "./MessageItem";
import Card from "../../shared/components/UIElements/Card";

const MessageList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No se ha encontrado ninguna transferencia</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((message) => (
        <MessageItem
          key={message.id}
          id={message.id}
          TransferMessage={message.TransferMessage}
        ></MessageItem>
      ))}
    </ul>
  );
};

export default MessageList;
