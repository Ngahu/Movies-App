import React, { Component } from 'react';
import logo from './image/green_app_icon.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)

    const movies =[
      {id:0,title:'Avengers:infinity war',overview:'very amazing'},
      {id:1,title:'Avengersfkfkfk:ffffinfinity war',overview:'very amazing'},
      {id:2,title:'Avengersqqwww:dskkskdinfinity war',overview:'very amazing'},
      {id:3,title:'Avengersgggg:ggggggggggginfinity war',overview:'very amazing'}
    ] 
    
    this.state = {rows: [
      <p key="0">this is  my row0</p>,
      <p key="1">this is  my row1</p>,
      <p key="2">this is  my row2</p>
    ]}

    let movieRows =[]
    movies.forEach((movie)  =>{
      console.log(movie.id)
      movieRows.push(<p key={movie.id}><strong>movie title</strong>:{movie.title}</p>)
    })

    // change the state from old to a new state
    this.state = {rows:movieRows}
  }
  render() {
    return (
      <div className="App">
        
        <table className="titleBar">
          <tbody>
            <tr>

              <td>
                <img width="50" src={logo} alt="logo" />
              </td>
              <td width="8"/>
              <td>
                <h3>MovieDB Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input placeholder="Search for a movie,tv show ,person..." className="myInput"/>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
