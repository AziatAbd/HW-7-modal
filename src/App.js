import { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

const DUMMY_MOVIES = [
  {
    id: 1,
    title: "Avatar 1",
    rating: 4,
    img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
  },

  {
    id: 2,
    title: "Kunfu panda",
    rating: 5,
    img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
  },

  {
    id: 3,
    title: "Naruto Shippuden",
    rating: 5,
    img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
  },

  {
    id: 4,
    title: "Hobbit",
    rating: 5,
    img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
  },
];

function App() {
  const [movies, setMovies] = useState(DUMMY_MOVIES);

  const addMovieHandler = (title, rating, url) => {
    setMovies((movies) => {
      return [...movies, { title: title, img: url, rating: rating, id: v4() }];
    });
  };

  return (
    <Container className="App">
      <Header onAddMovie={addMovieHandler} />
      <MainContent movies={movies} setMovies={setMovies} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
`;
