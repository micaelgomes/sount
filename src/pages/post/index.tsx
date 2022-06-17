import {DrawerScreenProps} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {database} from '../../database';
import Post from '../../database/models/Post';

import * as S from './styled';

type PostPageProps = DrawerScreenProps<any> & {
  route: RouteProp<{params: {id: string}}>;
};

const PostPage: React.FC<PostPageProps> = ({route}) => {
  const {id} = route.params;
  const [post, setPost] = useState<Post>();

  const getPostById = async (postId: string) => {
    const result = await database.get<Post>('posts').find(postId);
    setPost(result);
  };

  useEffect(() => {
    getPostById(id);
  }, [id]);

  return (
    <S.Container>
      <S.TitlePost>{post?.title}</S.TitlePost>
      {post?.imagePath && <S.ImagePost source={{uri: post.imagePath}} />}
      <S.TextContent>{post?.content}</S.TextContent>
      <S.InfoPublish>Published July 5, 2021 - 8:16 pm IST</S.InfoPublish>
      <S.TextAuthorName>{`by ${post?.author}`}</S.TextAuthorName>
    </S.Container>
  );
};

export default PostPage;
