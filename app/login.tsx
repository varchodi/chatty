import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Page = () => {
    const {type} = useLocalSearchParams<{type:string}>()
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})