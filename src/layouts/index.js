import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { NavLink, MobileNavLink, Hamburger } from '../cps/header'
import Helmet from 'react-helmet'
import ebLogoImg from '../assets/photos/eb_logo.png'
import { ResizeHelper } from '../cps/helpers'

import './index.css'

const Header = ({ links }) =>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
    }}
  >
    <Link to="/">
      <img
        src={ebLogoImg}
        style={{
          width: 140,
          padding: 10,
          margin: 0,
        }}
        className="logo"
        alt=""
      />
    </Link>
    <div>
      {links.map(link =>
        <NavLink key={link.url} to={link.url}>
          {link.text}
        </NavLink>
      )}
    </div>
  </div>

class MobileHeader extends React.Component {
  state = { open: false }
  render() {
    let { links } = this.props
    return (
      <div className="nav">
        <div
          style={{
            backgroundColor: '#e54d42',
            color: '#fff',
            zIndex: 100,
            width: '100%',
            display: 'flex',
            height: this.state.open ? 47 * links.length : 0,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: '.5s',
          }}
        >
          {links.map(link =>
            <MobileNavLink
              key={link.url}
              to={link.url}
              onGo={() => this.setState({ open: false })}
            >
              {link.text}
            </MobileNavLink>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link to="/">
            <img
              src={ebLogoImg}
              style={{
                width: 140,
                padding: 10,
              }}
              className="logo"
              alt=""
            />
          </Link>
          <Hamburger
            open={this.state.open}
            onToggle={() => this.setState({ open: !this.state.open })}
          />
        </div>
      </div>
    )
  }
}

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
    console.log('this.getWidthLabel()', this.getWidthLabel())
    this.setState({ body: this.getWidthLabel() })
  }

  render() {
    const { children } = this.props
    const { body } = this.state
    console.log('body', body)

    const links = [
      {
        text: 'Home',
        url: '/',
      },
      {
        text: 'Meet Anna',
        url: '/meet-anna/',
      },
      {
        text: 'Practice',
        url: '/practice/',
      },
    ]

    return (
      <div>
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
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
