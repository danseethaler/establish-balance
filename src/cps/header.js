import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'glamor'
import Link, { navigateTo } from 'gatsby-link'

const navLinkRule = css({
  padding: '10px',
  fontWeight: '300',
  cursor: 'pointer',
  position: 'relative',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  textDecoration: 'none',
  color: '#000',
  marginLeft: 10,
  ':hover&::before': {
    visibility: 'visible',
    transform: 'scaleX(1)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    height: '2px',
    width: '100%',
    bottom: '0',
    left: '0',
    backgroundColor: '#e54d42',
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transition: 'all 0.3s ease-in-out 0s',
  },
})

const navLinkRuleActive = css({
  padding: '10px',
  fontWeight: '300',
  cursor: 'pointer',
  position: 'relative',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  textDecoration: 'none',
  color: '#000',
  marginLeft: 10,
  '&::before': {
    content: '""',
    position: 'absolute',
    height: '2px',
    width: '100%',
    bottom: '0',
    left: '0',
    backgroundColor: '#e54d42',
    visibility: 'visible',
    transform: 'scaleX(1)',
  },
})

export const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      exact
      className={`${navLinkRule} nav-link`}
      activeClassName={navLinkRuleActive.toString()}
    >
      {children}
    </Link>
  )
}

// make css rules
const navLineRule = css({
  display: 'block',
  marginTop: 3,
  marginLeft: 15,
  width: 30,
  height: 3,
  backgroundColor: '#e54d42',
  borderRadius: '1px',
  transition: 'all .5s ease',
})

const activeNavLineRules = [
  css({
    transform: 'translateY(6px) rotate(-50deg)',
    width: 20,
  }),
  css({
    opacity: 0,
  }),
  css({
    transform: 'translateY(-6px) rotate(50deg)',
    width: 20,
  }),
]

const mobileNavLinkRule = css({
  padding: 12,
  fontWeight: 300,
  fontSize: '1.1em',
  cursor: 'pointer',
  fontFamily: '"Lato", sans-serif',
  color: '#FFF',
  marginLeft: 10,
})

export const MobileNavLink = ({ to, children, onGo }) =>
  <div
    onClick={() => {
      onGo()
      console.log('naving')
      navigateTo(to)
    }}
    className={`${mobileNavLinkRule} nav-link`}
  >
    {children}
  </div>

export const Hamburger = ({ open, onToggle }) =>
  <button
    style={{
      border: 'none',
      height: 60,
      width: 70,
      // display: 'none',
      outline: 'none',
      backgroundColor: '#FFF',
    }}
    type="button"
    className="nav-button"
    onClick={onToggle}
  >
    <NavLine open={open} index={0} />
    <NavLine open={open} index={1} />
    <NavLine open={open} index={2} />
  </button>

Hamburger.propTypes = {
  onToggle: PropTypes.func.isRequired,
}

export const NavLine = ({ index, open }) => {
  var rules = [navLineRule]
  if (open) {
    rules.push(activeNavLineRules[index])
  }

  return <div className={`${rules.join(' ')} nav-line`} />
}
