import React from 'react';
import { View, Text, Image } from 'react-native';


const CardHeader = (props) => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleDate}>
                <Text>{props.tripTitle}</Text>
                <Text>{props.tripLocation}</Text>
                <Text>{props.tripStart} - {props.tripEnd}</Text>
            </View> 
        </View>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'row',
        flex: 1
    },
    titleDate: {
        flex: 4,
    },
    share: {
        flex: 1,
        width: 20,
        height: 20
    },
    guestUserIcon: {
        
    }
};

export default CardHeader;