import React from 'react'
import PropTypes from 'prop-types'

export class ResizeHelper extends React.Component {
  static propTypes = {
    onWindowResize: PropTypes.func,
  }

  componentDidMount() {
    if (this.props.onWindowResize) {
      window.addEventListener('resize', this.handleResize)
    }
  }

  componentWillUnmount() {
    if (this.props.onWindowResize) {
      window.removeEventListener('resize', this.handleResize)
    }
  }

  handleResize = event => {
    if ('function' === typeof this.props.onWindowResize) {
      // we want this to fire immediately the first time but wait to fire again
      // that way when you hit a break it happens fast and only lags if you hit another break immediately
      if (!this.resizeTimer) {
        this.props.onWindowResize(event)
        this.resizeTimer = setTimeout(() => {
          this.resizeTimer = false
        }, 250) // this debounce rate could be passed as a prop
      }
    }
  }

  render() {
    return <div />
  }
}
