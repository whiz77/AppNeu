import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight

} from 'react-native';

export default class Slider extends Component {

    randomImage = [
        require('../Images/Img1.png'),
        require('../Images/Img2.png'),
        require('../Images/Img3.png'),
        require('../Images/Img4.png'),
        require('../Images/Img5.png')
    ];

    render() {
        return (
            <View>
                <Image source={this.randomImage[parseInt(Math.floor(Math.random() * this.randomImage.length))]}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    slider: {
        flex: 1,
        width: null,
        height: null,
    }

});