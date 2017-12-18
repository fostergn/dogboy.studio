import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import './markdown.css';

const propTypes = {
  data: PropTypes.object.isRequired,
}

const PageTemplate = ({data}) => {

  const {
    title,
    content,
    footNotes
  } = data.contentfulPage;

  const footNotesList = footNotes ? footNotes.map(note =>  (
    <li className="footnotes__list-item">{note}</li>
  )) : [];

  return (
    <main className="main--page">
      <div className="content__left">
        <h1 className="content__title">{title}</h1>
        <ol className="footnotes__list">
          {footNotesList}
        </ol>
      </div>
      <div
        className="content content__right content--markdown markdown-body"
        dangerouslySetInnerHTML={{
          __html: content.childMarkdownRemark.html,
        }}
      />
    </main>
  )
}

PageTemplate.propTypes = propTypes

export default PageTemplate

export const singlePageQuery = graphql`
  query singlePageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
