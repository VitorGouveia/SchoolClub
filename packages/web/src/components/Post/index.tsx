import { FC, ReactNode } from "react"

import "./styles.scss"

type PostProps = {
  title: string
  image: string
  description: string
  children: ReactNode
}

export const Post: FC<PostProps> = ({ title, image, description }) => {
  const baseURL = `${process.env.PUBLIC_URL}/img/`
  const currentDate = Date.now()

  return (
    <section className="postContainer">
      <h1>{title}</h1>
      <article>
        <span>{currentDate}</span>
      </article>
      <figure>
        <img src={`${baseURL}${image}`} alt={image} />
        <figcaption>{description}</figcaption>
      </figure>
    </section>
  )
}