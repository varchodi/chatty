import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';

const BottomLoginSheet = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container,{paddingBottom:bottom+12}]}>
      <TouchableOpacity style={[defaultStyles.btn, styles.btnLight]}>
        <Ionicons name='logo-apple' size={18} styles={styles.btnIcon} />
        <Text style={styles.btnLightText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[defaultStyles.btn, styles.btnDark]}>
        <Ionicons name='logo-google' size={18} styles={styles.btnIcon} color={'#fff'}/>
        <Text style={styles.btnDarkText}>Continue with Google</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={[defaultStyles.btn, styles.btnLight]}>
        <Ionicons name='logo-apple' size={16} styles={styles.btnIcon} />
        <Text style={styles.btnLightText}>Continue with Apple</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default BottomLoginSheet

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom:0,
    width: '100%',
    backgroundColor: '#000',
    padding: 26,
    gap: 14,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btnLight: {
    backgroundColor:'#fff',
  },
  btnIcon: {
    paddingRight: 7,  
  },
  btnLightText: {
    fontSize: 20,
  },
  btnDark: {
    backgroundColor:Colors.grey,
  },
  btnDarkText: {
    color: '#fff',
    fontSize:20,
  },
  btnOutline: {
    borderWidth: 3,
    borderColor:Colors.grey
  }

})