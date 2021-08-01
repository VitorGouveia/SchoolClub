import { FC } from "react"

import "./styles.scss"

type Tags = {
  id: number
  name: string | "🇧🇷"
}

type PostProps = {
  title: string
  image: string
  tags: Tags[] | string[]
}

export const Post: FC<PostProps> = ({ title, image, tags }) => {
  /** Removes glyphs, put dash between the spaces, lowercase */
  const titleURL = title.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  
  const handleRedirect = () => window.location.href = `/post/${titleURL}`
  return (
    <section onClick={() => handleRedirect()} className="postContainer">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <hr />
      <img src={image} alt={title} />
      <figure>
        <figcaption>
          {tags.map(tag => {
            if(tag.name === "") {
              return (
                <span key={tag.id}>
                  {tag.name}
                </span>
              )
            }

            if(tag.name === "🇧🇷") {
              return (
                <span key={tag.id}>
                  {tag.name}
                </span>
              )
            }

            return (
              <span key={tag.id}>
                {`#${tag.name}`}
              </span>
            )
          })}
        </figcaption>
      </figure>
    </section>
  )
}