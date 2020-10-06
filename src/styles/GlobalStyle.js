import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --brand-main: #015565;
    --brand-cyan: #43a699;
    --brand-main-light: #88bec8;
    --brand-light: #e7eef4;
    --brand-grey: #4e5d63;
    --brand-grey-light: #70858e;
    --brand-grey-dimmed: #97abb3;

    /* Backgrounds */
    --body-background-color: var(--brand-light);
    --box-background-color: rgba(255, 255, 255, 0.2);

    /* Text Colors */
    --text-color: var(--brand-grey);
    --text-color-light: var(--brand-grey-light);
    --color-headings: var(--brand-main);

    /* Typography */
    --font-size-root: 18px;
    --font-size-base: 1rem;
    --font-size-large: 1.2rem;
    --font-size-small: 0.8rem;
    --font-size-mini: 0.7rem;
    --font-size-h1: 2.5rem;
    --font-size-h2: 2rem;
    --font-size-h3: 1.65rem;
    --font-size-h4: 1.45rem;
    --font-size-h5: var(--font-size-large);
    --font-size-h6: var(--font-size-base);
    --line-height: 1.6;
    --line-height-small: 1.1428571429;
    --font-family-base: 'ff-tisa-sans-web-pro', 'Trebuchet MS', 'Helvetica Neue',
      'Helvetica', 'Arial', 'sans-serif';
    --font-weight-base: 400;
    --font-weight-bold: 700;
    --font-family-monospace: 'Menlo', 'Monaco', 'Consolas', 'Courier New',
      'monospace';
    --font-family-headings: 'brandon-grotesque', 'Avenir Next', 'Helvetica Neue',
      'Helvetica', 'Arial', 'sans-serif';
    --font-weight-headings: 400;
    --line-height-headings: 1.1;
  }

  *,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

html {
  font-size: var(--font-size-root);
  background: var(--box-background-color);
}

body {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-base);
  font-size: var(--font-size-base);
  line-height: var(--line-height);
  text-rendering: optimizeLegibility;
  font-feature-settings: 'liga', 'kern';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  /* color: var(--text-color);
  background: var(--box-background-color); */
  color: ${({ theme }) => theme.frontColor};
  background: ${({ theme }) => theme.backgroundColor};
  transition: background 0.2s var(--easing);
}

p,
ul,
ol {
  margin: 0 0 var(--spacer);
}

/* Headings */

h1 {
  font-size: var(--font-size-h1);
}

h2 {
  font-size: var(--font-size-h2);
}

h3 {
  font-size: var(--font-size-h3);
}

h4 {
  font-size: var(--font-size-h4);
}

h5 {
  font-size: var(--font-size-h5);
}

h6 {
  font-size: var(--font-size-h6);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-family-headings);
  line-height: var(--line-height-headings);
  color: var(--color-headings);
  font-weight: var(--font-weight-headings);
  margin: 0 0 var(--spacer);
}

/* Links */
a {
  color: var(--brand-cyan);
  text-decoration: none;
  transition: 0.2s ease-out;
}

a:hover,
a:focus {
  color: #5ebeb1;
}

/* Media */
img,
video,
svg {
  max-width: 100%;
  height: auto;
  margin: 0;
}

`

export default GlobalStyle
