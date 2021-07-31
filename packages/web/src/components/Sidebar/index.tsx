import { Link } from "react-router-dom"

import "./styles.scss";

type SidebarProps = {
  user: {
    name: string
    profile: string
    description: string

    page: {
      link: string
      text: string
    }
  }

  ad: {
    description: string
    phrase: string
    
    page: {
      link: string
      text: string
    }
  }
}
export const Sidebar = ({ user, ad }: SidebarProps) => {
  const { name, profile, page, description } = user
  return (
    <aside>
      <div id="user">
        <header id="profile">
          <div className="profile-img" />

          <p>{name}</p>
          <small>{profile}</small>
        </header>

        <main>
          <p>{description}</p>
        </main>

        <footer>
          <Link to={`/${page.link}`}>
            {page.text}
          </Link>
        </footer>
      </div>

      <div id="ad">
        <header />

        <main>
          <h4><strong>{ad.description}</strong></h4>
          <small>{ad.phrase}</small>
          <Link to={`/${ad.page.link}`}>
            {ad.page.text}
          </Link>
        </main>
      </div>
    </aside>
  )
}