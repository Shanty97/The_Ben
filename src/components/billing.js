import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Button, Form, Container ,Segment, Label, Header, Modal, Image, Transition} from 'semantic-ui-react';
import airport from '../photos/airport.png';
import {Link} from 'react-router-dom';


const transitions = [
  'fade up',
]

class Billing extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			number:'',
			name:'',
			expiry:'',
			cvc:'',
			focus:'',
			open:false,
			animation: 'fade down',
            duration: 2000,
            visible: true
		}
		
	}
	show = (dimmer) => () => this.setState({ dimmer, open: true })
  	close = () => {this.setState({ open: false })}
  	handleChange = (e, { name, value }) => this.setState({ [name]: value })
  	handleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

	render(){
		const { open, dimmer, animation, duration, visible } = this.state;
		return(
			<Container textAlign='left' style={{color:"#fff", paddingRight:'10%'}}	>
				<Segment basic compact floated='left'>
				<Cards 
					number={this.state.number}
					name={this.state.name}
					expiry={this.state.expiry}
					cvc={this.state.cvc}
					focused={this.state.focus}
				/>
				</Segment>
				<Form inverted size='large' key='huge' style={{ marginTop:"60px", fontSize:"20px", color:"#fff" }}>
				    <Form.Group unstackable equal>
				    
				    <Form.Input

				      	label='Card Number'
				      	placeholder='Card Number'
				      	name='number'
				      	value={this.state.number}
				      	onChange={(event) => this.setState({ number:event.target.value })}
				      	onFocus= {(event) => this.setState({ focus:event.target.name })}
				    />
				    
				     <Form.Input
				    	label='Name on Card'
				    	placeholder='Name on card'
				    	name='name'
				      	value={this.state.name}
				      	onChange={(event) => this.setState({ name:event.target.value })}
				      	onFocus= {(event) => this.setState({ focus:event.target.name })}
				    />
				    </Form.Group>

				    <Form.Group unstackable equal>
				    
				    <Form.Input
				    	label='Expiry Date'
				    	placeholder='Expiry Date(MM/YYYY)'
				    	name='expiry'
				      	value={this.state.expiry}
				      	onChange={(event) => this.setState({ expiry:event.target.value })}
				      	onFocus= {(event) => this.setState({ focus:event.target.name })}	
				    />
				   
				    <Form.Input
				    	label='CVV'
				    	placeholder='cvc'
				    	name='cvc'
				      	value={this.state.cvc}
				      	onChange={(event) => this.setState({ cvc:event.target.value })}
				      	onFocus= {(event) => this.setState({ focus:event.target.name })}
				    />
				    </Form.Group>
				    
				    <Button type='submit' size='large' color='teal' style={{ marginLeft:"10px" }} onClick={this.show('blurring')}>Pay</Button>
			  		<Modal dimmer={dimmer} open={open} onClose={this.close}>
				      <Modal.Header style={{ background:"#e68a00", color:"#fff" }}>Confirmation</Modal.Header>
				      <Modal.Content image>
				      	<Transition.Group animation={animation} duration={duration}>
				            {visible && (
				              <Image
						          wrapped
						          size='medium'
						          src={airport} 
						        />
				            )}
				        </Transition.Group>
				        
				        <Modal.Description>
				          <Header>Payment Successful !!</Header>
				          <p>
				            We've sent you a confirmatin email regarding the booking. 
				          </p>
				          <p>Have a Safe and Happy Journey !</p>
				        </Modal.Description>
				      </Modal.Content>
				      <Modal.Actions>
				      <Link to='/'>
				        <Button
				          positive
				          icon='checkmark'
				          labelPosition='right'
				          content="Done"
				          onClick={this.close}
				        />
				       </Link>
				      </Modal.Actions>
				    </Modal>
			  	</Form>
			</Container>
		);
	}
}

export default Billing;