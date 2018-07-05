import React from 'react';

import { Button } from 'react-native';

export default class MyButton {


    render() {

        return (
            <Button title={this.title} onPress={props.onPress} />
        )
    }
}