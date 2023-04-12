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
        <Link to="/" className="logo-link-element">
          {/* <StaticImage
            className="logo"
            
            formats={["auto", "webp", "avif", "svg"]}
            src="../images/holo-logo.svg"
           
            quality={100}
            alt="Profile picture"
          /> */}
          <div className="logo-container">
            {/* <span className="logo-span">code - craft - eat - fuck - sleep - repeat</span> */}
          </div>
        </Link>
        <h1 className="main-heading-eff">Konstantinos</h1>
        <h1 className="main-heading-eff">Karanikolas</h1><br></br>
        {/* <h2 className="main-heading-title">Karanikolas.work</h2> */}
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
