import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(329.54deg, #4682b4 0%, #00c7c7 100%);
  width: 100%;
  height: 85px;
`;

export const Clinic = styled.div`
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

export const Container = styled.div`
  display: block;
  align-items: column;

  width: 100%;

  padding-top: 25px;
  padding-bottom: 10px;
`;

export const CreateCLinic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 800px;
  background: #ffff;

  margin: 0px auto 10px;

  border-radius: 30px;
  color: #000;
  //padding: 45px 60px 70px 20px;

  padding: 25px;

  h1 {
    display: block;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ButtonNome = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 20px;

  input {
    background-color: #f5f8fa;

    border-bottom: 4px solid #d3e2e5;
    border-radius: 5px;
    margin-left: 5px;
    width: 400px;
    margin-top: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  h3 {
    padding-top: 20px;
    padding-right: 280px;
    font-size: 20px;
    font-weight: bold;
  }
`;
export const DivLabel = styled.div`
  position: relative;
  display: block;

  input {
    display: block;
    padding-right: 60px;
    padding-left: 16px;
  }
`;

export const CheckButton = styled.div`
  width: 400px;
  margin-top: 35px;

  h2 {
    font-size: 33px;
    font-weight: bold;
  }

  ul {
    margin-top: 10px;
    display: block;

    li {
      margin-left: 5px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 20px;
      }

      input {
        width: 20px;
      }

      button {
        margin-top: 25px;

        line-height: 40px;
        width: 100%;

        background: green;
        color: white;

        border-radius: 50px;

        transition: background 0.2s;

        :hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
