import React from 'react'

class Clock extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			time: new Date().toLocaleTimeString(),
			date: new Date().toLocaleDateString(),
		}
	}

	componentDidMount() {
		this.intervalTime = setInterval(() => this.updateTime(), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.intervalTime)
	}

	componentDidUpdate() {
		console.log(this.state.time)
	}

	updateTime() {
		this.setState({
			time: new Date().toLocaleTimeString(),
		})
	}

	shouldComponentUpdate() {
		return this.props.children % 2 === 0 ? true : false
	}

	render() {
		return (
			<div className='clock'>
				<p className='clock__title'>Welcome to React everybody</p>
				<img src={this.props.icon} alt='img' />
				<p className='clock__item'>{this.state.time}</p>
				<p className='clock__item--special'>{this.state.date}</p>
			</div>
		)
	}
}

export default Clock

//  Добавте классовый компонент, принемающий пропсы. В пропсу поместите путь к картинке и ее название. Сам копонент (классовый) отображает картинку (второй раз) и текущую дату и время, время обновляется каждую секунду, грубо говоря как часы. Помните о жизненных циклах классовго компонента при создании часов.
// передавайте время в дочерний компонент как пропсы, компонент тоже классовый. Но он должен обновялятся только когда секунды четные. (При помощи жижненных циклов shouldComponentUpdate()). А в консоль он будет выводить время каждую секунду.
