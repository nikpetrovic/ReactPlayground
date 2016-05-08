import React from 'react';

export default class ParagraphComponent extends React.Component {
	render() {
		return (
		  	<div>
		  		<p>{this.props.content}</p>
		  	</div>
		);
	}
}
