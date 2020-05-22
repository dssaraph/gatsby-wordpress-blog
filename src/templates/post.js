import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"


class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const headerdata = this.props.data

    return (
      <>
      <Header siteTitle={headerdata.site.siteMetadata.title} />
      <Layout>
      <SEO title={post.title}/>
      <div className="homePosts">
        <h6 className="postDate" dangerouslySetInnerHTML={{__html: post.date}}/>
        <h1 className="postTitle" dangerouslySetInnerHTML={{__html: post.title}}/>
        <div className="postContent" dangerouslySetInnerHTML={{__html: post.content}}/>
      </div>
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