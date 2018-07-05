import React, { Component } from 'react';

import { View, Button } from 'react-native';

import MyButton from './shared/MyButton';


class MainComponent extends Component {

    onPressRouteToOne() {
        console.log("Diet #1");
    }

    onPressRouteToTwo() {
        console.log("Diet #2");
    }

    onPressRouteToThree() {
        console.log("Diet #3");
    }



    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', margin: 8 }}>
                <View style={{ margin: 50 }}>
                    <Button
                        title='Diet #1'
                        onPress={this.onPressRouteToOne}
                        color="green"
                        large


                    />
                </View>
                <View style={{ margin: 50 }}>
                    <Button
                        title='Diet #2'
                        onPress={this.onPressRouteToTwo}

                    />
                </View>
                <View style={{ margin: 50 }}>
                    <Button
                        title='Diet #3'
                        onPress={this.onPressRouteToThree}

                    />
                </View>
            </View>
        )
    }

}

export default MainComponent;