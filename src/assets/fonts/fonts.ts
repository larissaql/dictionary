import { createGlobalStyle } from 'styled-components'
import ItalicFont from './RobotoMono-LightItalic.ttf'
import BoldFont from './Trispace_SemiExpanded-Bold.ttf'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'italic';
        src: url(${ItalicFont});
    }

    @font-face {
        font-family: 'bold';
        src: url(${BoldFont});
    }
`

export default FontStyles
