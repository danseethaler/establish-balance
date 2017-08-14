import glamorous from 'glamorous'

export const Container = glamorous.div({
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media (min-width: 768px)': {
    padding: '0 15px',
    width: '750px',
  },
  '@media (min-width: 992px)': {
    width: '970px',
  },
  '@media (min-width: 1200px)': {
    width: '1170px',
  },
})

export const H2 = glamorous.h2({
  borderLeft: '3px solid #4a2245',
  paddingLeft: 9,
  left: -13,
  position: 'relative',
  margin: '10px 10px 20px 9px',
  fontFamily: '"Roboto", sans-serif',
  fontSize: '23px',
  color: '#555459',
  fontWeight: 400,
  lineHeight: 1.1,
})

export const P = glamorous.p({
  lineHeight: '1.6',
  fontWeight: '300',
  fontSize: '1.2em',
  fontFamily: '"Lato", sans-serif',
  color: '#555459',
  margin: '0 0 10px',
})
