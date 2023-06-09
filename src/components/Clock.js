import React from 'react'
import ClockChild from './clockChild'
import logo from '../img/react-icon.png'
class Clock extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			// по умолчанию state
			time: new Date().toLocaleTimeString(),
			date: new Date().toLocaleDateString(),
			seconds: new Date().getSeconds(), // seconds
		}
	}

	componentDidMount() {
		// при монтировке
		this.intervalTime = setInterval(() => this.updateTime(), 1000)
	}

	componentWillUnmount() {
		// при отмонтировке
		clearInterval(this.intervalTime)
	}

	componentDidUpdate() {
		console.log(this.state.seconds) // вывод время
	}

	updateTime() {
		// обновление время
		this.setState({
			time: new Date().toLocaleTimeString(),
			seconds: new Date().getSeconds(),
		})
	}

	render() {
		return (
			<div className='clock'>
				<ClockChild
					icon={logo}
					time={this.state.time}
					date={this.state.date}>
					{this.state.seconds}
				</ClockChild>
			</div>
		)
	}
}

export default Clock

//  Добавте классовый компонент, принемающий пропсы. В пропсу поместите путь к картинке и ее название. Сам копонент (классовый) отображает картинку (второй раз) и текущую дату и время, время обновляется каждую секунду, грубо говоря как часы. Помните о жизненных циклах классовго компонента при создании часов.
// передавайте время в дочерний компонент как пропсы, компонент тоже классовый. Но он должен обновялятся только когда секунды четные. (При помощи жижненных циклов shouldComponentUpdate()). А в консоль он будет выводить время каждую секунду.
