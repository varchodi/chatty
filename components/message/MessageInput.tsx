import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSharedValue } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
export type MessageInputProps = {
    //?? todo
    onShouldSendMessage: (message: string) => void; 
}

const MessageInput = () => {
    const [message, setMessage] = useState<string>('');
    const { bottom } = useSafeAreaInsets();
    const expanded = useSharedValue(0);


  return (
    <BlurView tint='extraLight' intensity={90} style={{paddingBottom:bottom+5,paddingTop:0}}>
      <View style={styles.row}></View>
    </BlurView>
  )
}

export default MessageInput

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor:'white'
    }
})