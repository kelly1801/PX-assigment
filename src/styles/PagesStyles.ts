import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  background-color: var(--Light);
  height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 834px) {
    flex-direction: column;
  }
`;
export const TableContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0c0e16;
  z-index: 4;
  opacity: 0.5;
`;
