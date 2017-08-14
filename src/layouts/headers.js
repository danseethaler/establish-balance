import React from 'react'

import Link from 'gatsby-link'
import { NavLink, MobileNavLink, Hamburger } from '../cps/header'
import ebLogoImg from '../assets/photos/eb_logo.png'

export const Header = ({ links }) =>
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
          margin: 20,
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

export class MobileHeader extends React.Component {
  state = { open: false }

  quickClose = () => {
    this.refs._mobile_nav.style.transition = 'none'
    this.refs._mobile_nav.style.height = 0
    this.refs._mobile_nav.offsetHeight // This forces the reflow
    this.refs._mobile_nav.style.transition = '.5s'
  }

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
            height: this.state.open ? 42 * links.length : 0,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: '.5s',
          }}
          ref="_mobile_nav"
        >
          {links.map(link =>
            <MobileNavLink
              key={link.url}
              to={link.url}
              onGo={() => {
                this.quickClose()
                this.setState({ open: false })
              }}
            >
              {link.text}
            </MobileNavLink>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: 10,
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
