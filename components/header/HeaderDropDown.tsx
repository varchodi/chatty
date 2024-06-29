import Colors from '@/constants/Colors';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as DropdownMenu from 'zeego/dropdown-menu'

export type HeaderDropDown = {
  title: string;
  selected?: string;
  onSelect: (key: string) => void;
  items: Array<{ key: string, title: string, icon: string }>;
}

const HeaderDropDown = ({title,selected,items,onSelect}:HeaderDropDown) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{ fontWeight: '500', fontSize: 16 }}>{title}</Text>
          {selected && (
            <Text style={{marginLeft :10,color:Colors.greyLight, fontSize:16,fontWeight:'500'}}>
              {selected}&gt;
            </Text>
          )}
        </View>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align={'center'} alignOffset={'center'} avoidCollisions={true} collisionPadding={''} loop={''} side={''} sideOffset={''}>
        {
          items.map((item) => (
            <DropdownMenu.Item
              key={item.key}
              onSelect={() => onSelect(item.key)}
            >
              <DropdownMenu.ItemTitle>{item.title}</DropdownMenu.ItemTitle>
              <DropdownMenu.ItemIcon ios={{
                name: item.icon,
                pointSize:1
              }}
              androidIconName={item.icon}
              />
            </DropdownMenu.Item>
          ))
        }
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default HeaderDropDown

const styles = StyleSheet.create({})