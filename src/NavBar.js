import React, {Component} from 'react';

export class NavBar extends Component{
    render(){
        return(
            <nav>
            <button className="btn btn-info btn-lg">Button 1</button>
            <button className="btn btn-info btn-lg">Button 2</button>
            <button className="btn btn-info btn-lg">Button 3</button>
            <button className="btn btn-info btn-lg">Button 4</button>
            <button className="btn btn-info btn-lg">Button 5</button>
            
            </nav>
        )
    }
}