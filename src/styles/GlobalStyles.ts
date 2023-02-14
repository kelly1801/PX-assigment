import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
  --Primary: #5a62b4;
  --Light: #f6f7fb;
  --DarkPurple: #383874;
  --Secondary: #f1f3ff;
  --DarkBlue: #7184da;
    --Dark: #040404;
    --Gray: #a6a6a8;
    
}

* {
  margin: 0;
  padding: 0;
  font-family: "Red Hat Display", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: (--Primary)
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--DarkBlue);
    border-radius: 0.5rem;
   
  }
 
 }
`;
