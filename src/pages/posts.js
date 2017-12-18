import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import moment from 'moment'

export default ({ data }) => {

  const { edges } = data.allContentfulPost

  const nodeList = edges.map(edge => {

    return (
      <Link key={edge.node.id} to={`/posts/${edge.node.id}`}>
        <div className="post__list-item">
          <div className="post__image">
            <img src={edge.node.previewImage.responsiveResolution.src}
              srcSet={edge.node.previewImage.responsiveResolution.srcSet} />
          </div>
          <div className="post__title">
            {edge.node.title}
          </div>
        </div>
      </Link>
    )
  });

  return (
    <main className="main--page">
      <ul className="posts__list">
        {nodeList}
      </ul>
    </main>
  )
}

export const postQuery = graphql`
  query postQuery {
    allContentfulPost {
      edges {
        node {
          title
          id
          createdAt
          previewImage {
            responsiveResolution(width:300) {
              width
              height
              src
              srcSet
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`
