import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';

const GameOverScreen = (props) => {
    return (
        <ScrollView>

            <View style={styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image
                        fadeDuration={500}
                        style={styles.image}
                        resizeMode="cover"
                        source={require('../assets/success.png')}
                    // source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Monte_Rosa_summit.jpg/220px-Monte_Rosa_summit.jpg' }}
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
                        Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
                    </BodyText>
                </View>

                <MainButton onPress={props.onRestart} >
                    New Game
                </MainButton>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:10
    },
    image: {
        width: '100%',
        height: '100%',
        // borderRadius:200
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        width: '80%',
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60

    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOverScreen;