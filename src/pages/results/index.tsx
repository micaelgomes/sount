import React from 'react';
import withObservables from '@nozbe/with-observables';
import {database} from '../../database';
import Post from '../../database/models/Post';
import {Q} from '@nozbe/watermelondb';

import * as S from './styled';
import Feed from '../../components/Feed';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';

type PostPageProps = DrawerScreenProps<any> & {
  route: RouteProp<{params: {search: string}}>;
};

const Results: React.FC<PostPageProps> = ({route}) => {
  const {search} = route.params;

  const postsRepository = database.collections.get<Post>('posts');
  const postsObservable = () =>
    postsRepository
      .query(Q.where('title', Q.like(`%${Q.sanitizeLikeString(search)}%`)))
      .observe();

  const enhancePosts = withObservables([], () => ({
    posts: postsObservable(),
  }));

  const FeedEnhanceRender = enhancePosts(Feed);

  return (
    <S.Container>
      <FeedEnhanceRender from="resuls" />
    </S.Container>
  );
};

export default Results;
