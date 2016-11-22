/**
 * Created by wangdi on 22/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, Button} from 'react-native';

export default class Counter extends Component{
    static propTypes = {
        onPress: PropTypes.func
    };

    render(){
        const {text, onPress} = this.props;
        return(
            <View>
                <Text>{text}</Text>
                <Button title="Click" onPress={onPress}/>
            </View>
        );
    }
}