import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';




	

class App extends Component {
	

	
  constructor(){
    super();
    
    this.state= {
      pokemonBalls:[],//array to hold the pokemon,
      pokedexEntry: ''//holds a text entry from the user
      
    };

  }
  componentDidMount(){
				
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')//gets the first 500 pokemon although there are many more
    .then(response=>response.json()) 
    .then(name => this.setState({pokemonBalls:name.results}))
  
   }//end componentDidMount
  
      
  render(){
    const { pokemonBalls, pokedexEntry} = this.state;
    const filteredPokemons  = pokemonBalls.filter(pokemon  => pokemon.name.toLowerCase().includes(pokedexEntry.toLowerCase()));
    return(
      <div className="App">
        <SearchBox
            placeholder='Enter a pokemon name' 
            handleChange={e => this.setState({ pokedexEntry: e.target.value })}
            />
        <CardList pokemonBalls={filteredPokemons}/>
    </div>
  
    );//end return
  }//end render
  
}

export default App;

