import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight

} from 'react-native';

import ImageSlider from 'react-native-image-slider';


export default class Slider extends Component {

    render() {

        return (
            <View>
                <ImageSlider style={styles.slider}
                    images={[
                    'http://placeimg.com/640/480/any',
                    'http://placeimg.com/640/480/any',
                    'http://placeimg.com/640/480/any'
                ]}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    slider: {
        flex: 1
    }

});

module.exports = Slider;