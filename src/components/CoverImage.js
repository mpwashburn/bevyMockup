import React from 'react';
import { View, Image } from 'react-native';

const CoverImage = (props) => {
    return (
        <View>
        <Image style={styles.coverImageStyle}>
            {props.children}
        </Image>
        </View>
    )
};

const styles = {
    coverImageStyle: {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 200,
        justifyContent: 'center',
        zIndex: 0
    }
};

export default CoverImage;