
import React from "react";
import { withRouter } from 'react-router';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import { any } from "prop-types";

const mapStyles = {
  width: '100%',
  height: '100%'
};

 class Dashboard extends React.Component {
   constructor(props)
   {
     super(props);
     this.state={
       name: 'Airess',
       lat:0,
       lng:0,
      
      
     };
    
     this.handleClick = this.handleClick.bind(this);
   }
   position =  () => {
 
    navigator.geolocation.getCurrentPosition(
     position => {
       let state=this.state;
       state.lat=position.coords.latitude;
       state.lng=position.coords.longitude;
       this.setState({state:state})
     })
    //   this.setState({
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude});
    //  })
   
 }
 
   componentDidMount(){
this.position();
    
   }
   handleClick(event) {  
    localStorage.setItem('login',0);
    this.props.history.push('/login')
  }
  

 
 
  render() {
console.log(this.state)
    return (
      <div >
<button onClick = {this.handleClick}>Logout</button>
        <h1>Dashboard page</h1>

        <Map
           google={this.props.google}
          zoom={2}
          style={mapStyles}
          
                         
        >
         <Marker
         
          name={'This is test name'}
          position={{
lat:this.state.lat,
lng:this.state.lng
          }}
        />
        </Map>


     
      </div>
    );
  }
}

export default withRouter(GoogleApiWrapper({
  apiKey: 'AIzaSyD1zJ0opo8phAIXUzoo1NmlXb0A-LDsI6Q'
})(Dashboard));
// export default withRouter(Dashboard);