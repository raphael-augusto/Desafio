import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  align-items: column;

  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Clinic = styled.div`
  width: 800px;
  background: #ffff;
  border: 4px solid #d3e2e5;

  margin: 0px auto 10px;

  border-radius: 30px;
  color: #000;
  //padding: 45px 60px 70px 20px;

  padding: 25px;

  p {
    padding: 2px;
  }

  span {
    line-height: 25px;
    font-size: 20px;
    padding-top: 5px;
    border-left: 15px solid #d3e2e5;
    padding-left: 5px;
  }

  h1 {
    display: block;
    font-size: 20px;
    font-weight: bold;
    border-left: 15px solid #4682b4;
    padding-left: 5px;
    border-radius: 5px;
    background: linear-gradient(329.54deg, #4682b4 0%, #00c7c7 100%);
  }
`;
