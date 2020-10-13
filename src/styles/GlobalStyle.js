import { createGlobalStyle } from 'styled-components'
// import { TransitionStyles } from '@styles'
import TransitionStyles from './TransitionStyles'
import { media } from '@styles'

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --brand-main: #015565;
    --brand-cyan: #43a699;
    --brand-main-light: #88bec8;
    --brand-light: #e7eef4;
    --brand-dark: #1d2224;
    --brand-grey: #4e5d63;
    --brand-grey-light: #70858e;
    --brand-grey-dimmed: #97abb3;
    --dark: #121516;
    --pink: pink;

    /* Backgrounds */
    --body-background-color: var(--brand-light);
    --box-background-color: rgba(255, 255, 255, 0.2);

    /* Text Colors */
    --text-color: var(--brand-grey);
    --text-color-light: var(--brand-grey-light);
    --color-headings: var(--brand-main);

    /* Typography */
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

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
    --font-family-base: 'Helvetica Neue', 'ff-tisa-sans-web-pro', 'Trebuchet MS', 'Helvetica', 'Arial', 'sans-serif';
    --font-weight-base: 400;
    --font-weight-bold: 700;
    --font-family-monospace: 'Menlo', 'Monaco', 'Consolas', 'Courier New',
      'monospace';
    --font-family-headings: 'brandon-grotesque', 'Avenir Next', 'Helvetica Neue',
      'Helvetica', 'Arial', 'sans-serif';
    --font-weight-headings: 400;
    --line-height-headings: 1.1;

      /* Components spacing */
    --spacer: 1.5rem;
    --border-radius: 0.25rem;

    /* others */
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.backgroundColor};
  transition: background 0.2s var(--easing);
}

button {
  font-family: var(--font-family-base);
  outline: none;
}

p,
ul,
ol {
  padding: 0;
  margin: 0;
}

/* Headings */

  section {
    margin: 0 auto;
    max-width: 1000px;
    padding: 60px 0;

    ${media.smaller`
      padding: 80px 0;
    `}

    ${media.medium`
      padding: 100px 0;
    `}
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-family-headings);
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.titleColor};
    line-height: 1.1;
  }

/* Links */
a {
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  transition: 0.2s ease-out;
}

a:hover,
a:focus {
  color: ${({ theme }) => theme.accentColor};
}

/* Media */
img,
video,
svg {
  max-width: 100%;
  height: auto;
  margin: 0;
}

.big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

.medium-heading {
  margin: 0;
  font-size: clamp(40px, 8vw, 60px);
}

${TransitionStyles}

`

export default GlobalStyle
