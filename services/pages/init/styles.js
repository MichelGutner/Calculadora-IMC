import { Dimensions, StyleSheet } from "react-native"
import colors from '../../../cores/colors'



const width = Dimensions.get('window').width -100

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    textInput:{
        width: width,
        borderWidth: 2,
        borderColor: colors.BORDER,
        height: 45,
        borderRadius: 10,
        fontSize: 20,
        paddingLeft: 15,
        color: colors.BLACK,
        opacity: 0.4
    },
    bodyInput:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.WHITE,
    },
    ButtonBody:{
        alignItems: 'center',
        width: 90,
        backgroundColor: colors.GREEN,
        borderRadius: 15,
        marginTop: 30,
    },
    textHeader:{
        fontSize: 35,
        marginBottom: 30,
    }
})