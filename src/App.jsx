
import React, {useState} from 'react';
import Search from './components/Search.jsx';
import axios from 'axios';

import Results from './components/Results.jsx';
import Popup from './components/Popup.jsx';
// import Result from './components/Result.jsx';


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "https://www.omdbapi.com/?apikey=423a0dfb";

  const search = (e) => {
    if (e.key === "Enter"){
      axios(apiurl + "&s=" + state.s).then(({data}) =>{
        // let result = data.Search;
        let result = data.Search || [];

        setState(prevState =>{
          return{...prevState, results: result}
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {
        ...prevState,
        s: s,
      }
    });

  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({data}) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return {...prevState, selected: result}
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>

        <Results results={state.results} openPopup={openPopup}/>

        {(typeof state.selected.Title != "undefined") ? (
          <Popup selected={state.selected} closePopup={closePopup}/>
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;