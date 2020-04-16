import React from 'react';
import { StyleSheet, Text, View,FlatList,Button ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import bookData from "./json/booklist.json";
import { navigationRef } from './RootNavigation';
import BookScreen from './screens/BookScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerScreen from './screens/DrawerScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
     
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={BookScreen} 
        options={{
          title: bookData.bookTitle,
          headerStyle:{ backgroundColor:'#00b49f',
                        height:100,
                        
                        
                        
        },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
            color:'#ffffff',
           
            
          }, 
          headerLeft: () => (
            <TouchableOpacity  onPress={() =>navigationRef.current?.navigate("Draw")}>
             <Image 
   
                source={require('./img/btn_navbar_mobile.png')
              }
                  style={{width:50,height:50,marginLeft:8,marginTop:8}}
                  />
              </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity  onPress={() => alert('This is a button!')}>
             <Image 
   
                source={
                  require('./img/btn_search.png')}
                  style={{width:50,height:50,marginRight:8,marginTop:8}}
                  />
                
                
              
              </TouchableOpacity>
          ),
        }}
      />
         <Stack.Screen 
        name="Draw" 
        component={DrawerScreen} 
        options={{
          title: bookData.bookTitle,
          headerStyle:{ backgroundColor:'#00b49f',
                        height:100,
                        
                        
                        
        },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
            color:'#ffffff',
           
            
          }, 
          headerLeft: () => (
            <TouchableOpacity  onPress={() =>navigationRef.current?.navigate("Home")}>
             <Image 
   
                source={require('./img/btn_navbar_mobile.png')
              }
                  style={{width:50,height:50,marginLeft:8,marginTop:8}}
                  />
              </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity  onPress={() => alert('This is a button!')}>
             <Image 
   
                source={
                  require('./img/btn_search.png')}
                  style={{width:50,height:50,marginRight:8,marginTop:8}}
                  />
                
                
              
              </TouchableOpacity>
          ),
        }}
       
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  
  title:{
    
   width:120,
   height:40
  }
 
 });
export default App;