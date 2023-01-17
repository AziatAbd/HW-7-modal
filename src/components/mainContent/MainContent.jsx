import MovieList from "../movieList/MovieList";

const MainContent = ({ movies, setMovies }) => {
  return (
    <div>
      {movies.map((item) => (
        <MovieList
          key={item.id}
          id={item.id}
          title={item.title}
          item={movies}
          img={item.img}
          rating={item.rating}
          setMovies={setMovies}
        />
      ))}
    </div>
  );
};

export default MainContent;
