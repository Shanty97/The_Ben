import React from 'react';
import Styles from './book.module.css';
import logo from '../photos/logo.png';
import hamburger from '../photos/hamburger.png';
import {Link} from 'react-router-dom'
import { Container, Dropdown, Grid, Segment, Menu, Card, Header,Button, Icon, Label, Select } from 'semantic-ui-react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BookSearch from './booksearch.js';
import {data} from '../data/rooms.js';

import Stepwise from './stepwise.js';


class Book extends React.Component {
constructor(props){
  super(props);
  this.state = {
  	FromDate : null,
  	ToDate : null,
  	selectedRooms : '',
  	selectedAdults:'',
  	selectedChildren:'',
  	turnoff: 1,
  	selected: null,
  	filterClicked:0
  }
  this.spanref = React.createRef();
  this.divref = React.createRef();
  this.divref1 = React.createRef();
  this.handlestatechange1 = this.handlestatechange1.bind(this);
  this.handlestatechange = this.handlestatechange.bind(this);
  this.handlefromdate = this.handlefromdate.bind(this);
  this.handletodate = this.handletodate.bind(this);
  this.handlerooms = this.handlerooms.bind(this);
  this.handleadults = this.handleadults.bind(this);
  this.handlechildren = this.handlechildren.bind(this);
  this.getFilteredData = this.getFilteredData.bind(this);
  this.city = [
  { key: '1', value: 'Mumbai', text: 'Mumbai' },
  { key: '2', value: 'Banglore', text: 'Banglore' },
  { key: '3', value: 'Pune', text: 'Pune' },
  { key: '4', value: 'Assam', text: 'Assam' },
  { key: '5', value: 'Chandigarh', text: 'Chandigarh' },
  ];
  this.startfrom = [
  { key: '1', value: '2000', text: '2000' },
  { key: '2', value: '3000', text: '3000' },
  { key: '3', value: '4000', text: '4000' },
  { key: '4', value: '5000', text: '5000' },
  ];
  this.amenities = [
  { key: '1', value: 5, text: '5' },
  { key: '2', value: 4, text: '4' },
  { key: '3', value: 3, text: '3' },
  { key: '4', value: 2, text: '2' },
  { key: '5', value: 1, text: '1' }
  ];
  
  
}  

componentDidMount(){
	console.log(this.spanref);
	console.log(this.divref);

	

}

openNav = () => {
		
		this.divref1.current.style.width = "450px";
 		this.divref.current.style.marginRight = "450px";
 		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
	
closeNav = () => {
		this.divref1.current.style.width = "0";
		this.divref.current.style.marginRight = "0";
		document.body.style.backgroundColor = "white";
}	



handlestatechange(changeddata,whichstate){
	this.setState({
	 	whichstate:changeddata
	 })
	
}

handlefromdate(data){
	this.setState({
	 	FromDate:new Date(data)
	 });
	console.log("from date in books",this.state.Fromdate);
}
handletodate(data){
	this.setState({
	 	ToDate:new Date(data)
	 });
	console.log("todate in books",this.state.ToDate);
}

handlestatechange1(changeddata){
	this.setState({
	 	turnoff:changeddata
	 })
}

handlerooms(data){
	//City
	//Works
	this.setState({
	 	selectedRooms:data
	 },console.log("rooms",this.state.selectedRooms))
	
}
handleadults(data){
	//starts from
	//Works
	this.setState({
	 	selectedAdults:data
	 },console.log("adults",data))
	
}
handlechildren(data){
	//amenities
	//Works
	this.setState({
	 	selectedChildren:data
	 },console.log("ratings",data))
}

getFilteredData(){
	this.setState((prev) => ({
		filterClicked:!prev
	}));
}


	render() {
		return(
			<React.Fragment>
	   			<div id="mySidenav" ref={this.divref1} className="sidenav">
	  				<a href="#" className="closebtn" onClick={this.closeNav}>X</a>
	  				<Link to='/'>Home</Link>
	  				
	  				<Link><span style={{ color:"#fff", fontSize:"50px" }}>Book</span></Link>
	  				<Link to='/about'>About</Link>
	  				<Link to='/contact'>Contact</Link>
				</div>

			    <div id="main" ref={this.divref} style={{ margin: "0px", padding: "0px"}}>
					<div className={Styles.gridContainerBook}>
			  			<div className={Styles.item1}>
			   				<div className={Styles.header1}></div>
    						<div className={Styles.header2}>
						    	<img src={logo} width="200px" height="50px" id="logo" />
						    </div>
    						<div className={Styles.header3}>    	
    							<span onClick={this.openNav} ref={this.spanref}><img className="hamburger" src={hamburger} width="50px" /></span>
    						</div>
   						</div>
   						<div className={Styles.bookContent}>
	   						<div className={Styles.bookGrid}>
		   						<Container textAlign='center'>
	    						{console.log("booksjs",this.state.selectedChildren)}
	    						{this.state.turnoff === 1 ? 
	    							<BookSearch  
	    							FromDate={this.state.FromDate} 
	    							ToDate={this.state.ToDate} 
	    							handletodate={this.handletodate} 
	    							handlefromdate={this.handlefromdate}
	    							city={this.city}
	    							startfrom={this.startfrom}
	    							amenities={this.amenities} 
	    							handlerooms={this.handlerooms}
	    							handleadults={this.handleadults}
	    							handlechildren={this.handlechildren}
	    							selectedRooms={this.state.selectedRooms}
	    							selectedAdults={this.state.selectedAdults}
	    							selectedChildren={this.state.selectedChildren}
	    							getFilteredData={this.getFilteredData}
	    							
	    							handlestatechange={this.handlestatechange} /> : "" }
	    					
	    					{this.state.filterClicked == 0 ? 	
								<Stepwise 
								handlestatechange1={this.handlestatechange1}
								selectedRooms={this.state.selectedRooms}
	    						selectedAdults={this.state.selectedAdults}
	    						selectedChildren={this.state.selectedChildren}
								 />  : 
								<Stepwise 
								handlestatechange1={this.handlestatechange1}
								selectedRooms={this.state.selectedRooms}
	    						selectedAdults={this.state.selectedAdults}
	    						selectedChildren={this.state.selectedChildren}
								 />
								}  
							
							    
							    </Container>  
		   					</div>
	   					</div>		
   					</div>
   	   				</div>	
   				
			</React.Fragment>
		);
	}
}

export default Book;