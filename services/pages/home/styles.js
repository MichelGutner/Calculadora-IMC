import {StyleSheet} from 'react-native';
import colors from '../../../cores/colors';


export const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.BACKGROUND
    },
    textInput:{
      fontSize: 35,
      textAlign: 'left',
      color: colors.WHITE
    },
    buttonCalc:{
      width: '80%',
      height: 50,
      marginTop: 30,
      backgroundColor: colors.CORNSILK,
      shadowColor: colors.BLACK,
      elevation: 15
    },
    textCalc:{
      alignSelf: 'center',
      marginTop: 10,
      fontSize: 20,
    },
    headerCalc:{
      marginTop: 40,
      width: '100%',
      height: '30%',
      alignItems: 'center',
      marginRight: 25,
    },
    headerNumberResults:{
      alignSelf: 'center',
      marginLeft: 25,
      fontSize: 28,
      opacity: 0.7,
      color: colors.WHITE
    },
    headerTextResults:{
      alignSelf: 'center',
      marginLeft: 25,
      fontSize: 20,
      opacity: 0.7,
      color: colors.WHITE
    },
    headerMessage:{
      fontSize: 29,
      marginTop: 10,
      fontWeight: '600',
      color: colors.WHITE
    },
    inputText:{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 20
    },
    headerTitle: {
      width: '100%',
      height: 80,
      backgroundColor: colors.WHITE,
    },
    textTitle:{
      fontSize: 30,
      color: colors.BACKGROUND,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })