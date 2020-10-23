import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'style/colors';

export const EventStyled = styled.div`
  font-size: 1.4rem;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  flex: 1 0 auto;
`;

export const EventLink = styled(Link)`
  display: block;
  padding: 10px;
  color: rgb(${Colors.RGB_BLACK});
  text-decoration: none;

  &:hover {
    background-color: #3b82ec;
    color: rgb(${Colors.RGB_WHITE});
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.3;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.54);
`;
