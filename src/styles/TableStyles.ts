import styled from "styled-components";
import * as MaterialUI from "@mui/material";
const { TableContainer, Table, TableRow, Rating } = MaterialUI;

export const StyledTableContainer = styled(TableContainer)`
  border-radius: 0.7rem;
  margin: 1rem;
  background-color: var(--Secondary);
  box-shadow: 1px 1px #f2f2f2;
  height: 100%;
  max-width: 95%;
  overflow: hidden;

  @media only screen and (max-width: 834px) {
    margin: 0 0.5rem;
    width: 100%;
    overflow: hidden;
  }
`;
export const StyledTable = styled(Table)`
  width: clamp(350px, 800px, 900px);
`;
export const ButtonBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
  }
`;

export const StyledRow = styled(TableRow)`
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: var(--DarkBlue);
    th,
    td,
    span {
      color: var(--Light);
    }
  }
`;
export const StyledRating = styled(Rating)`
  span {
    color: var(--Primary);
  }
  @media only screen and (max-width: 834px) {
    span {
      font-size: 12px;
    }
  }
`;
