import React, { useState } from 'react';
import {Route} from "react-router-dom";
import Movielist from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
        <Route exact path="/">
          <Movielist></Movielist>
        </Route>
        <Route exact path="/:id">
          <Movie></Movie>
        </Route>
    </div>
  );
};

export default App;
