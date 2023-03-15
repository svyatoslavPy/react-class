import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.css'
import './styles/index.css'
import App from './app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
    <App></App>
	</React.StrictMode>
)


// * Добавте классовый компонент, принемающий пропсы. В пропсу поместите путь к картинке и ее название. Сам копонент (классовый) отображает картинку (второй раз) и текущую дату и время, время обновляется каждую секунду, грубо говоря как часы. Помните о жизненных циклах классовго компонента при создании часов. передавайте время в дочерний компонент как пропсы, компонент тоже классовый. Но он должен обновялятся только когда секунды четные. (При помощи жижненных циклов shouldComponentUpdate()). А в консоль он будет выводить время каждую секунду.
