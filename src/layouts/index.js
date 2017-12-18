import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from './nav'

import './index.css'

const Header = () => (
    <div className="logo__wrapper">
      <Link to="/">
        <h1 className="logo__title">
          Studio Dog Boy
        </h1>
      </Link>
    </div>
)

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Studio Dog Boy"
      meta={[
        { name: 'description', content: 'Studio Dog Boy presents Dog Days, a community simulation game.' },
        { name: 'keywords', content: 'game, video game, simulation, interactive, online, virtual game' },
      ]}
    />
    <Header />
    <Nav data={data} />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query MenuQuery {
    contentfulMenu {
      menu {
        main {
          url,
          text
        }
        secondary {
          url,
          text,
          external
        }
      }
    }
  }
`
