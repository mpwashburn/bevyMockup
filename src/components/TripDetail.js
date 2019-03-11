import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CardHeader from './CardHeader';

const TripDetail = ({ trip }) => {
    const { title, location, dateStart, dateEnd, tripCoverImage } = trip;
    return (
        <Card>
            <CardSection>
                <CardHeader 
                tripTitle={title}
                tripLocation={location}
                tripStart={dateStart}
                tripEnd={dateEnd} 
            />
            
            </CardSection>
            <CardSection>
                <View style={{flex: 1}}>
                    <Image 
                    style={styles.thumbnailStyle}
                    source={{ uri: tripCoverImage }}
                    />
                </View>
            </CardSection> 
        </Card>
    );
};

const styles = {
    cardHeaderTop: {        
        justifyContent: 'space-around',
        backgroundColor: 'transparent'
    },
    thumbnailStyle: {
        height: 75,
        marginRight: 10
    },
    textStyle: {
        flexWrap: 'wrap',
        flex: 1
    }
};

export default TripDetail;