import React from 'react'
import headerImg from '../assets/photos/home_header.jpg'
import { H2, P } from '../cps/tags'

const PracticePage = () =>
  <div>
    <img src={headerImg} alt="header" />
    <hr />
    <div
      style={{
        padding: '0 15px',
      }}
    >
      <H2>Get Started</H2>
      <P>
        Anna Seethaler is a certified Health and Wellness Coach in Lehi, Utah.
        She has studied over 100 dietary theories, practical lifestyle
        management techniques and innovative coaching methods at The Institute
        for Integrative Nutrition.
      </P>
    </div>
  </div>

export default PracticePage
