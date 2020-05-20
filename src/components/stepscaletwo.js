import React from 'react';
import { Container, Dropdown, Grid, Segment, Menu, Card, Step, Image, Modal, Header, Item, Button, Icon, Label, Select } from 'semantic-ui-react';


class StepscaleTwo extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Container textAlign='center'  style={{ position:"fixed",bottom:"0",left:"45vh", }}>
				<Step.Group ordered textAlign='center'>
				    <Step disabled data-step="1">
				      <Step.Content>
				      	{console.log("inside stepwise state is :",this.props.selected)}
				        <Step.Title >Avaliability</Step.Title>
				        <Step.Description>Choose your accomodation</Step.Description>
				      </Step.Content>
				    </Step>

				 	<Step active data-step="2" ref={this.trial}>
				      <Step.Content>
				        <Step.Title >Billing</Step.Title>
				        <Step.Description>Enter billing information</Step.Description>
				      </Step.Content>
				    </Step>

				    <Step disabled data-step="3">
				      <Step.Content>
				        <Step.Title >Confirm Order</Step.Title>
				      </Step.Content>
				    </Step>
				 </Step.Group>
			</Container>
		);
	}
}

export default StepscaleTwo;