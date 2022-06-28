import React from 'react';
import DrawerItem from '../DrawerItem';

import * as S from './styled';
import logoSrc from '../../assets/brand/logo.png';
import {generatePosts} from '../../fakes/post';
import {database} from '../../database';
import Post from '../../database/models/Post';
import {unsafeClearDatabase} from '../../utils/clearDatabase';

import {DrawerActions, useNavigation} from '@react-navigation/native';

const CustomDrawerContent = (props: any) => {
  const postsRepository = database.collections.get<Post>('posts');
  const navigation = useNavigation();

  const closeNavbar = () => navigation.dispatch(DrawerActions.closeDrawer());

  return (
    <S.DrawerContainer {...props}>
      <S.DrawerHeaderContainer>
        <S.ImageBrandLogo source={logoSrc} />
        <S.HeaderTitle>Aster News</S.HeaderTitle>
      </S.DrawerHeaderContainer>

      <DrawerItem
        label="Home"
        iconName="home"
        focused
        onPress={() => navigation.navigate('Home')}
      />
      <DrawerItem
        label="Around the World"
        iconName="globe"
        focused={false}
        onPress={() => undefined}
      />
      <DrawerItem
        label="Business"
        iconName="briefcase"
        focused={false}
        onPress={() => undefined}
      />
      <DrawerItem
        label="Health"
        iconName="activity"
        focused={false}
        onPress={() => undefined}
      />

      <S.DrawerDivider />

      <DrawerItem
        label="Gerar 100 Posts"
        iconName="database"
        focused={false}
        onPress={() => {
          generatePosts(100, postsRepository);
          closeNavbar();
        }}
      />
      <DrawerItem
        label="Gerar 10.000 Posts"
        iconName="database"
        focused={false}
        onPress={() => {
          generatePosts(10000, postsRepository);
          closeNavbar();
        }}
      />

      <S.DrawerDivider />

      <DrawerItem
        label="Estatísticas"
        iconName="bar-chart"
        focused={false}
        onPress={() => navigation.navigate('Analytics')}
      />
      <DrawerItem
        label="Limpar Banco"
        iconName="alert-triangle"
        focused={false}
        danger
        onPress={() => {
          unsafeClearDatabase();
          closeNavbar();
        }}
      />
    </S.DrawerContainer>
  );
};

export default CustomDrawerContent;
