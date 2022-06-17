import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const FeedAnimationContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Animation = styled(LottieView)`
  width: 100%;
  height: 300px;
  margin-top: 50px;
`;

export const TitleHome = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #072d4b;
  margin: 16px;
`;

export const TitleNoContent = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 14px;
  line-height: 23px;
  max-width: 300px;
  text-align: center;

  color: #072d4b;
  margin: 16px;
`;
