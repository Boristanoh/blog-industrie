import { createGlobalStyle } from 'styled-components'
import colors from './color'
import fonts from './font'
import '../../styles/fonts.css'

const GlobalStyle = createGlobalStyle`
  /* Reset de base */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${fonts.text};
    background-color: ${colors.backgroundLight};
    color: ${colors.textPrimary};
    line-height: 1.6;
  }

  /* Titres */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.title};
    color: ${colors.primary};
    font-weight: 600;
    line-height: 1.25;
  }

  h1 {
    font-size: 2.75rem; /* 44px */
  }

  h2 {
    font-size: 2rem; /* 32px */
  }

  h3 {
    font-size: 1.5rem; /* 24px */
  }

  /* Paragraphes */
  p {
    margin-bottom: 1rem;
  }

  /* Liens */
  a {
    text-decoration: none;
    color: ${colors.primary};
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${colors.accent};
  }

  /* Listes */
  ul, ol {
    padding-left: 1.2rem;
  }

  /* Images */
  img {
    max-width: 100%;
    display: block;
  }

  /* Boutons */
  button {
    font-family: ${fonts.ui};
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Inputs */
  input, textarea, select {
    font-family: ${fonts.text};
    font-size: 1rem;
  }
`

export default GlobalStyle
