import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Button from "../button/Button";

const DeleteModal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onConfirm}>
          <Container onClick={(e) => e.stopPropagation()}>
            <h2>Are you sure you wanna delete?</h2>
            <Button color={"#00329d"} onClick={props.onConfirm}>
              No
            </Button>
            <Button onClick={props.onDelete} bgcolor={"#00329d"} color={"#fff"}>
              Delete
            </Button>
          </Container>
        </Backdrop>,
        document.getElementById("delete-modal")
      )}
    </>
  );
};

export default DeleteModal;

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;
