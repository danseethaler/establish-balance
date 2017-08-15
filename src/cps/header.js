import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'glamor'
import Link, { navigateTo } from 'gatsby-link'
import { colors } from '../assets/style'

const navLinkRule = css({
  padding: '10px',
  fontSize: '1.3em',
  fontWeight: '300',
  cursor: 'pointer',
  position: 'relative',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  textDecoration: 'none',
  color: colors.body,
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
    backgroundColor: colors.primary,
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
  color: colors.body,
  marginLeft: 10,
  '&::before': {
    content: '""',
    position: 'absolute',
    height: '2px',
    width: '100%',
    bottom: '0',
    left: '0',
    backgroundColor: colors.primary,
    visibility: 'visible',
    transform: 'scaleX(1)',
  },
})

const navLinkRuleCTA = css({
  backgroundColor: colors.primary,
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '1.2em',
  borderRadius: 3,
  color: colors.white,
  padding: '4px 12px',
  fontWeight: 300,
  cursor: 'pointer',
  position: 'relative',
  textDecoration: 'none',
  marginLeft: 10,
  transition: 'all 0.3s',
  opacity: 0.9,
  ':hover': {
    opacity: 1,
  },
})

export const NavLink = ({ to, children, onGo, cta }) => {
  return (
    <Link
      to={to}
      onClick={() => {
        onGo()
      }}
      exact
      className={`${cta ? navLinkRuleCTA : navLinkRule} nav-link`}
      activeClassName={cta ? '' : navLinkRuleActive.toString()}
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
  backgroundColor: colors.primary,
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
  fontSize: '1.3em',
  cursor: 'pointer',
  fontFamily: '"Lato", sans-serif',
  color: colors.white,
  marginLeft: 10,
})

export const MobileNavLink = ({ to, children, onGo }) =>
  <div
    onClick={() => {
      onGo()
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
      backgroundColor: colors.white,
      tapHighlightColor: 'rgba(0,0,0,0)',
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
