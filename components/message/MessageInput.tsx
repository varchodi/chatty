import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSharedValue } from 'react-native-reanimated';

export type MessageInputProps = {
    //?? todo
    onShouldSendMessage: (message: string) => void; 
}

const MessageInput = () => {
    const [message, setMessage] = useState<string>('');
    const { bottom } = useSafeAreaInsets();
    const expanded = useSharedValue(0);


  return (
    <View>
      <Text>MessageInputy</Text>
    </View>
  )
}

export default MessageInput

const styles = StyleSheet.create({})