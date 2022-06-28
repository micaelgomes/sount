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

export const ContainerComments = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const WrapperComment = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleComments = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;

  color: #072d4b;
  margin-bottom: 12px;
`;

export const InputComment = styled.TextInput`
  flex: 1;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  padding: 0 5px;

  /* width: 100%; */
  color: #072d4b;
  opacity: 0.4;
`;
