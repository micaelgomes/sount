import React, {useState} from 'react';
import * as S from './styled';
import Icon from 'react-native-vector-icons/Feather';

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
          <Icon
            name="menu"
            size={20}
            color="#072D4B"
            style={{marginRight: 8}}
          />
        </Pressable>

        <S.ImageBrandLogo source={logoSrc} />
      </S.WrapperBrand>
      <S.WrapperProfile>
        <Icon
          name="search"
          size={20}
          color="#072D4B"
          style={{marginRight: 8}}
        />
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
