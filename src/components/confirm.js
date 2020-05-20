import React from 'react';
import {Container, Button, Label, Icon,Table} from 'semantic-ui-react';

class Confirm extends React.Component {
	constructor(props){
		super(props);
		this.handleStep=this.handleStep.bind(this);
		this.state = {
			room:this.props.room,
			roomtype:this.props.roomtype,
			tax: 0.18
		}
		this.calculatetaxamount=this.calculatetaxamount.bind(this);
		this.calculatefinalamount=this.calculatefinalamount.bind(this);
		
		
	}

handleStep(){
	let stepno = 3;
	this.props.selectStep(stepno);
}

calculatetaxamount(){
	let temp = parseInt(this.state.roomtype.rate*this.state.tax);
	console.log("tax",temp);

	return temp;
}

calculatefinalamount(taxamount){
	let temp = parseInt((this.state.roomtype.rate*this.state.tax)+this.state.roomtype.rate);
	console.log("sss",temp);
	return temp;
}

	render(){
		return(
			<Container textAlign='center' style={{ color:"#fff" }}>
				<Table celled structured>

					    <Table.Header>
						      <Table.Row textAlign='center'>
						        <Table.HeaderCell rowSpan='2' style={{ background:"#e68a00" }}><h2>Hotel</h2></Table.HeaderCell>
						        <Table.HeaderCell rowSpan='2' style={{ background:"#e68a00" }}><h2>Room</h2></Table.HeaderCell>
						        
						        <Table.HeaderCell colSpan='3' style={{ background:"#e68a00" }}><h2>Amenities</h2></Table.HeaderCell>
						        <Table.HeaderCell rowSpan='2' style={{ background:"#e68a00" }}><h2>Rates</h2></Table.HeaderCell>
						      </Table.Row>

						      <Table.Row textAlign='center'>
						        <Table.HeaderCell style={{ background:"#e68a00",color:"#fff" }}><h3>Free Wifi</h3></Table.HeaderCell>
						        <Table.HeaderCell style={{ background:"#e68a00",color:"#fff" }}><h3>AC</h3></Table.HeaderCell>
						        <Table.HeaderCell style={{ background:"#e68a00",color:"#fff" }}><h3>Complimentary Breakfast</h3></Table.HeaderCell>
						      </Table.Row>
					    </Table.Header>

					    <Table.Body>
					      <Table.Row textAlign='center'>
					        <Table.Cell style={{ fontWeight:"bold" }}><h3>{this.state.room.hotel}</h3></Table.Cell>
					        <Table.Cell style={{ fontWeight:"bold" }}><h3>{this.state.roomtype.type}</h3></Table.Cell>
					          <Table.Cell textAlign='center'>
					          {this.state.roomtype.amenities.freewifi == 1 ? <Icon color='green' name='checkmark' size='large'/> : "" }
					          
					        </Table.Cell>
					        <Table.Cell textAlign='center'>
					          {this.state.roomtype.amenities.AC == 1 ? <Icon color='green' name='checkmark' size='large'/> : "" }
					        </Table.Cell>
					        <Table.Cell textAlign='center'>
					          {this.state.roomtype.amenities.cbreakfast == 1 ? <Icon color='green' name='checkmark' size='large'/> : "" }
					        </Table.Cell>
					        <Table.Cell style={{ fontWeight:"bold" }} textAlign='center'><h3>{this.state.roomtype.rate}</h3></Table.Cell>
					      </Table.Row>
					      <Table.Row >
					      	<Table.Cell style={{ fontWeight:"bold" }} textAlign='center' colSpan="5">
					      		<h3>Tax</h3>
					      	</Table.Cell>
					      	<Table.Cell style={{ fontWeight:"bold" }} textAlign='center'>
					      		<h3>{this.calculatetaxamount()}</h3>
					      	</Table.Cell>
					      </Table.Row>
					      <Table.Row>
					      	<Table.Cell style={{ fontWeight:"bold" }} textAlign='center' colSpan="5">
					      		<h3>Total</h3>
					      	</Table.Cell>
					      	<Table.Cell style={{ fontWeight:"bold" }}>
					      		<Label ribbon><h3>{this.calculatefinalamount()}</h3></Label>
					      	</Table.Cell>
					      </Table.Row>
					    </Table.Body>
				</Table>
				 <Button as='div' floated='right' labelPosition='right' onClick={this.handleStep}>
			      <Button color='blue'>
				        Pay
				    </Button>
				      <Label as='a' basic pointing='left' style={{ fontWeight:"bold" }}>
				        <h4>{this.calculatefinalamount()}</h4>
				      </Label>
			    </Button>    
				
			</Container>
		);
	}
}

export default Confirm;