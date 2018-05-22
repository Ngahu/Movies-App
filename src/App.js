import React, { Component } from 'react';
import logo from './image/green_app_icon.svg';
import './App.css';


class App extends Component {
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
      </div>
    );
  }
}

export default App;
