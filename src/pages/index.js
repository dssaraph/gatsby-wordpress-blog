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
            <p dangerouslySetInnerHTML={{__html: node.date}}/>
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

      {/* <Navbar className="justify-content-center">
        <Navbar.Brand href="/">
          <img
            src="./logo.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Nav.Link href={node.slug}><h3>{node.title}</h3></Nav.Link>
            </div>
          ))}
        </Nav>
        </Navbar.Collapse>
      </Navbar> */}