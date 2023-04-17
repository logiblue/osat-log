import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { motion } from "framer-motion";


const Bento = ({ data, location }) => {
const siteTitle = data.site.siteMetadata.title


const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  const handleHover = (event) => {
    const hoveredElement = event.target;
    const liElements = document.querySelectorAll('li');

    liElements.forEach((li) => {
      if (li !== hoveredElement) {
        li.classList.add('fade-link');
      }
    });
  };

  const handleLeave = () => {
    const liElements = document.querySelectorAll('li');
    liElements.forEach((li) => {
      li.classList.remove('fade-link');
    });
  };
  
  return (

    <div>
        <div className="bento">
        <div className="wrapper">
        <motion.div
            className="box a"
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1  , duration:0.2}}
            transition={{  
            ease: "easeIn",
            duration: .3,
            delay:0}}
            exit={{ opacity: 0 }}
        >
                <motion.div
                    className="homepage__header"
                    initial={{opacity:0}}
                    animate={{opacity:1, duration:0.1}}
                    transition={{
                        ease:"easeIn",
                        duration:0.1,
                        delay:0.1
                    }}
                >
                     <StaticImage
                        className="bio-avatar"
                        layout="fixed"
                        formats={["auto", "webp", "avif"]}
                        src="../images/holo-logo.svg"
                        width={150}
                        height={150}
                        quality={95}
                        alt="Profile picture"
                    />
                    
                </motion.div>
                     <motion.h1 
                      initial={{ opacity: 0,  }}
                      animate={{ opacity: 1  , duration:0.5}}
                      transition={{  
                      ease: "linear",
                      duration: 0.3,
                      delay:0.2
                       }}
                    >
                        I’m a web developer who loves crafting things on the web and sharing workbench knowledge. Feel free to check my blog and latest projects.
                     </motion.h1>

        </motion.div>
            
            <motion.div className="box b"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1  , duration:0.11}}
             transition={{  
             ease: "easeIn",
             duration: 0.2,
             delay:0.3
              }}>
                <h2>Latest Notes</h2>
                
                
    <ul className="post-list" style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
          
            <li
              key={post.fields.slug}
              className="post-single"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
                <Link
                  className="post-single-link"
                  to={post.fields.slug}
                  itemProp="url"
                >
              <div
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1  , duration:0.11}}
               >
                  
                    <span itemProp="headline">{title}</span>
                  
                </motion.h3>
                <small>{post.frontmatter.date}</small>
              </div>
              </Link>
            </li>
            
          )
        })}
      </ul>
            </motion.div>
            <motion.div  initial={{ opacity: 0,  }}
                      animate={{ opacity: 1  , duration:0.6}}
                      transition={{  
                      ease: "easeIn",
                      duration: 0.3,
                      delay:0.5
                       }}
                       className="box c">
                        <motion.h3>Heading without Meaning as always</motion.h3>

                       </motion.div>
            <motion.div 
             className="box d"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1  , duration:0.2}}
                transition={{  
                ease: "easeIn",
                duration: 0.4,
                delay:0.3
              }}>
                                        <motion.h3>Heading without Meaning as always</motion.h3>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

</p>
            </motion.div>
        </div>
        </div>
    </div>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default Bento

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`