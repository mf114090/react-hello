//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendario">
				<i className="far fa-clock"></i>
			</div>
			<div className="cuatro">{props.digiCuatro}</div>
			<div className="tres">{props.digiTres}</div>
			<div className="dos">{props.digiDos}</div>
			<div className="uno">{props.digiUno}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digiCuatro: PropTypes.number,
	digiTres: PropTypes.number,
	digiDos: PropTypes.number,
	digiUno: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	console.log(cuatro, tres, dos, uno);

	//render your react application
	counter++;

	ReactDOM.render(
		<SimpleCounter
			digiUno={uno}
			digiDos={dos}
			digiTres={tres}
			digiCuatro={cuatro}
		/>,
		document.querySelector("#app")
	);
}, 1000);
