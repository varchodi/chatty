import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export type MessageInputProps = {
    //?? todo
    onShouldSendMessage: (message: string) => void; 
}

const MessageInput = () => {
  return (
    <View>
      <Text>MessageInput</Text>
    </View>
  )
}

export default MessageInput

const styles = StyleSheet.create({})