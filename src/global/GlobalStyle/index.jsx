import { createGlobalStyle } from "styled-components";

import JuliusSansOne from "./fonts/JuliusSansOne-Regular.ttf";

export const GloabalStyle = createGlobalStyle`

:root{
  font-size: 62.5%;
  --golden-pink-light: #fff2f5;
  --golden-pink-dark: #7b3638;
  --golden-pink-medium: #bc7a7c;
}

 @font-face {
	font-family: 'JuliusSansOne';
	src: local('Julius Sans One'), local('JuliusSansOne'), url(${JuliusSansOne});
}
  
 
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

body {
  /* 3. Add accessible line-height */
  line-height: 1.5;
  /* 4. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 7. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

`;
