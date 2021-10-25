import { FC, memo } from "react"
/*  */
import { Box, Container, Input } from "./styles"

type CheckboxProps = {
  disabled?: boolean
  checked?: boolean
  name: string
  placeholder: string
}

const Checkbox: FC<CheckboxProps> = ({ disabled, checked, name, placeholder }) => {
  return (
    <Container tabIndex={0}>
      <Input
        id={name}
        name={name}
        type="checkbox"
      />

      <Box />

      <strong>{placeholder}</strong>
    </Container>
  )
}

export default memo(Checkbox)