import React from 'react';
import { View, StyleSheet, Button, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number!</Text>
                    <Input
                        blurOnSubmit
                        style={styles.input}
                        autoCapatalize='none'
                        autoCorrect={false}
                        keyboardType='number-padv'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button} >
                            <Button color={Colors.accent} title="Reset" onPress={() => { }} />
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.primary} title="Confirm" onPress={() => { }} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
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
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        margin: 10,
        width: '100%'
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;