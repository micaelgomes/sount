import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';

import * as S from './styled';

type CardProps = {
  id: string;
  title: string;
  content: string;
  author: string;
  timeToRead: string;
  imgPath?: string;
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  content,
  imgPath,
  author,
  timeToRead,
}) => {
  const navigation = useNavigation();
  const navigatePostId = () => navigation.navigate('Post', {id: id});

  return (
    <Pressable onPress={navigatePostId}>
      <S.Container>
        <S.WrapperContent>
          <S.WrapperTitle>
            <S.TitleCard numberOfLines={1}>{title}</S.TitleCard>
            <S.ContentCard numberOfLines={3}>{content}</S.ContentCard>
          </S.WrapperTitle>

          {imgPath && <S.ImagePost source={{uri: imgPath}} />}
        </S.WrapperContent>

        <S.WrapperFooter>
          <S.WrapperInfosCard>
            <S.AuthorName>{author}</S.AuthorName>
            <S.Marker />
            <S.LabelTimeToRead>{timeToRead}</S.LabelTimeToRead>
          </S.WrapperInfosCard>

          <S.WrapperIcons>
            <S.IconBottom name="share" size={16} color="#0768B5" />
            <S.IconBottom name="pocket" size={16} color="#0768B5" />
          </S.WrapperIcons>
        </S.WrapperFooter>
      </S.Container>
    </Pressable>
  );
};

export default Card;
