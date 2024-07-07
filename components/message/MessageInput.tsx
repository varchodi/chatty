import { Animated, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSharedValue } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const ATouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export type MessageInputProps = {
    //?? todo
    onShouldSendMessage: (message: string) => void; 
}

const expandItems = () => {
    // todos
}

const MessageInput = () => {
    const [message, setMessage] = useState<string>('');
    const { bottom } = useSafeAreaInsets();
    const expanded = useSharedValue(0);


  return (
    <BlurView tint='extraLight' intensity={90} style={{paddingBottom:bottom+5,paddingTop:0}}>
      <View style={styles.row}>
        <ATouchableOpacity onPress={expandItems} style={styles.roundBtn}>
                  <Ionicons name='add' size={24} color={ Colors.grey} />
        </ATouchableOpacity>
      </View>
    </BlurView>
  )
}

export default MessageInput

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    roundBtn: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: Colors.input,
        alignItems: 'center',
        justifyContent:'center',
    }
})