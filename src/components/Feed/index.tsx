import React from 'react';
import {FlatList} from 'react-native';
import Post from '../../database/models/Post';
import Card from '../Card';

import * as S from './styled';

type FeedProps = {
  posts: Post[];
  from?: 'home' | 'resuls';
};

const Feed: React.FC<FeedProps> = ({posts, from = 'home'}) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      scrollEnabled
      ListHeaderComponent={() => {
        if (posts.length) {
          return from === 'home' ? (
            <S.TitleHome>Top Stories for you</S.TitleHome>
          ) : (
            <S.TitleHome>{`${posts.length} results for you`}</S.TitleHome>
          );
        }

        return <></>;
      }}
      renderItem={({item}) => (
        <Card
          id={item.id}
          title={item.title}
          content={item.content}
          author={item.author}
          timeToRead={`${item.timeToRead} mins ago`}
          imgPath={item.imagePath}
        />
      )}
      ListEmptyComponent={() => (
        <S.FeedAnimationContainer>
          <S.Animation
            source={require('../../res/lottie/news.json')}
            autoPlay
            loop
          />
          <S.TitleNoContent>
            Você não possui notícias carregadas no momento. Acesse o menu para
            carrega-las.
          </S.TitleNoContent>
        </S.FeedAnimationContainer>
      )}
    />
  );
};

export default Feed;
