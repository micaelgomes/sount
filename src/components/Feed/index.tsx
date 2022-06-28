import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {database} from '../../database';
import Post from '../../database/models/Post';
import EnhancedCard from '../Card';

import * as S from './styled';

type FeedProps = {
  posts: Post[];
  from?: 'home' | 'resuls';
};

const Feed: React.FC<FeedProps> = ({posts, from = 'home'}) => {
  const [listToExclude, setListToExclude] = useState<string[]>([]);

  const handleSelectionToExclude = (id: string) => {
    if (!listToExclude.includes(id)) {
      setListToExclude([...listToExclude, id]);
    }
  };

  const handleDeleting = async () => {
    const postsRepository = await database.collections
      .get<Post>('posts')
      .query()
      .fetch();
    const deletedPosts = postsRepository
      .filter(post => listToExclude.includes(post.id))
      .map(post => post.prepareMarkAsDeleted());
    database.write(async () => {
      await database
        .batch(...deletedPosts)
        .catch(error => console.log('Erro: ', error));
    });
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      scrollEnabled
      ListHeaderComponent={() => {
        if (posts.length) {
          return from === 'home' ? (
            <S.WrapperTitle>
              <S.TitleHome>Top Stories for you</S.TitleHome>
              {listToExclude.length > 0 && (
                <Icon
                  name="trash-2"
                  size={20}
                  color="#F00"
                  onPress={handleDeleting}
                />
              )}
            </S.WrapperTitle>
          ) : (
            <S.TitleHome>{`${posts.length} results for you`}</S.TitleHome>
          );
        }

        return <></>;
      }}
      renderItem={({item}) => (
        <S.WrapperCard>
          <EnhancedCard post={item} />
          <S.FeedCardIcon
            name="x"
            size={16}
            color={listToExclude.includes(item.id) ? '#F00' : '#000'}
            onPress={() => handleSelectionToExclude(item.id)}
          />
        </S.WrapperCard>
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
