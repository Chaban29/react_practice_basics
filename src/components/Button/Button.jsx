import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  border: 2px solid #f3f5f9;
  border-radius: 12px;
  background: skyblue;
  color: ${(props) => props.color || "#fff"};
  cursor: pointer;
  font-weight: 700;
  margin-top: 10px;
`;

export default function Button({ children, onClick }) {
  // console.log("Button Component Render");
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
