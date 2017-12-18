import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import '../templates/markdown.css';

export default ({ data }) => {

  const { siteTitle, description, images } = data.contentfulLandingPage;

  const numberOfImages = images.length;

  const randomIndex = Math.floor(Math.random() * numberOfImages);

  const imageUrl = images[randomIndex].file.url;

  return (
    <main>
      <section className="section section--left">
        <div className="image__wrapper">
          <img src={imageUrl} />
        </div>
      </section>
      <section className="section section--right">
          <article className="section__content markdown-body"
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
            >
          </article>
      </section>
    </main>
  )
}

export const landingPageQuery = graphql`
  query landingPageQuery {
    contentfulLandingPage {
      siteTitle
      description {
        childMarkdownRemark {
          html
        }
      },
      images {
        file {
          url
        }
      }
    }
  }
`
