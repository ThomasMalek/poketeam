import React, { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './Pokemon.js';
import './PokemonSolid.ttf';

function App() {
  
  const [data, setData] = useState({});
  const [pokemon, setPoke] = useState('ditto');
  const [link, setLink] = useState(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false);
  const [overlay, setOverlay] = useState(true);



  useEffect(() => {
    const getStats = async () =>{
      setLoading(true);
      setIsError(false);
      try{
        const result = await fetch(link);
        const pokedata = await result.json();
        setData(pokedata)
      }
      catch (err){
        console.error(err);
        setIsError(true);
      }
      setLoading(false);
    }
    getStats();
  }, [link]);

  const display = {
    "true-true" : <p>How did you make this happen?</p>,
    "true-false" : <div>
                    <img className='pokeball' src={require('./poke.png')} alt='Wheres My PokeBall'></img>
                   </div>,
    "false-true" : <div>
                    <p className='errorpic'><img src='https://vignette.wikia.nocookie.net/mcleodgaming/images/d/d8/MissingNo..png/revision/latest/scale-to-width-down/340?cb=20131108185400' alt='MISSINGO HAS APPEARED'></img></p>
                    <h1 className='error'>You Have Encountered MissingNo!</h1>
                   </div>
    ,
    "false-false" : <Pokemon data={data}/>
  }


  return (
    <div>
      <div className={"overlaytop"  + (overlay ? 'on':'off')}></div>
      <div className={"overlaybottom"  + (overlay ? 'on':'off')}></div>
      <div className={"overlaymiddle"  + (overlay ? 'on':'off')}>
      <div className={"pokeopen"  + (overlay ? 'on':'off')}>
            <button className={'activater' + (overlay ? 'on':'off')} onClick={() => setOverlay(false)}>Click here to open Pokedex</button>
      </div>
      </div>
      <div className={"App" + (overlay ? 'off':'on')}>
        <h1 className='pokedex'>Pokedex</h1>
        <h3 className='pokesubhead'>Search for any pokemon below!</h3>
        <div className='searchfieldholder'>
          <input placeholder='Pokemon' onChange={e=>setPoke(e.target.value)} className='searchfield'></input>
          <button className='search' onClick={e=>setLink(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)}>Research</button>
        </div>
        {display[`${loading}-${isError}`]}
      </div>
    </div>
  );
}

export default App;
