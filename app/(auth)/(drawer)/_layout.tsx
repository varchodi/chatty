import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Drawer} from 'expo-router/drawer'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const Laout = () => {
  
  return (
    <Drawer
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={()=>{}} style={{marginLeft:16}}>
            <FontAwesome6 name='grip-lines' size={20} color={Colors.grey} />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor:Colors.light,
        }
      }}
    >
      <Drawer.Screen name='(chat)/new'
        getId={()=>Math.random().toString()}
        options={{
        title: 'ChatGPT',
        headerTitleAlign: 'center',
        drawerIcon: () => (
          <View style={[styles.item,{backgroundColor:'#000'}]}>
            <Image source={require('@/assets/images/logo-white.png')} style={styles.btnImage} />
          </View>
        ),
        headerRight: () => (
          <Link href='(auth)/(drawer)/(chat)/new' push asChild>
            <TouchableOpacity>
              <Ionicons name='create-outline' size={24} color={Colors.grey} style={{marginRight:16}} />
            </TouchableOpacity>
          </Link>
        )
        
        }} />
      {/* dallE */}
      <Drawer.Screen name='dalle'
        options={{
        title: 'Dall•E',
        headerTitleAlign: 'center',
        drawerIcon: () => (
          <View style={[styles.item,{backgroundColor:'#000'}]}>
            <Image source={require('@/assets/images/dalle.png')} style={styles.dallEImage} />
          </View>
        )
        
        }} />
      
      <Drawer.Screen name='explore'
        options={{
        title: 'Explore GPTs',
        headerTitleAlign: 'center',
        drawerIcon: () => (
          <View style={[styles.itemExplore]}>
            <Ionicons name='apps-outline' size={18} color={'#000'} />
          </View>
        )
        
      }}/>
    </Drawer>
  )
}

export default Laout

const styles = StyleSheet.create({
  item: {
    borderRadius: 15,
    overflow:'hidden'
  },
  itemExplore: {backgroundColor:'#fff', width:28, height:28, alignItems:'center', justifyContent:'center', borderRadius:15},
  btnImage: {
    margin: 6,
    width: 16,
    height:16,
  },
  dallEImage: {
    width: 28,
    height: 28,
    resizeMode:'cover'
  }
})