import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){
  return(
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
      Gerencie suas plantas de forma fácil
      </Text>

      <Image source={wateringImg} />

      <Text style={style.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>

      <TouchableOpacity style={style.button}>
        <Text>></Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center'
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  button:{
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10
  }
})