import { FC, memo, useCallback, useState } from "react"
import { AlertCircle, Icon } from "react-feather"
/*  */
import { Container, Input as InputElement, InputContainer, TitleContainer } from "./styles"

type InputProps = {
  name: string
  placeholder: string
  Icon?: Icon
  hint?: string
  gridArea?: string
  noLabel?: boolean
}

const Input: FC<InputProps> = ({ name, placeholder, hint, gridArea, Icon, noLabel }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isErrored, setIsErrored] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <Container gridArea={gridArea || ""}>
      {!noLabel && (
        <TitleContainer>
          <label htmlFor={name}>{name}</label>
          {hint && <small>{hint}</small>}
        </TitleContainer>
      )}

      <InputContainer
        isErrored={!!isErrored}
        isFocused={isFocused}
        onFocus={handleInputFocus}
      >
        {!!Icon && (
          <label data-type="icon" htmlFor={name}>
            <Icon />
          </label>
        )}

        <InputElement
          id={name}
          placeholder={placeholder}
          onBlur={handleInputBlur}
        />

        {!!isErrored && <AlertCircle />}
      </InputContainer>
    </Container>
  )
}

export default memo(Input)