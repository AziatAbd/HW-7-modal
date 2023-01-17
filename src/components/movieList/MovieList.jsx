import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";
import DeleteModal from "../UI/modal/DeleteModal";

const MovieList = ({ title, item, img, rating, setMovies, id }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const modal = () => {
    setDeleteModal((prevState) => !prevState);
  };

  const closeHandler = () => {
    setDeleteModal(null);
  };

  const deleteHadnler = () => {
    const remove = item.filter((item) => id !== item.id);
    setMovies(remove);
  };

  return (
    <MainContainer>
      {deleteModal && (
        <DeleteModal onDelete={deleteHadnler} onConfirm={closeHandler} />
      )}
      <Container>
        <Img src={img} alt={title} />
        <div>
          <div>
            <p>{title}</p>
          </div>
          <Data>
            <Rating>{rating}/5 stars</Rating>
            <Button onClick={modal} bgcolor={"red"} color={"#fff"}>
              DELETE
            </Button>
            <Button bgcolor={"blue"} color={"#fff"}>
              EDIT
            </Button>
          </Data>
        </div>
      </Container>
    </MainContainer>
  );
};

export default MovieList;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 0 50px 0 0;
  box-shadow: 0px 0px 34px -1px rgb(34 60 80 / 31%);
  margin: 20px;
`;

const Img = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px 0 0 10px;
  margin-right: 15px;
`;

const Data = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

const Rating = styled.span`
  text-align: center;
  background-color: orange;
  border-radius: 15px;
  color: #fff;
  font-weight: 600;
`;
