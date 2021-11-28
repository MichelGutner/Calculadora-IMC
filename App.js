import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import InitScreen from "./services/pages/init";
import AsyncStorage from "@react-native-community/async-storage";
import Home from "./services/pages/home";

const App = () =>{
  const [user, setUser] = useState({});

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user')
    if(result !== null){
      setUser(JSON.parse(result))
      console.log(result)
    }
  };


  useEffect(() => {
    findUser
  }, [])

  if(!user.name){
    return <InitScreen onFinish={findUser}/>
  }else{
    return(
      <NavigationContainer>
        <Home user={user}/>
      </NavigationContainer>
    )
  }
}

export default App;