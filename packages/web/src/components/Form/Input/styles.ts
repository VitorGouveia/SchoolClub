import styled, { css } from "styled-components"

type ContainerProps = {
  gridArea: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;

  grid-area: ${props => props.gridArea};

  [data-type="icon"] {
    display: grid;
    place-items: center;
  }

  &:first-child {
    margin: 0;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 8px;

  small {
    font-size: 11px;
    line-height: 13px;
    margin-left: 8px;
  }

  label {
    display: block;
    color: ${props => props.theme.colors.gray[50]};
    font-size: 14px;
    font-weight: 600;
  }
`

type InputProps = {
  isFocused: boolean
  isErrored: boolean
}

export const InputContainer = styled.span<InputProps>`
  display: flex;
  align-items: center;
  height: 42px;
  border-radius: 4px;
  background: ${props => props.theme.colors.gray[800]};
  border: 1px solid ${props => props.theme.colors.gray[700]};
  transition: border 0.2s;
  
  svg {
    color: ${props => props.theme.colors.gray[700]} !important;
    margin-left: 10px;
    
    &:last-child {
      color: ${props => props.theme.colors.red};
    }
  }

  ${props => props.isErrored && css`
    border-color: ${props.theme.colors.red};
  `}

  ${props => props.isFocused && css`
    border-color: ${props => props.theme.colors.accent[200]};
    outline: 0;
  `}
`

export const Input = styled.input`
  padding: 0 10px;
  
  width: 100%;
  height: 100%;

  border: 0;
  background: transparent;
  color: ${props => props.theme.colors.gray[50]};

  ::placeholder {
    color: #41414D;
  }

  &:disabled {
    cursor: not-allowed;
    color: #41414D;
  }
`