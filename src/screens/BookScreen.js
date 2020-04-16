import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../components/Header';
import bookData from '../json/booklist.json.json';
import Contnet from '../components/Contents';
import Buttom from '../components/Buttom';
const Mybook = ({navigation}) => {
  return (
     
       <View style={{flex:1}}>
         <Header title={bookData.bookTitle} />
         
       <Contnet contnet={bookData.bookList}/>
       <Buttom/>
       
      </View>
  );
};

export default Mybook;