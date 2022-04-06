import {DrawerContentScrollView} from '@react-navigation/drawer';
import styled from 'styled-components/native';

export const DrawerContainer = styled(DrawerContentScrollView)`
  background-color: #f4f9f8;
  margin: 8px 0;
`;

export const DrawerHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px;
  margin-bottom: 32px;
`;

export const DrawerDivider = styled.View`
  background-color: #072d4b;
  width: 100%;
  height: 1px;
  opacity: 0.6;

  margin: 8px 0;
`;

export const ImageBrandLogo = styled.Image`
  width: 30px;
  height: 35px;
  margin-right: 16px;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #0768b5;
`;
