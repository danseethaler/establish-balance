import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ResizeHelper } from '../cps/helpers'
import { Container } from '../cps/tags'
import { Header, MobileHeader } from './headers'

import './index.css'
import '../assets/fonts/Roboto.css'
import '../assets/fonts/Lato.css'

class TemplateWrapper extends React.Component {
  state = { body: this.getWidthLabel() }

  getWidthLabel() {
    if (typeof window === 'undefined') return 'phone'

    if (window.innerWidth < 768) return 'phone'
    else if (window.innerWidth < 992) return 'tablet'
    else if (window.innerWidth < 1200) return 'desktop'
    return 'large'
  }
  setBodyWidth = () => {
    this.setState({ body: this.getWidthLabel() })
  }

  render() {
    const { children } = this.props
    const { body } = this.state

    const links = [
      {
        text: 'Home',
        url: '/',
      },
      {
        text: 'Meet Anna',
        url: '/meet-anna',
      },
      {
        text: 'Practice',
        url: '/practice',
      },
      {
        text: 'Get Started',
        url: '/start',
      },
    ]

    return (
      <Container>
        <ResizeHelper onWindowResize={this.setBodyWidth} />
        <Helmet
          title="Establish Balance"
          meta={[
            {
              name: 'description',
              content: 'Anna Seethaler is a healthcoach.',
            },
            { name: 'keywords', content: 'heatlh, coaching' },
          ]}
        />
        {body === 'phone'
          ? <MobileHeader links={links} />
          : <Header links={links} />}
        {children()}
      </Container>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
