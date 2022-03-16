import styled from 'styled-components';

export const Container = styled.form`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.p`
  color: #ceae74;
  background-color: #fcf8e3;
  width: 375px;
  height: 25px;
  border-radius: 5px;
  padding: 25px;
  border: 1px solid #d5b985;
  font-weight: 500;
`

export const Input = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #a49186;
  margin-bottom: 10px;
  outline: 0;
  padding: 10px;
  cursor: pointer;
  &:focus{
    background-color: #e8f0fe;
  }
`

export const Button = styled.button`
  background-color: #e2799b;
  color: #FFF;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin-right: 330px;
  cursor: pointer;
`