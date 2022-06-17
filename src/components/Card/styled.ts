import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 4px;
  elevation: 1;

  padding: 16px;
  margin: 8px 16px;
`;

export const WrapperContent = styled.View`
  flex-direction: row;
`;

export const WrapperTitle = styled.View`
  flex: 1;
  flex-basis: 100px;
`;

export const TitleCard = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 20px;
  color: #072d4b;

  margin-bottom: 8px;
`;

export const ContentCard = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  color: #072d4b;
  opacity: 0.6;
  margin-bottom: 16px;
`;

export const ImagePost = styled.Image`
  flex: 1;
  border-radius: 4px;
  margin-bottom: 16px;
  margin-left: 8px;
`;

export const WrapperFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperInfosCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperIcons = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
`;

export const IconBottom = styled(Icon)`
  margin-left: 16px;
  margin-right: 16px;
`;

export const AuthorName = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  color: #072d4b;
  opacity: 0.4;
`;

export const Marker = styled.View`
  width: 3px;
  height: 3px;
  border-radius: 3px;
  background: #2f9ff8;
  opacity: 0.5;
  margin-left: 8px;
  margin-right: 8px;
`;

export const LabelTimeToRead = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  color: #072d4b;
  opacity: 0.4;
`;
