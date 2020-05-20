import React from 'react';
import Styles from './book.module.css';
import { Container, Dropdown, Grid, Segment, Menu, Card, Header,Button, Icon, Label, Select } from 'semantic-ui-react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class BookSearch extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedDate:null,
			rooms:0,
			adults:0,
			children:0
		}
		this.tohandle = this.tohandle.bind(this);
		this.fromhandle = this.fromhandle.bind(this);
		this.manageRooms = this.manageRooms.bind(this);
		this.manageAdults = this.manageAdults.bind(this);
		this.manageChildren = this.manageChildren.bind(this);
	}

handlerootstate(whatdata,whichdata){
	this.props.handlestatechange(whatdata,whichdata);
}

tohandle(data){
	this.props.handletodate(data);
	console.log("todata in booksearch",data.toLocaleDateString());
}
fromhandle(data){
	this.props.handlefromdate(data);
	console.log("fromdata in booksearch",data.toLocaleDateString());
}

manageRooms(event){
	//City
	//Works
	var r = event.target.childNodes[0].innerHTML;
	this.props.handlerooms(r);
	console.log("room in BookSearch",event.target.childNodes[0].innerHTML)
}
manageAdults(event){
	//starts from
	//Works
	var a = event.target.childNodes[0].innerHTML;
	this.props.handleadults(a);
}
manageChildren(event){
	//amenities
	//Works
	var c = event.target.childNodes[0].innerHTML;
	this.props.handlechildren(c);
	console.log("rating in BookSearch",event.target.childNodes[0].innerHTML);
	}

	render(){
		return(
			
			<Card.Group>
								    	<Card fluid className={Styles.mainCard}>
    										<Card.Content><Card.Header textAlign='center'><h1>Check Avaliability</h1></Card.Header></Card.Content>

    										<Grid textAlign='center' divided='vertically'>
											<Grid.Row columns={2}>
											    <Grid.Column padded='horizontally' className={Styles.gridpad}>  
												    <Datepicker
												    	className={Styles.datepick} 
												    	selected={this.props.FromDate}
												    	onChange={date => this.fromhandle(date)}
												    	dateFormat='dd/MM/yyyy'
												    	minDate={new Date()}
												    	placeholderText="From (dd/mm/yyy)"
												    />   	
											    </Grid.Column>
											    <Grid.Column padded='horizontally' className={Styles.gridpad}>  
												    <Datepicker
												    	className={Styles.datepick} 
												    	selected={this.props.ToDate}
												    	onChange={date => this.tohandle(date)}
												    	dateFormat='dd/MM/yyyy'
												    	minDate={new Date()}
												    	placeholderText="To (dd/mm/yyy)"
												    />   	
											    </Grid.Column>
											</Grid.Row>
											<Grid.Row columns={3}>
												<Grid.Column padded='horizontally' className={Styles.gridpad}>
												<Segment className={Styles.leftmargin} raised><Label attached='top center'>City</Label></Segment>
													<Select 
													className={Styles.drops}
													placeholder='City' 
													options={this.props.city}
													value={this.props.selectedRooms}
													onChange={this.manageRooms}
													 />
		
												</Grid.Column>
												<Grid.Column padded='horizontally' className={Styles.gridpad}>
												<Segment raised><Label attached='top center'>Starting price</Label></Segment>	
													<Select 
													placeholder='Starting from' 
													options={this.props.startfrom}
													value={this.props.selectedAdults}
													onChange={this.manageAdults} />
												</Grid.Column>
												<Grid.Column padded='horizontally' className={Styles.gridpad}>
												<Segment className={Styles.rightmargin} raised><Label attached='top center'>Rating</Label></Segment>	
													<Select 
													placeholder='Ratings' 
													options={this.props.amenities}
													value={this.props.selectedChildren}
													onChange={this.manageChildren}
													 />
												</Grid.Column>
											</Grid.Row>	
											</Grid>
										    <Card.Content extra textAlign='center'>
										        <Button primary onClick={this.props.getFilteredData}>Check</Button>
										    </Card.Content>
										 </Card>
			</Card.Group>
			
		);
	}
}

export default BookSearch;