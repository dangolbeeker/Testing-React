import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import { getData } from "../api";
import "./star-wars-characters.css";
import { useSelector, useDispatch } from "react-redux";

export default function StarWarsCharacters() {
  //hook pointing to reducer
  const url = useSelector(state => state.url)
  const dispatch = useDispatch()

  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const getCharacters = async () => {
      const characters = await getData(url);
      console.log(characters);
      setNext(characters.next);
      setPrevious(characters.previous);
      setCharacters(characters.results);
      setIsLoading(false);
    };
    getCharacters();
  }, [url]);

  const goToNext = e => {
    e.preventDefault();
    dispatch({ type: "PAGE", payload: next })
  }

  const goToPrevious = e => {
    e.preventDefault();
    dispatch({ type: "PAGE", payload: previous })
  }

  return (
    <div>
      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="#FFC402"
          height={30}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <>
          {characters.map(character => (
            <div key={character.url}>{character.name}</div>
          ))}
        </>
      )}
      <div className="buttons">
        <button onClick={goToPrevious} disabled={!previous}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!next}>
          Next
        </button>
      </div>
    </div>
  );
}