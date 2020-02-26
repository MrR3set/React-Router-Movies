import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';



const SavedList = props => {
  
  const {path, url} = useRouteMatch();
  console.log(path)
  return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <NavLink className="saved-movie" to={`${movie.id}`}>{movie.title}</NavLink>
        ))}
        <NavLink to="/"><div className="home-button" >Home</div></NavLink>
    </div>
    )
}

export default SavedList;
