import React from 'react';
import Card from '../../components/Card';

import * as S from './styled';

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.TitleHome>Top Stories for you</S.TitleHome>

      <Card
        title="Samsung Galaxy F22 launched in India"
        content="Samsung Galaxy F22 has been launched in India. The new smartphone has
      been priced in the mid-range segment."
        author="The Mint"
        timeToRead="15 mins ago"
      />

      <Card
        title="Samsung Galaxy F22 launched in India"
        content="Samsung Galaxy F22 has been launched in India. The new smartphone has
      been priced in the mid-range segment."
        imgPath="https://picsum.photos/200"
        author="The Mint"
        timeToRead="15 mins ago"
      />
    </S.Container>
  );
};

export default Home;
