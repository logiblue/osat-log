import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
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
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
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
                <h2>
                  
                    <span itemProp="headline">{title}</span>
                  
                </h2>
                <small>{post.frontmatter.date}</small>
              </div>
              </Link>
            </li>
            
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogIndex

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
