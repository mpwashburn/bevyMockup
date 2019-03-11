import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import TripDetail from './TripDetail';

class TripList extends Component {
    state = { trips: [] };

    componentWillMount() {
        axios.get('https://trip-test-data.herokuapp.com/trips')
        .then(response => this.setState({ trips: response.data }));
    }
    
    renderTrips() {
      return this.state.trips.map(trip => 
        <TripDetail key={trip.id} trip={trip} />
      );
    }

    render() {
        console.log(this.state);
        
        return (
            <ScrollView>
                {this.renderTrips()}
            </ScrollView>
        );
    }
    
}

export default TripList;