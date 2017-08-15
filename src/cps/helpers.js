import React from 'react'
import PropTypes from 'prop-types'

export class ResizeHelper extends React.Component {
  static propTypes = {
    onWindowResize: PropTypes.func.isRequired,
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
    // Inverse Debouncing but always calling
    if (this.resizeTimer) clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      this.props.onWindowResize(event)
    }, 20)
  }

  render() {
    return <div />
  }
}
