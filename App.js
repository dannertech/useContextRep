import React, { createContext, useContext } from 'react';
import {StyleSheet, View, Text} from 'react-native';


const Context = createContext({colorTheme: 'dark'});


const App = () => {
  return(
    <Context.Provider value={{colorTheme: 'light'}}>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '50%'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>App component</Text>
      <CardComponent />
      </View>
    </Context.Provider>
  )
};

const CardComponent = () => {
const { colorTheme } = useContext(Context);
  return(
    <View style={{height: 300, width: 300, alignSelf: 'center', backgroundColor: colorTheme == 'light' ? '#FBD8DF' : 'black'}}>
            <Text>This is the Card Component</Text>
        </View>
  )
}

export default App;