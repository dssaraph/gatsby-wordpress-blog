import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareButtons from "../components/sharebuttons"

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <>
      <Layout>
      <SEO title={post.title}/>
        <p className="postDate" dangerouslySetInnerHTML={{__html: post.date}}/>
        <h1 className="postTitle" dangerouslySetInnerHTML={{__html: post.title}}/>
        <ShareButtons/>
        <div className="hrDiv"></div>
        <div dangerouslySetInnerHTML={{__html: post.content}}/>
      </Layout>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date(formatString: "MMMM DD, YYYY")
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`