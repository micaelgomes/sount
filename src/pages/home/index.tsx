import React from 'react';
import withObservables from '@nozbe/with-observables';
import {database} from '../../database';
import Post from '../../database/models/Post';

import * as S from './styled';
import Feed from '../../components/Feed';

const Home: React.FC = () => {
  const postsRepository = database.collections.get<Post>('posts');
  const postsObservable = () => postsRepository.query().observe();

  const enhancePosts = withObservables([], () => ({
    posts: postsObservable(),
  }));

  const FeedEnhanceRender = enhancePosts(Feed);

  return (
    <S.Container>
      <FeedEnhanceRender />
    </S.Container>
  );
};

export default Home;
