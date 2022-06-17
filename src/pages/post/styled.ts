import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f4f9f8;
  padding: 16px;
`;

export const TitlePost = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 36px;

  color: #072d4b;
  margin-bottom: 32px;
`;

export const ImagePost = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  margin-bottom: 32px;
`;

export const TextContent = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;

  color: #072d4b;
  opacity: 0.6;
  margin-bottom: 48px;
`;

export const InfoPublish = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;

  color: #072d4b;
  opacity: 0.3;
  text-align: center;
`;

export const TextAuthorName = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;

  color: #072d4b;
  text-align: center;
`;
