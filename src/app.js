import React from "react";
import Clock from "./components/Clock";
import logo from './img/react-icon.png'

class App extends React.Component {
	render() {
		return <Clock icon={logo}>{30}</Clock> // передача время(секунды) в props children
 	}
}

export default App