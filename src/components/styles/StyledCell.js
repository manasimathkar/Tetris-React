import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  /* border-radius: 5px; */
  background: rgba(${(props) => props.color}, 1);
  border: ${(props) => (props.type === 0 ? "0px solid" : "4px solid")};
  border-bottom-color: rgba(255, 255, 255, 0.4);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.3);
`;
