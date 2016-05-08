import React, { Component } from 'react';
import { render } from 'react-dom';
import Article from './Article'

export class App extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			article: {title: "", paragraphs: []}
		}
	}

	componentDidMount() {
		setTimeout(function() {
			fetch('article.json')
			.then((response) => response.json())
			.then((data) => {
				this.setState({article: data});
			});
		}.bind(this), 1000);
	}

	render() {
		return (
			<Article articleData={this.state.article} />
		);
	}
}

render(<App />, document.getElementById('root'));