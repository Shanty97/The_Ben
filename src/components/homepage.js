import React from 'react';
import '../App.css';
import fblogo from '../photos/fblogo.png';
import hamburger from '../photos/hamburger.png';
import instalogo from '../photos/instalogo.png';
import logo from '../photos/logo.png';
import photo from '../photos/photo.png';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';


class Homepage extends React.Component {
constructor(props){
  super(props);
  this.spanref = React.createRef();
  this.divref = React.createRef();
  this.divref1 = React.createRef();
  
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

  render() {
   return (
   	<React.Fragment>
   	<div id="mySidenav" ref={this.divref1} className="sidenav">
  			<a href="#" className="closebtn" onClick={this.closeNav}>X</a>
  			<Link to='/'><span style={{ color:"#fff", fontSize:"50px" }}>Home</span></Link>
        
  			<Link to='/book'>Book</Link>
        <Link to='/about'>About</Link>
  			<Link to='/contact'>Contact</Link>
  			
	</div>

    <div id="main" ref={this.divref} style={{ margin: "0px", padding: "0px"}}>
	 <div className="grid-container">
  <div className="item1">
    <div className="header1">
    	
    </div>
    <div className="header2">
    	<img src={logo} width="200px" height="50px" id="logo" />
    </div>
    <div className="header3">
    	
    	<span onClick={this.openNav} ref={this.spanref}><img className="hamburger" src={hamburger} width="50px" /></span>
    </div>
   </div>
  <div className="item2"></div>
  <div className="item3">
    <div className="Main1">
    	<h2 id="subtitle1">Enjoy</h2>
    	<h1 id="subtitle2">Luxury.</h1>
    	<Button color='black' size='large' id="subtitle-button" ><Link to='/book'>Book</Link></Button>
    </div>
    <div className="Main2"></div>
    <div className="Main3">
    	<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has</p> 
    	<p>roots in a piece of classNameical Latin literature from 45 BC, making it over</p>
    	<p>2000 years old. Richard McClintock, a Latin professor</p> 
    	<p>at Hampden-Sydney College in Virginia</p>
    </div>
   </div>  
  <div className="item4"></div>
  <div className="item5">
    <div className="footer1"></div>
    <div className="footer2">
    	<img className="fb" src={fblogo} />
    </div>
    <div className="footer3">
    	<img className="insta" src={instalogo} />
    </div>
   </div>
</div>
</div>
</React.Fragment>
  );
}
}



export default Homepage;
