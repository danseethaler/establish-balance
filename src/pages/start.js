import React from 'react'
import Link from 'gatsby-link'
import { H2, P } from '../cps/tags.js'

const SecondPage = () =>
  <div>
    <H2>Get Started!</H2>
    <P>It's going to be a great ride!</P>
    <Link to="/">Go back to the homepage</Link>
  </div>

export default SecondPage
