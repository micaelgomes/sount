import React, {useState} from 'react';
import * as S from './styled';

import logoSrc from '../../assets/brand/logo.png';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';

const Navbar: React.FC = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [search, setSearch] = useState('');

  const navigation = useNavigation();
  const toogleNavbar = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <S.Container>
      <S.WrapperBrand>
        <Pressable onPress={toogleNavbar}>
          <S.NavbarIcon name="menu" size={20} color="#072D4B" />
        </Pressable>

        <S.ImageBrandLogo source={logoSrc} />
      </S.WrapperBrand>
      <S.WrapperProfile>
        <S.NavbarIcon name="search" size={20} color="#072D4B" />
        <S.LabelProfile
          value={search}
          onChangeText={text => setSearch(text)}
          focus={isFocus}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onSubmitEditing={() => {
            navigation.navigate('Results', {search});
            setSearch('');
          }}
          placeholder="Buscar"
          placeholderTextColor="#072d4b"
        />
      </S.WrapperProfile>
    </S.Container>
  );
};

export default Navbar;
