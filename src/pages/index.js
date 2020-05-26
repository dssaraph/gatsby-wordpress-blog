import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaFacebookSquare, FaQuora, FaEnvelope } from 'react-icons/fa';

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <>
      <Layout>
      <SEO title="Home"/>
      <Link to="/">
      <figure id="logo" className="active" />
      </Link>
      <div className="siteOwner">
      <Link to="/">
        <h3 dangerouslySetInnerHTML={{__html: data.site.siteMetadata.title.toUpperCase()}} />
      </Link>
      <p className="siteDescription" dangerouslySetInnerHTML={{__html: data.site.siteMetadata.description}} />
      <div className="socialButtons">
        <ul className="socialLinks">
          <li>
            <a href="https://www.quora.com/profile/Apoorva-Bhide"><FaQuora className="faSocial"/></a>
          </li>
          <li>
            <a href="https://www.facebook.com/apoorv.bhide.3"><FaFacebookSquare className="faSocial"/></a>
          </li>
          <li>
          <a href="mailto:email@domain.com"><FaEnvelope className="faSocial"/></a>
          </li> 
        </ul>
      </div>
      </div>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div className="homePosts" key={node.slug}>
            <Link to={node.slug}>
              <h6 className="homePostDate" dangerouslySetInnerHTML={{__html: node.date}}/>
              <h3 className="homePostTitle" dangerouslySetInnerHTML={{__html: node.title}}/>
              <p className="postExcerpt"  dangerouslySetInnerHTML={{__html: node.excerpt}}/>
              <p className="hideThis"  dangerouslySetInnerHTML={{__html: node.id}}/>
            </Link>
            <Link to={node.slug}>
              <button className="continueReading">Continue reading</button>
            </Link>
            <hr className="articleSplit"/>
          </div>
        ))}
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
        description
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMM DD, YYYY")
          id
        }
      }
    }
  }
`

