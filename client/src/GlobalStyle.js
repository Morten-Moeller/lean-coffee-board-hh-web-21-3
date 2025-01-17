import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
   box-sizing: border-box
 }

 body {
   margin: 0;
   font-family: sans-serif;
   font-size: 112.5%;
   line-height: 1.4;
 }

:Root {
  --color-black: #333;
  --color-shadow: rgba(0,0,0,0.25);
}


`
