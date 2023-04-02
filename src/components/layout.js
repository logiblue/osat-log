import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      
      <div className="main-heading">
        <Link to="/">
          <StaticImage
            className="logo"
            layout="fixed"
            formats={["auto", "webp", "avif", "svg"]}
            src="../images/logo-all.jpg"
            width={140}
            height={140}
            quality={95}
            alt="Profile picture"
          />
        </Link>
        <h2 className="main-heading-title">Karanikolas.work</h2>
      <p className="main-heading-text">I’m a web developer who loves crafting things on the web and sharing workbench knowledge. </p>
      <p className="main-heading-social">
        <div className="social-media-list">
         
            <Link to="https://github.com/logiblue" className="single-social-link"> 
                <StaticImage
                className="social-icon"
                formats={["auto", "webp", "avif", "svg"]}
                src="../images/github-mark-white.svg"
                width={33}
                height={33}
                quality={95}
                objectFit="contain"
                alt="Profile picture"
              />
              <div>
                Follow me on github            
              </div>
            </Link>
        </div>
        
      </p>


      </div>
      
      
    )
    
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="container" data-is-root-path={isRootPath}>
      <div className="sidebar">{header}</div>
      <main className="main">{children}</main>
    </div>
  )
}

export default Layout
