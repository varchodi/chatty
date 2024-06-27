import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import {Drawer} from 'expo-router/drawer'
import React from 'react'
import { Link, useNavigation } from 'expo-router'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { DrawerActions } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export const CustomDrawerContent = (props: any) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, marginTop: top }}>
      <View style={{ backgroundColor: '#fff', paddingBottom: 16 }}>
        <View style={styles.searchSection}>
            <Ionicons style={styles.searchIcon} name='search' size={18} color={Colors.greyLight}/>
            <TextInput style={styles.input} placeholder='Search' underlineColorAndroid={'transparent'}/>
        </View>
      </View>
      <DrawerContentScrollView
        contentContainerStyle={{paddingTop:0,paddingBottom:16}}
        {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  )
}

const Laout = () => {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();

  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)} style={{marginLeft:16}}>
            <FontAwesome6 name='grip-lines' size={20} color={Colors.grey} />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor:Colors.light,
        },
        headerShadowVisible: false,
        drawerActiveBackgroundColor: Colors.selected,
        drawerActiveTintColor: '#000', // text on link
        drawerInactiveTintColor: '#000',
        drawerItemStyle: { borderRadius: 12 },
        drawerLabelStyle: { marginLeft: -20 },
        drawerStyle:{width:dimensions.width*.86},
        overlayColor:'rgba(0,0,0,0.2)',
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
  },
  searchSection: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.input,
    borderRadius: 10,
    height:34
  },
  searchIcon: {
    padding:6
  },
  input: {
    flex: 1,
    paddingRight: 8,
    paddingHorizontal: 8,
    paddingLeft: 0,
    alignItems: 'center',
    color:'#424242'
  },

})