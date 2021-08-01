import { FC } from "react"

import "./styles.scss"

type PostProps = {
  title: string
  image: string
  tags: string[]
}

export const Post: FC<PostProps> = ({ title, image, tags }) => {
  /** Removes glyphs, put dash between the spaces, lowercase */
  const titleURL = title.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  
  const handleRedirect = () => window.location.href = `/${titleURL}`
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
            if(tag === "🇧🇷") {
              return (
                <span key={tag}>
                  {tag}
                </span>
              )
            }

            return (
              <span key={tag}>
                {`#${tag}`}
              </span>
            )
          })}
        </figcaption>
      </figure>
    </section>
  )
}