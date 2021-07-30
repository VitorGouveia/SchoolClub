import { FC } from "react"

import "./styles.scss"

type PostProps = {
  title: string
  image: string
  tags: string[]
}

export const Post: FC<PostProps> = ({ title, image, tags }) => {
  const currentDate = new Date().toLocaleDateString()

  return (
    <section className="postContainer">
      <h1>{title}</h1>
      <figure>
        <img src={image} alt={title} />
        <figcaption>
          {tags.map(tag => {
            return (
              <span key={tag}>
                {tag}
              </span>
            )
          })}
        </figcaption>
      </figure>
    </section>
  )
}