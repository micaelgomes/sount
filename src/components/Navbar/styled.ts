import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;

  background-color: #f4f9f8;
  padding: 0 16px 0 16px;
`;

export const WrapperBrand = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImageBrandLogo = styled.Image`
  height: 29px;
  width: 24px;
  margin-left: 8px;
`;

export const WrapperProfile = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LabelProfile = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #072d4b;
`;
