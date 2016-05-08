import React from 'react';
import ParagraphComponent from './ParagraphComponent';

export default class Article extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			selected: false,
			mouseDownX: 0,
			mouseDownY: 0,
			top: 0,
			left: 0
		}
	}

	handleMouseDown(e) {
		this.setState({mouseDownX: e.clientX, mouseDownY: e.clientY});
	}

	handleMouseUp(e) {
		if (getSelection().extentOffset - getSelection().anchorOffset === 0) {
			this.setState({selected: false});
			return;
		}
		let xCoord = (Math.max(e.clientX, this.state.mouseDownX) + Math.min(e.clientX, this.state.mouseDownX))/2;
		let yCoord = Math.min(e.clientY, this.state.mouseDownY);

		this.setState({selected: true, left: xCoord, top: yCoord-42});
		let selectedText = getSelection().anchorNode.textContent.substring(getSelection().extentOffset, getSelection().anchorOffset);
		console.log(selectedText);
	}

	render() {
		var paragraphs = this.props.articleData.paragraphs.map((p, i) => {
			return <ParagraphComponent key={i} content={p}/>
		});

		let popover;
		if (this.state.selected) {
			popover = 
				<div className="popover" style={{top: this.state.top, left: this.state.left, position: 'absolute'}}>
					<button>1</button>
					<button>2</button>
					<button>3</button>
				</div>
		} 

		return (
			<div>
				<h2>{this.props.articleData.title}</h2>
				<div onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)}>
					{paragraphs}
				</div>
				{popover}
			</div>
		);
	}
}
