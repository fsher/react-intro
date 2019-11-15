import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  height: 100%;
  
  background-image: ${(props: { img: string }) => `url(${props.img});`};
  background-size: cover;
  background-position: center center;
  position: relative;
`;

export const InfoBlock = styled.div`
  height: 100px;
  
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0) 100%);
  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TextInfo = styled.div`
  width: 40%;
  height: 100%;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
`;

export const Level = styled.div`
  width: 100px;
  height: 100%;
  
  background-color: #202C39;
  
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-top-left-radius: 100%;
  padding: 20px 0 0 20px;
`;

export const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 2.5rem;
`;

export const Class = styled.div`
  font-size: 0.8rem;
  line-height: 1.5rem;
  
  color: #AAA;
`;