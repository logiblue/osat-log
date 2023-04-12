import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { motion } from "framer-motion";


const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    // <Layout location={location} title={siteTitle}>
    //    Hello from bento
    // </Layout>
    <div>
        <div className="bento">
        <div className="wrapper">
        <motion.div
            className="box a"
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1  , duration:0.6}}
            transition={{  
            ease: "linear",
            duration: 0.3,
            delay:0.4
             }}
            
          
            exit={{ opacity: 0 }}
        >
                     <motion.h1 
                      initial={{ opacity: 0,  }}
                      animate={{ opacity: 1  , duration:0.5}}
                      transition={{  
                      ease: "linear",
                      duration: 0.3,
                      delay:0.4
                       }}
                   >Senior UI Designer with a passion for designing digital tools that empower people.</motion.h1>

    </motion.div>
            
            <motion.div className="box b"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1  , duration:0.3}}
             transition={{  
             ease: "linear",
             duration: 0.4,
             delay:0.3
              }}>
                <h2>Latest Notes</h2>
                <ul>
                    <li>
                        <a href="#">Creating a dashboard with Node Express and MongoDB Atlas</a>
                    </li>
                </ul>
            </motion.div>
            <motion.div  initial={{ opacity: 0,  }}
                      animate={{ opacity: 1  , duration:0.6}}
                      transition={{  
                      ease: "linear",
                      duration: 0.3,
                      delay:0.5
                       }}
                       className="box c">C</motion.div>
            <motion.div className="box d">D</motion.div>
        </div>
        </div>
    </div>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
