import React, {Component} from 'react';

class UserDetails extends Component{

    render(){
        return(
             <div>
                <h1>First Name: {this.props.d.firstName}</h1>
                <h1>Last Name: {this.props.d.lastName}</h1>
                <h1>Date of Birth: {this.props.d.dob}</h1>
                <h1>City: {this.props.d.city}</h1>
            </div>
        )
    }

}export default UserDetails;