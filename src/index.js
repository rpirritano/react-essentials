const { createElement } = React
const { render } = ReactDOM

render(
	<h1 id='title'
			className = 'header'
			style = {{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
			Hello World: BADDOBEE!

	</h1>,
	document.getElementById('react-container')
)
