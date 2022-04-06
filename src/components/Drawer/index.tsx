import {DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import React from 'react';

import * as S from './styled';
import logoSrc from '../../assets/brand/logo.png';
import Icon from 'react-native-vector-icons/Feather';

const CustomDrawerContent = (props: any) => (
  <S.DrawerContainer {...props}>
    <S.DrawerHeaderContainer>
      <S.ImageBrandLogo source={logoSrc} />
      <S.HeaderTitle>Aster News</S.HeaderTitle>
    </S.DrawerHeaderContainer>

    {/* <DrawerItemList {...props} /> */}

    <DrawerItem
      label="Home"
      focused
      onPress={() => undefined}
      icon={({focused, color, size}) => (
        <Icon color={color} size={size} name="home" />
      )}
    />

    <DrawerItem
      label="Around the World"
      onPress={() => undefined}
      icon={({focused, color, size}) => (
        <Icon color={color} size={size} name="globe" />
      )}
    />

    <DrawerItem
      label="Business"
      onPress={() => undefined}
      icon={({focused, color, size}) => (
        <Icon color={color} size={size} name="briefcase" />
      )}
    />

    <DrawerItem
      label="Health"
      onPress={() => undefined}
      icon={({focused, color, size}) => (
        <Icon color={color} size={size} name="activity" />
      )}
    />

    <S.DrawerDivider />

    <DrawerItem
      label="Gerar 100 Posts"
      onPress={() => undefined}
      icon={({focused, color, size}) => (
        <Icon color={color} size={size} name="database" />
      )}
    />
    <DrawerItem
      label="Gerar 10.000 Posts"
      onPress={() => undefined}
      icon={({focused, color, size}) => (
        <Icon color={color} size={size} name="database" />
      )}
    />

    <S.DrawerDivider />

    <DrawerItem
      label="Estatísticas"
      onPress={() => undefined}
      icon={({focused, color, size}) => (
        <Icon color={color} size={size} name="bar-chart" />
      )}
    />
    <DrawerItem
      label="Limpar Banco "
      onPress={() => undefined}
      icon={({focused, color, size}) => (
        <Icon color={color} size={size} name="alert-triangle" />
      )}
    />
  </S.DrawerContainer>
);

export default CustomDrawerContent;
