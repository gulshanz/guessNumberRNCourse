import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';



const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setconfirmed] = useState(false);
    const [selectedNumber, setselectedNumber] = useState();
    // const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width)




    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setconfirmed(false);
    };

    // useEffect(() => {
    //     const updateLayout = () => {
    //         setButtonWidth(Dimensions.get('window').width / 2)
    //     };

    //     Dimensions.addEventListener('change', updateLayout)
    //     return () => {
    //         Dimensions.removeEventListener('change', updateLayout);
    //     }
    // }, []);

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number", "Number has to be a number between 1 and 99",
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setconfirmed(true);
        setselectedNumber(enteredValue);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <BodyText>You selected</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => props.onStartGame(selectedNumber)} >
                Start Game
            </MainButton>
        </Card>
    };

    return (
        <ScrollView>
            <KeyboardAvoidingView behavio='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View style={styles.screen}>
                        <BodyText>Start a new Game</BodyText>
                        <Card style={styles.inputContainer}>
                            <Text style={styles.text}>Select a Number!</Text>
                            <Input
                                blurOnSubmit
                                style={styles.input}
                                autoCapatalize='none'
                                autoCorrect={false}
                                keyboardType='number-pad'
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={styles.button} >
                                    <Button
                                        color={Colors.accent}
                                        title="Reset"
                                        onPress={() => { resetInputHandler() }} />
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        color={Colors.primary}
                                        title="Confirm"
                                        onPress={() => { confirmInputHandler() }} />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center'
    },
    button: {
        // width: 100
        width: Dimensions.get('window').width / 3
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        fontFamily: 'open-sans'
    }
});

export default StartGameScreen;