//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "Prop-Types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
    return (<div className "bigCounter" >
        <div className "calendario"><i className="far fa-clock"></i></div >
        <div className "cuatro">{props.digitCuatro}</div>
        <div className "tres">{props.digitTres}</div>
        <div className "dos">{props.digiDos}</div>
        <div className "uno">{props.digitUno}</div>
    </div>);
}
SimpleCounter.PropTypes = {
    digitCuatro: PropTypes.number,
    digitTres: PropTypes.number,
    digitDos: PropTypes.number,
    digitUno: PropTypes.number,
};

let counter = 0;
setInterval function(){
    const cuatro = Math.floor (counter/10000); 
    const tres = Math.floor (counter/1000);
    const dos = Math.floor (counter/100); 
    const uno = Math.floor (counter/10); 
    console.log (cuatro, tres, dos,uno);

//render your react application
counter++;

ReactDOM.render(
<simplecounter digitUno={uno} digitDos={dos} digitTres={tres} digitCuatro={cuatro} />, 
document.querySelector('#app')
;} 1000);
