import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { defaultStyles } from '@/constants/styles';
import { Stack } from 'expo-router';
import HeaderDropDown from '@/components/header/HeaderDropDown';

const Page = () => {
  const { signOut } = useAuth();
  const [gptVersion, setGptVersion] = useState<'4'|'3.5'|string>('3.5')
  return (
    <View style={defaultStyles.pageContainer}>
      <Stack.Screen
        options={{
          headerTitle: () => <HeaderDropDown title='ChatGpt'
            items={[
              { key: '3.5', title:'GPT-3.5', icon:'bolt'},
              {key:'4',title:'GPT-4',icon:'sparkles'}
            ]}
            onSelect={(key) => setGptVersion(key)}
            selected={gptVersion}
          />,
          
        }}
      />
      <Button title='sign out' onPress={()=>signOut()}/>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})