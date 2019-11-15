import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: calc(4 / 3 * 100%);
  position: relative;
  
  background-image: ${(props: { img: string }) => `url(${props.img});`};
  background-size: cover;
  background-position: center center;
  
  margin-bottom: 10px;
  
  border: 2px solid #FFF275;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const AbstractLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;  
  z-index: 2;
`;

export const Name = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20%;
  
  color: #FFF275;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

