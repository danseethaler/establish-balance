import React from 'react'
import headerImg from '../assets/photos/home_anna.jpg'
import { H2, P } from '../cps/tags'

const IndexPage = () =>
  <div>
    <img src={headerImg} alt="header" />
    <hr />
    <div
      style={{
        padding: '0 15px',
      }}
    >
      <H2>Meet Anna</H2>
      <P>
        Anna Seethaler is a certified Health and Wellness Coach in Lehi, Utah.
        She has studied over 100 dietary theories, practical lifestyle
        management techniques and innovative coaching methods at The Institute
        for Integrative Nutrition.
      </P>
      <hr />
      <H2>Real People. Real Changes.</H2>
      <P>
        <b>I came to Anna</b> nine months ago when I decided that I wanted to be
        proactive and take charge of my health as much as possible. I had no
        knowledge of how to accomplish that. I immediately sensed in Anna a
        sincere, positive and confident desire to guide me on my path to
        wellness.
      </P>
      <hr />
      <H2>Sign Up for a Free Health Consultation</H2>
      <P>
        This <b>free 30-minute session</b> includes a full discussion of your
        Health History, personalized goal setting to help you take charge of
        your health, a chance to get your questions answered about how we can
        best work together, and the opportunity to find out more about my
        personalized program completely catered toward your lifestyle and needs.
      </P>
    </div>
  </div>

export default IndexPage
