import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const request = async(callback) => {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const parsed = await response.json();
  callback(parsed.data);
}

export default function App() {
    const [registro, setRegistro] =useState([]);
    useEffect(() =>{request(setRegistro);},[]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> API Disney - Séries de TV</Text>
      <StatusBar style="auto" />

      <FlatList 
      data={registro} keyExtractor={(item)=> item.tvShows.toString()} 
      renderItem={({item})=>
      <Text style={styles.topicos}>
      {item.tvShows}
      </Text>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b7d5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicos: {
    fontSize: 25,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: '#000000',
    borderRadius: 8,
    textAlign: 'center',
    color: '#fff'
  },
  titulo: {
    fontSize: 25,
    marginTop: 0,
    marginVertical: 10
  }
});
