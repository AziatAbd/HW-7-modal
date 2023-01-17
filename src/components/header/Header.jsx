import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";
import Modal from "../UI/modal/Modal";

const Header = ({ onAddMovie }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const modal = () => {
    setModalVisible((prevState) => !prevState);
  };

  const closeHandler = () => {
    setModalVisible(null);
  };

  return (
    <>
      {isModalVisible && (
        <Modal onAddMovie={onAddMovie} onConfirm={closeHandler} />
      )}
      <HeaderCont>
        <HeaderTitle className="title">Favorite movies</HeaderTitle>
        <Button onClick={modal} bgcolor={"orange"} color={"#fff"}>
          ADD MOVIE
        </Button>
      </HeaderCont>
    </>
  );
};

export default Header;

const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: blue;
`;

const HeaderTitle = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;
