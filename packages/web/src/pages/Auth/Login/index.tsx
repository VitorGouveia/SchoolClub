import { FC, memo } from "react"
import { Lock, Mail } from "react-feather"
import { useForm } from "react-hook-form"
/*  */
import { Checkbox, Input, Link, Logo } from "../../../components"
import { useClamp } from "../../../hooks"
import { Container, Description, ForgotPassword, Form, ImageContainer, KeepLogged, LogoContainer, Title } from "./styles"

type LoginProps = {

}

const Login: FC = () => {
  const { handleSubmit } = useForm()

  const handleLogin = ({}: LoginProps) => {
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <LogoContainer>
          <Logo variant="img" />
        </LogoContainer>

        <Title>
          <strong>Log In</strong>
        </Title>

        <Description>
          <p>to access the latest in courses</p>
        </Description>

        <Input noLabel Icon={() => <Mail strokeWidth={3} size={14} />} gridArea="email" name="E-mail" placeholder="Insert your e-mail" />
        <Input noLabel Icon={() => <Lock strokeWidth={3} size={14} />} gridArea="password" name="Password" placeholder="Insert a password" />

        <ForgotPassword fontSize={useClamp("0.5rem", "1rem")}>
          <Link href="/password" name="forgot-password">
            Forgot your password?
          </Link>
        </ForgotPassword>

        <KeepLogged>
          <Checkbox name="keep" placeholder="Keep me logged in" />
        </KeepLogged>
      </Form>

      <ImageContainer>
        <img src="" alt="" />
      </ImageContainer>
    </Container>
  )
}

export default memo(Login)