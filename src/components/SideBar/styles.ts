import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(329.54deg, #4682b4 0%, #00c7c7 100%);
  width: 100%;
  height: 85px;
`;

export const PageClinic = styled.div`
  display: flex;
  align-items: center;

  aside {
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: row;
  }

  h1 {
    margin-left: 25px;
    font-size: 50px;
    font-weight: 900;
    line-height: 70px;
  }
`;

export const LinkBack = styled(Link)`
  position: absolute;
  right: 0;
  margin-right: 30px;
  top: 25px;

  margin-bottom: 25px;

  width: 35px;
  height: 35px;
  background: #96feef;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  :hover {
    background: #17d6eb;
  }
`;
