import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import withObservables from '@nozbe/with-observables';

import {database} from '../../database';
import Post from '../../database/models/Post';

import * as S from './styled';
import {where} from '@nozbe/watermelondb/QueryDescription';
import Comment from '../../database/models/Comment';

type PostPageProps = DrawerScreenProps<any> & {
  post: Post;
  comments: Comment[];
};

const PostPage: React.FC<PostPageProps> = ({post, comments}) => {
  const [comment, setComment] = useState('');

  const handleAddComment = async () => {
    await post
      .addComment(comment)
      .then(() => setComment(''))
      .catch(error => console.log('Erro: ', error));
  };

  return (
    <S.Container>
      <S.TitlePost>{post?.title}</S.TitlePost>
      {post?.imagePath && <S.ImagePost source={{uri: post.imagePath}} />}
      <S.TextContent>{post?.content}</S.TextContent>
      <S.ContainerComments>
        <S.TitleComments>Comentários</S.TitleComments>
        {comments.map(item => (
          <S.TextComment>{item.body}</S.TextComment>
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
  ({route}: {route: RouteProp<{params: {id: string}}>}) => {
    const postsRepository = database.get<Post>('posts');
    const commentsRepository = database.get<Comment>('comments');
    return {
      post: postsRepository.findAndObserve(route.params.id),
      comments: commentsRepository
        .query(where('post_id', route.params.id))
        .observe(),
    };
  },
);

const EnhancedPostPage = enhance(PostPage);

export default EnhancedPostPage;
