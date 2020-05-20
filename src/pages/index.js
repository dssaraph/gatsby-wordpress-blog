import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <>
      <Layout>
      <SEO title="Home"/>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h3 dangerouslySetInnerHTML={{__html: node.title}}/>
            </Link>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
            <p className="postDate" dangerouslySetInnerHTML={{__html: node.date}}/>
          </div>
        ))}
      {/* </Container> */}
      </Layout>
      </>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPage(filter: {slug: {eq: "contact"}}) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

