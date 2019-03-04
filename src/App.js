import React, { Component } from 'react';

// jsx : js + xhl
class App extends Component {
  render() {
    // const greeting = "Hi, Tom!";
    // const dom = <h1 className="foo">{greeting}</h1>;
    // return dom;
    // return <input type="text" onChange={ () => {console.log("I am clicked.");
    // } }  />;
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={ () => { console.log("I am clicked."); } } />
      </React.Fragment>
    )
  }
}

export default App;

// js : Javascript
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world!!"
//     );
//   }
// }