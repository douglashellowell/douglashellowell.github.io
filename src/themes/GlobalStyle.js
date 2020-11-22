import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*,
:after,
:before {
  box-sizing: border-box;
}

html {
  line-height: ${({ theme }) => theme.font.lineHeight[2]};
  /* hard coded */
  font-size: 16px; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: ${({ theme }) => theme.typeface.serif};
  font-size: ${({ theme }) => theme.font.size[1]};
  color: ${({ theme }) => theme.colours.text};
}

footer {
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) =>
  theme.spacing[0]};
}

hr {
  background: ${({ theme }) => theme.colours.accent};
  height: 1px;
  border: 0;
}

/* Heading */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${({ theme }) => theme.typeface.sans};
  margin-top: ${({ theme }) => theme.spacing[9]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.font.lineHeight[1]};
  letter-spacing: -0.025em;
}

h2,
h3,
h4,
h5,
h6 {
  font-weight: ${({ theme }) => theme.font.weight[3]};
  color: ${({ theme }) => theme.colours.heading};
}

h1 {
  font-weight: ${({ theme }) => theme.font.weight[5]};
  font-size: ${({ theme }) => theme.font.size[6]};
  color: ${({ theme }) => theme.colours.headingBlack};
}

h2 {
  font-size: ${({ theme }) => theme.font.size[5]};
}

h3 {
  font-size: ${({ theme }) => theme.font.size[4]};
}

h4 {
  font-size: ${({ theme }) => theme.font.size[3]};
}

h5 {
  font-size: ${({ theme }) => theme.font.size[2]};
}

h6 {
  font-size: ${({ theme }) => theme.font.size[1]};
}

h1 > a {
  color: inherit;
  text-decoration: none;
}

h2 > a,
h3 > a,
h4 > a,
h5 > a,
h6 > a {
  text-decoration: none;
  color: inherit;
}

/* Prose */

p {
  line-height: ${({ theme }) => theme.font.lineHeight[3]};
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  margin: ${({ theme }) => theme.spacing[0]} ${({ theme }) =>
  theme.spacing[0]} ${({ theme }) => theme.spacing[7]} ${({ theme }) =>
  theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[0]};
}

ul,
ol {
  margin-left: ${({ theme }) => theme.spacing[0]};
  margin-right: ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[0]};
  margin-bottom: ${({ theme }) => theme.spacing[7]};
  list-style-position: outside;
  list-style-image: none;
}

ul li,
ol li {
  padding-left: ${({ theme }) => theme.spacing[0]};
  margin-bottom: calc(${({ theme }) => theme.spacing[7]} / 2);
}

li > p {
  margin-bottom: calc(${({ theme }) => theme.spacing[7]} / 2);
}

li *:last-child {
  margin-bottom: ${({ theme }) => theme.spacing[0]};
}

li > ul {
  margin-left: ${({ theme }) => theme.spacing[7]};
  margin-top: calc(${({ theme }) => theme.spacing[7]} / 2);
}

blockquote {
  color: ${({ theme }) => theme.colours.textLight};
  margin-left: calc(-1 * ${({ theme }) => theme.spacing[6]});
  margin-right: ${({ theme }) => theme.spacing[7]};
  padding: ${({ theme }) => theme.spacing[0]} ${({ theme }) =>
  theme.spacing[0]} ${({ theme }) => theme.spacing[0]} ${({ theme }) =>
  theme.spacing[6]};
  border-left: ${({ theme }) => theme.spacing[1]} solid ${({ theme }) =>
  theme.colours.primary};
  font-size: ${({ theme }) => theme.font.size[2]};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing[7]};
}

blockquote > :last-child {
  margin-bottom: ${({ theme }) => theme.spacing[0]};
}

blockquote > ul,
blockquote > ol {
  list-style-position: inside;
}

table {
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing[7]};
  border-collapse: collapse;
  border-spacing: 0.25rem;
}

table thead tr th {
  border-bottom: 1px solid ${({ theme }) => theme.colours.accent};
}

/* Link */

a {
  color: ${({ theme }) => theme.colours.primary};
}

a:hover,
a:focus {
  text-decoration: none;
}

/* Custom classes */

.global-wrapper {
  margin: ${({ theme }) => theme.spacing[0]} auto;
  max-width: ${({ theme }) => theme.maxWidths[6]};
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) =>
  theme.spacing[5]};
}

.global-wrapper[data-is-root-path="true"] .bio {
  margin-bottom: ${({ theme }) => theme.spacing[11]};
}

.global-header {
  margin-bottom: ${({ theme }) => theme.spacing[9]};
}

.main-heading {
  font-size: ${({ theme }) => theme.font.size[7]};
  margin: 0;
}

.post-list-item {
  margin-bottom: ${({ theme }) => theme.spacing[7]};
  margin-top: ${({ theme }) => theme.spacing[7]};
}

.post-list-item p {
  margin-bottom: ${({ theme }) => theme.spacing[0]};
}

.post-list-item h2 {
  font-size: ${({ theme }) => theme.font.size[4]};
  color: ${({ theme }) => theme.colours.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[0]};
}

.post-list-item header {
  margin-bottom: ${({ theme }) => theme.spacing[4]};
}

.header-link-home {
  font-weight: ${({ theme }) => theme.font.weight[3]};
  font-family: ${({ theme }) => theme.typeface.sans};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size[2]};
}

.bio {
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
}

.bio p {
  margin-bottom: ${({ theme }) => theme.spacing[0]};
}

.bio-avatar {
  margin-right: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[0]};
  min-width: 50px;
  border-radius: 100%;
}

.blog-post header h1 {
  margin: ${({ theme }) => theme.spacing[0]} ${({ theme }) =>
  theme.spacing[0]} ${({ theme }) => theme.spacing[4]} ${({ theme }) =>
  theme.spacing[0]};
}

.blog-post header p {
  font-size: ${({ theme }) => theme.font.size[2]};
  font-family: ${({ theme }) => theme.typeface.sans};
}

.blog-post-nav ul {
  margin: ${({ theme }) => theme.spacing[0]};
}

.gatsby-highlight {
  margin-bottom: ${({ theme }) => theme.spacing[7]};
}

/* Media queries */

@media (max-width: 42rem) {
  blockquote {
    padding: ${({ theme }) => theme.spacing[0]} ${({ theme }) =>
  theme.spacing[0]} ${({ theme }) => theme.spacing[0]} ${({ theme }) =>
  theme.spacing[4]};
    margin-left: ${({ theme }) => theme.spacing[0]};
  }
  ul,
  ol {
    list-style-position: inside;
  }
}

`
