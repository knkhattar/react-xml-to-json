import React from 'react';
import ReactDOM from 'react-dom';

function Football() {
  const shoot = () => {
    const xml2js = require('xml2js');

    var parseString = require('xml2js').parseString;
    alert("test1");
    var xml = "<root>Hello xml2js!</root>"
    parseString(xml, function (err, result) {
      alert("test2");
        console.dir(result);
        alert(result);
        alert(result.root);
        alert("test3");
        
    });    
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the test!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));