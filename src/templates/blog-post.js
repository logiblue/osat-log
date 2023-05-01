import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  // function highlightActiveTOCItem() {
  //   const headings = document.querySelectorAll('h1, h2');
  //   const tocItems = document.querySelectorAll('.table-of-contents a');
  
  //   window.addEventListener('scroll', () => {
  //     const scrollPosition = window.scrollY;
  
  //     // Find the current heading in view
  //     let currentHeading = null;
  //     for (let i = headings.length - 1; i >= 0; i--) {
  //       const heading = headings[i];
  //       const rect = heading.getBoundingClientRect();
  
  //       if (rect.top <= 0) {
  //         currentHeading = heading;
  //         break;
  //       }
  //     }
  
  //     // Find the corresponding table of contents item and highlight it
  //     if (currentHeading) {
  //       const currentTocItem = Array.from(tocItems).find((tocItem) =>
  //         tocItem.href.endsWith(`#${currentHeading.id}`)
  //       );
  
  //       if (currentTocItem) {
  //         tocItems.forEach((tocItem) => {
  //           tocItem.classList.toggle('active', tocItem === currentTocItem);
  //         });
  //       }
  //     }
  //   });
  // }
  

  function highlightActiveTOCItem() {
    const headings = document.querySelectorAll(' h2, h3');
    const tocItems = document.querySelectorAll('.table-of-contents a');
  
    const findCurrentHeading = () => {
      let currentHeading = null;
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const rect = heading.getBoundingClientRect();
  
        if (rect.top <= window.innerHeight * 0.25) {
          currentHeading = heading;
          break;
        }
      }
      return currentHeading;
    }
  
    const updateActiveTOCItem = () => {
      const currentHeading = findCurrentHeading();
      if (currentHeading) {
        const currentTocItem = Array.from(tocItems).find((tocItem) =>
          tocItem.href.endsWith(`#${currentHeading.id}`)
        );
        if (currentTocItem) {
          tocItems.forEach((tocItem) => {
            tocItem.classList.toggle('active', tocItem === currentTocItem);
          });
        }
      }
    }
  
    window.addEventListener('scroll', () => {
      updateActiveTOCItem();
    });
    updateActiveTOCItem();
  }
  
  
  const siteTitle = site.siteMetadata?.title || `Title`

  React.useEffect(() => {
    highlightActiveTOCItem();

    const tableOfContents = document.querySelector(".table-of-contents")
    const sidebar = document.querySelector(".article-sidebar")
    if (tableOfContents && sidebar) {
      sidebar.appendChild(tableOfContents)
    }
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 className="article-body-title" itemProp="headline">{post.frontmatter.title}</h1>
          <date>{post.frontmatter.date}</date>
        </header>
        <section className="article-container">
        <div className="article-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        ></div>
        <div className="article-sidebar">
          <p>q</p>
        </div>
        </section>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
  
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
