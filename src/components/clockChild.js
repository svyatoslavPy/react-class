/* eslint-disable no-useless-constructor */
import React from 'react'

class ClockChild extends React.Component {
	constructor(props) {
		super(props)
	}
	shouldComponentUpdate() {
		// при изменение состояние или пропсов
		return this.props.children % 2 === 0 ? false : true
	}

	render() {
		return (
			<>
				<p className='clock__title'>Welcome to React everybody</p>
				<img src={this.props.icon} alt='img' />
				<p className='clock__item'>{this.props.time}</p>
				<p className='clock__item--special'>{this.props.date}</p>
			</>
		)
	}
}

export default ClockChild;