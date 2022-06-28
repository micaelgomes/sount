import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import withObservables from '@nozbe/with-observables';

import {database} from '../../database';
import Post from '../../database/models/Post';
import Comment from '../../database/models/Comment';

import * as S from './styled';

type PostPageProps = DrawerScreenProps<any> & {
  post: Post;
};

const PostPage: React.FC<PostPageProps> = ({post}) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState<Comment[]>([]);

  const getComments = async () => {
    const res = await database.get<Comment>('comments').query().fetch();
    setCommentsList(res);
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleAddComment = async () => {
    await database
      .get<Comment>('comments')
      .create(newComment => {
        newComment.body = comment;
        newComment.post = post;
      })
      .then(() => setComment(''));
  };

  return (
    <S.Container>
      <S.TitlePost>{post?.title}</S.TitlePost>
      {post?.imagePath && <S.ImagePost source={{uri: post.imagePath}} />}
      <S.TextContent>{post?.content}</S.TextContent>
      <S.ContainerComments>
        <S.TitleComments>Comentários</S.TitleComments>
        {commentsList.map(item => (
          <S.TextContent>{item.body}</S.TextContent>
        ))}
        <S.WrapperComment>
          <S.InputComment
            value={comment}
            onChangeText={setComment}
            placeholder="Escreva seu comentário"
            placeholderTextColor={'#072d4b'}
          />
          <Pressable onPress={handleAddComment}>
            <Icon name="plus-square" size={24} color="#0768B5" />
          </Pressable>
        </S.WrapperComment>
      </S.ContainerComments>

      <S.InfoPublish>Published July 5, 2021 - 8:16 pm IST</S.InfoPublish>
      <S.TextAuthorName>{`by ${post?.author}`}</S.TextAuthorName>
    </S.Container>
  );
};

const enhance = withObservables(
  ['route'],
  ({route}: {route: RouteProp<{params: {id: string}}>}) => ({
    post: database.get<Post>('posts').findAndObserve(route.params.id),
  }),
);

const EnhancedPostPage = enhance(PostPage);

export default EnhancedPostPage;
