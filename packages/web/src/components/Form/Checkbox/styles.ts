import styled from "styled-components"

export const Container = styled.label`
  width: 100%;
  height: 100%;

  display: inline-flex;

  cursor: pointer;

  align-items: center;
  justify-content: flex-start;

  user-select: none;
  pointer-events: fill;

  &:hover, &:focus {
    div {
      border-color: ${props => props.theme.colors.accent[200]};
    }
  }
`

export const Input = styled.input`
  display: none;

  &:checked ~ div {
    border-color: ${props => props.theme.colors.accent[200]};
    background: ${props => props.theme.colors.accent[200]};
    
    ::after {
      transform: scale(1);
    }
  }
`

export const Box = styled.div`
  width: 1.25em;
  height: 1.25em;

  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.gray[700]};
  background: ${props => props.theme.colors.gray[800]};

  transition: all 200ms;
  
  &::after {
    content: '\\2714';
    color: "#fff";
    transform: scale(0);
    transition: all 200ms;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;
  flex-shrink: 0;
`