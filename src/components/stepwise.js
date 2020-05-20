import React from 'react';
import { Container, Dropdown, Grid, Segment, Menu, Card, Header,Button, Icon, Label, Select, Step } from 'semantic-ui-react';
import Billing from './billing.js';
import Confirm from './confirm.js';
import Hotellist from './hotellist.js';
import StepscaleOne from './stepscaleone.js';
import StepscaleTwo from './stepscaletwo.js';

class Stepwise extends React.Component {
constructor(props){
	super(props);
	this.state = {
		selected: 1,
		room: null,
		roomtype:null

	}
	this.renderSection = this.renderSection.bind(this);
	this.selectStep = this.selectStep.bind(this);
	console.log("constructor",this.state.selected)
	this.trial = React.createRef();
}

renderSection(event) {
	console.log("acess val : ",event.target.parentElement.parentElement.dataset.step);
	console.log("type : ",event.target);
	 this.setState({
		selected:parseInt(event.target.parentElement.parentElement.dataset.step)
	 })
}

selectStep(stepno,room,roomtype) {
	this.setState({
		selected:stepno,
		room:room,
		roomtype:roomtype

	 })
	this.props.handlestatechange1(stepno);
	console.log("room: ",room);
	console.log("roomtype: ",roomtype);
	//console.log(this.trial.current.style);
	//this.trial.current.props.disabled
}




	render() {
		console.log("stepwise",this.props.selectedChildren)
		return(

			<div>
				{this.state.selected === 1 ? <Hotellist selectedRooms={this.props.selectedRooms} selectedAdults={this.props.selectedAdults} selectedChildren={this.props.selectedChildren} selectStep={this.selectStep}/> : this.state.selected === 2 ? <Confirm selectStep={this.selectStep} room={this.state.room} roomtype={this.state.roomtype} /> : this.state.selected === 3 ? <Billing selectStep={this.selectStep} /> : "" }
				{this.state.selected === 1 ? <StepscaleOne stepnum={this.state.selected} /> : this.state.selected === 2 ? <StepscaleTwo stepnum={this.state.selected} /> : ""}
				
			</div>
		);
	}
}

export default Stepwise;