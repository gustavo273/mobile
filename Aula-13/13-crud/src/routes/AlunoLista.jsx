import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

export default function AlunoLista() {

    const navigation = useNavigation();
  
    return (
    <View>
        <Button
        icon='plus' 
        mode='contained'
         onPress={() => navigation.navigate('AlunoForm')}>
            cadastrar
        </Button>
      
    </View>
  )
}

const styles = StyleSheet.create({})