import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#000")};
  background: white;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  text-align: center;
`;
