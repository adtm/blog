import { createGlobalStyle } from 'styled-components'

import CircularStd_Medium from './CircularStd-Book.woff'
import CircularStd_Bold from './CircularStd-Book.woff'

const FontIncluder = createGlobalStyle`
  @font-face {
    font-family: CircularStd-Medium;
    src: url('${CircularStd_Medium}') format('woff');
  }

  @font-face {
    font-family: CircularStd-Bold;
    src: url('${CircularStd_Bold}') format('woff');
  }
`

export default FontIncluder
