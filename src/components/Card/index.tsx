import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Pressable} from 'react-native';
import withObservables from '@nozbe/with-observables';

import Post from '../../database/models/Post';
import * as S from './styled';

type CardProps = {
  post: Post;
};

const Card: React.FC<CardProps> = ({post}) => {
  const navigation = useNavigation();
  const navigatePostId = () => navigation.navigate('Post', {id: post.id});

  const handlePostLiked = () => {
    post.setLiked();
  };

  return (
    <Pressable onPress={navigatePostId}>
      <S.Container>
        <S.WrapperContent>
          <S.WrapperTitle>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <S.TitleCard numberOfLines={1}>{post.title}</S.TitleCard>
            </View>

            <S.ContentCard numberOfLines={3}>{post.content}</S.ContentCard>
          </S.WrapperTitle>

          {post.imagePath && <S.ImagePost source={{uri: post.imagePath}} />}
        </S.WrapperContent>

        <S.WrapperFooter>
          <S.WrapperInfosCard>
            <S.AuthorName>{post.author}</S.AuthorName>
            <S.Marker />
            <S.LabelTimeToRead>{post.timeToRead}</S.LabelTimeToRead>
          </S.WrapperInfosCard>

          <S.WrapperIcons>
            <S.IconBottom name="share" size={16} color="#0768B5" />
            <S.IconBottom name="pocket" size={16} color="#0768B5" />
            <Pressable onPress={handlePostLiked}>
              <S.IconBottom
                name={post.liked ? 'thumbs-down' : 'thumbs-up'}
                size={16}
                color="#0768B5"
              />
            </Pressable>
          </S.WrapperIcons>
        </S.WrapperFooter>
      </S.Container>
    </Pressable>
  );
};

const enhance = withObservables(['post'], ({post}: {post: Post}) => ({
  post,
}));

const EnhancedCard = enhance(Card);

export default EnhancedCard;
