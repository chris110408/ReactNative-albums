/**
 * Created by leichen on 2017/1/12.
 */
//Import libraries for making a component

import React from 'react';
import { Text, View } from 'react-native';

//maike a Component

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
        );
};

//Make the component available to other parts of the app
const styles = {

    viewStyle: {
     backgroundColor: '#f8f8f8',
     justifyContent: 'center',
     alignItems: 'center',
     height: 60,
     paddingTop: 15,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.2,
     elevation: 2,
     position: 'relative'
    },

    textStyle: {
        fontSize: 20
    }
}

export default Header;
