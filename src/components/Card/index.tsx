import React from 'react';

import * as S from './styled';

type CardProps = {
  title: string;
  content: string;
  author: string;
  timeToRead: string;
  imgPath?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  content,
  imgPath,
  author,
  timeToRead,
}) => {
  return (
    <S.Container>
      <S.WrapperContent>
        <S.WrapperTitle>
          <S.TitleCard>{title}</S.TitleCard>
          <S.ContentCard>{content}</S.ContentCard>
        </S.WrapperTitle>

        {imgPath && <S.ImagePost source={{uri: imgPath}} />}
      </S.WrapperContent>

      <S.WrapperInfosCard>
        <S.AuthorName>{author}</S.AuthorName>
        <S.Marker />
        <S.LabelTimeToRead>{timeToRead}</S.LabelTimeToRead>
      </S.WrapperInfosCard>
    </S.Container>
  );
};

export default Card;
