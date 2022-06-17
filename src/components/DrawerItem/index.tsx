import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';

import * as S from './styled';
import Icon from 'react-native-vector-icons/Feather';

type CustomDrawerItemProps = {
  label: string;
  iconName: string;
  focused: boolean;
  onPress: () => void;
  danger?: boolean;
};

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({
  label,
  iconName,
  focused,
  danger,
  onPress,
}) => (
  <DrawerItem
    label={label}
    focused={focused}
    onPress={onPress}
    icon={({focused: focusedItem, color, size}) => (
      <S.DrawerListItemIcon>
        {focusedItem && <S.DrawerListItemBefore />}
        <Icon color={color} size={size} name={iconName} />
      </S.DrawerListItemIcon>
    )}
    style={{
      left: -10,
      paddingLeft: 24,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 37,
      borderBottomRightRadius: 37,
    }}
    labelStyle={{
      left: -16,
    }}
    activeBackgroundColor="#E0F0F8"
    activeTintColor="#2F9FF8"
    inactiveTintColor={danger ? '#D61D2D' : '#072D4B'}
  />
);

export default CustomDrawerItem;
