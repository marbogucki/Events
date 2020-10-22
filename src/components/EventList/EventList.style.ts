import styled from 'styled-components';
import { breakpoints } from '../../style/breakpoints';

export const EventListStyled = styled.section`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;

  @media ${breakpoints.min.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media ${breakpoints.min.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
