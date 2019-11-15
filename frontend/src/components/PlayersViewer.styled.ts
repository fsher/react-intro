import styled from 'styled-components';

export const Container = styled.div`
  width: 70vw;
  height: 100vh;
  
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainBox = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  
  background-color: #3F7CAC;
  border-radius: 3px;
  box-shadow: 0px 7px 23px -10px rgba(0,0,0,0.50);

  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
`;