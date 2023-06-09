import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

    header = (
      
      <div className="main-heading">
    

          <Link to="/" className="main-heading-eff">Konstantinos Karanikolas</Link>
          {/* <p className="main-heading-text">I’m a web developer who loves crafting things on the web and sharing workbench knowledge. </p> */}
          <div className="main-heading-menu">
            <Link className="main-heading-menu__link" to="/">About Me</Link>
            <Link className="main-heading-menu__link" to="/">Snippets</Link>
            <Link className="main-heading-menu__link" to="/">Projects</Link>
            <div className="social-media-list">
                <Link to="https://github.com/logiblue" className="main-heading-menu___social"> 
                    <StaticImage
                    className="social-icon"
                    formats={["auto", "webp", "avif", "svg"]}
                    src="../images/github-mark-white.svg"
                    width={25}
                    height={25}
                    quality={95}
                    objectFit="contain"
                    alt="Profile picture"
                  />
                </Link>
            </div>
        </div>
      </div>
      
      
    )
    

  

  return (
    <div className="container" data-is-root-path={isRootPath}>
      <div className="sidebar">{header}</div>
      <main className="main">{children}</main>
    </div>
  )
}

export default Layout
