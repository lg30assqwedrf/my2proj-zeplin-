import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../components/Header';
import bookData from '../json/booklist.json.json';
import Contnet from '../components/Contents';
import Buttom from '../components/Buttom';
import Drawer from '../components/Drawer';
const DrawerScreen = ({navigation}) => {
  return (
    
       <View style={{flex:1}}>
         <Header/>
         
         
         <Contnet contnet={bookData.bookList}/>
         <Buttom/>
         <View style={{backgroundColor:"black",opacity:0.5,height:1000,position:"absolute",width:420}}>
        
        </View>
        <View style={{opacity:1,position:'absolute'}}>
        <Drawer/>
        </View>

        
         
       
      </View>
      
  );
};
const styles = StyleSheet.create({
  
  
});
export default DrawerScreen;