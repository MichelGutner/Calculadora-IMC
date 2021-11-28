import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, } from "react-native";
import colors from "../../../cores/colors";
import InitialButton from '../../components/InitialButton'
import {styles} from './styles'

const InitScreen = ({onFinish}) => {
    const [name, setName] = useState('');

    const handleChangeText = text => setName(text);

    const handleSubmit = async () => {
        const user = {name: name};
        await AsyncStorage.setItem('user', JSON.stringify(user))
        if (onFinish) onFinish()
    }


    return (
        <>
        <StatusBar hidden/>
        <View style={styles.bodyInput}>
            <View style={{marginBottom: 90, alignItems: 'center'}}>
                <Text style={styles.textHeader}>Entre,{'\n'}com seu Nome</Text>
                <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={handleChangeText}
                placeholder="Exemplo: Michel"
                maxLength={12}
                placeholderTextColor={colors.BLACK}
                />

                {name.length >= 4? (
                    <TouchableOpacity style={styles.ButtonBody}>
                        <InitialButton onPress={handleSubmit}/>
                    </TouchableOpacity>
                ): null}
            </View>
        </View>
        </>
    )
}

export default InitScreen;