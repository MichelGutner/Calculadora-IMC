import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../../../cores/colors";

const InitialButton = ({onPress}) => (
    <TouchableOpacity
    onPress={onPress}
    >
        <Icon 
        name="arrow-right-thick"
        size={52}
        color={colors.WHITE}
        />
        
    </TouchableOpacity>
);

export default InitialButton;