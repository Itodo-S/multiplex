import { useEffect, useState } from "react";
import { INowPlaying } from "../interfaces/moviesInterface";

const useFetch = (apiPath: string, queryTerm="") => {
  const [data, setData] = useState<INowPlaying[]>([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
