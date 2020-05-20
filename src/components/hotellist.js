import React from 'react';
import { Container, Dropdown, Grid, Divider, Segment, Statistic, Menu, Card, Rating, Image, List, Modal, Header, Item, Button, Icon, Label, Select } from 'semantic-ui-react';
import {data} from '../data/rooms.js';
import hotel1 from '../photos/hotel1.jpg';
import room1 from '../photos/bedroom1.jpg';
import bathroom1 from '../photos/bathroom1.jpg'; 
import Styles from './hotellist.module.css';

class Hotellist extends React.Component {
constructor(props){
	super(props);
	this.state = {
		filtereddata:this.props.getFilteredData
	}
	this.handleStep=this.handleStep.bind(this);
	this.filtersdata=this.filtersdata.bind(this);
}


handleStep(room,roomtype){
	let stepno = 2;
	this.props.selectStep(stepno,room,roomtype);
}

filtersdata(){
	data.filter((cell) => {
		return this.props.selectedRooms == cell.city && this.props.selectedAdults == cell.from;
	});
}

	render() {
		
	var temp = data.filter((cell) => {
		
		return ((this.props.selectedChildren == cell.rating && this.props.selectedRooms == cell.city && this.props.selectedAdults == cell.from)
			|| (this.props.selectedChildren == '' && this.props.selectedRooms == '' && this.props.selectedAdults == '')
			);
	});
	console.log(temp);
		if(temp != ''){
			return(
			<Container textAlign='left' style={{overflow: 'auto', marginTop:"1.3rem", maxHeight:"370px" }}	>
			<Card.Group>
			{console.log("photo",typeof(hotel1))}
			{temp.map(room => {
				return(
					
					<Card fluid style={{ background:"#3b6978" }}>
				      <Card.Content>
				        	<Segment basic compact floated='right'>
				        	<Statistic.Group>
							    <Statistic>
							      <Statistic.Value>{room.tplaces}</Statistic.Value>
							      <Statistic.Label>Tourist Places</Statistic.Label>
							    </Statistic>

							    <Statistic>
							      <Statistic.Value text>
							        {room.special.one}
							        <br />
							       {room.special.two}
							      </Statistic.Value>
							      <Statistic.Label>Speciality</Statistic.Label>
							    </Statistic>

							    <Statistic>
							      <Statistic.Value>
							        <Icon name='plane' />
							        {room.airport}km
							      </Statistic.Value>
							      <Statistic.Label>Near-by Airport</Statistic.Label>
							    </Statistic>
							 </Statistic.Group>
							 </Segment>
				        <Card.Header style={{ color:"#fff" }}><h2>{room.hotel}</h2></Card.Header>
				        <Card.Meta style={{ color:"#ccc" }}>{room.city}</Card.Meta>
				        
				        <Card.Description>
				          <Label as='a' basic color='black' style={{ color:"#fff",marginBottom:"10px" }}>Starts from {room.from} per night</Label>

				        </Card.Description>
				         <Rating icon='star' maxRating={5} rating={room.rating} disabled />
				      </Card.Content>
				      <Card.Content extra>
				        <Modal trigger={<Segment basic compact floated='right'><Button color='brown'>Show Rooms</Button></Segment>} centered={false}>
						    <Modal.Header style={{ background:"#e68a00", color:"#fff" }}>Select a room</Modal.Header>
						    <Modal.Content>
						       <Item.Group divided>
						       {room.rooms.map(roomtype => {
						       		return (
   	 								<Item>
   	 									<Item.Content>
   	 										<Image.Group size='small'>
											      <Image src={room1} floated='right' />
											      <Image src={bathroom1} floated='right' />
											      <Image src={hotel1} floated='right' />
											</Image.Group>
									        <Item.Header as='a'>{roomtype.type}</Item.Header>
									        <Item.Meta>
									          <span className='cinema'>
									          <Label as='a' size='large' color='grey'>
											    <Icon name='money' /> Rate : {roomtype.rate} per.night
											  </Label>
									          </span>
									        </Item.Meta>
									        <Item.Description>
									        <Segment compact raised color='brown'><List>
												    <List.Item>
												      <List.Icon name='users' />
												      <List.Content>Max Occupancy : {roomtype.rules.max}</List.Content>
												    </List.Item>
												    <List.Item>
												      <List.Icon name='eye' />
												      <List.Content>View : {roomtype.rules.view}</List.Content>
												    </List.Item>
												</List></Segment>
									        </Item.Description>
									        <Segment compact basic size='small'>
						    					{roomtype.amenities.freewifi == 1 ? <Label as='a' color='brown' tag>Free Wifi</Label> :""}
						 					
						 					
						    					{roomtype.amenities.AC == 1 ? <Label as='a' color='brown' tag>AC</Label> : ""}	
						 					
						 					
						    					{roomtype.amenities.cbreakfast == 1 ? <Label as='a' color='brown' tag>Complimentary Breakfast</Label> : ""}
						 					</Segment>
									        <Item.Extra>
									          <Button primary floated='right' onClick={() => this.handleStep(room,roomtype)}>
									            Book
									            <Icon name='right chevron' />
									          </Button>
									          
									        </Item.Extra>
									    </Item.Content>
									</Item>
									)
						       })}
								</Item.Group>	
						    </Modal.Content>
						  </Modal>
				      </Card.Content>
			    </Card>
			    
				)
			})}
			    
		    </Card.Group>
			</Container>

		);
		}
		else{
		
			return null;
		}


		
	}
}

export default Hotellist;