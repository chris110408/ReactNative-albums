/**
 * Created by leichen on 2017/1/13.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>
                {props.album.title}
            </Text>
        </View>
        );
};

export default AlbumDetail;
