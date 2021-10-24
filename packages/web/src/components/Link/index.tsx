import { AnchorHTMLAttributes, FC, memo } from "react"
import { Link as Anchor } from "react-router-dom"

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string
  href: string
}

const Link: FC<LinkProps> = ({ children, name, href, ...rest }) => {
  return (
    <Anchor 
      to={href}
      href={href}
      {...rest}
      aria-label={name}
      rel="noopener noreferrer"
      data-reset
    >
      {children}
    </Anchor>
  )
}

export default memo(Link)