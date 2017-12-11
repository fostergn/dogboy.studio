import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends React.Component {
  render() {

    const post = this.props.data.contentfulPost
    const {
      title,
      content
    } = post

    return (
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </div>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const postQuery = graphql`
  query postQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
