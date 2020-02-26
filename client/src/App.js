import React, { useState } from 'react';
import {Route} from "react-router-dom";
import Movielist from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    //Should check if movie is already in the list........ but whatever
    if(!savedList.includes(movie)){
      setSavedList( [...savedList, movie] );
    }else{console.log("movie already in list")};
  };

  return (
    <div>
      <SavedList list={savedList} />
        <Route exact path="/">
          <Movielist></Movielist>
        </Route>
        <Route exact path="/:id">
          <Movie addToSavedList={addToSavedList}></Movie>
        </Route>
    </div>
  );
};

export default App;
