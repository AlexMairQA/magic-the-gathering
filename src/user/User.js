import React, { Component } from 'react';
import UserDetails from './UserDetails.js'

class User extends Component {

    render() {
         let userData={"firstName":"Jesus", "lastName":"Christ", "dob":"0 0 0000", "city" :"Salford"}
        return (

           <UserDetails d={userData} /> 

        )
    }

} export default User;