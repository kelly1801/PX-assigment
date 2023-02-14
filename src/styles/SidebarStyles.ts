import { List, ListItem } from "@mui/material";
import styled from "styled-components";

export const SidebarContainer = styled(List)`
  background-color: #fff;
  width: clamp(5rem, 12rem, 15rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 0 0.7rem 0.7rem 0;
  padding: 1rem;
  color: var(--Dark);

  @media only screen and (max-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  li {
    &:hover {
      background-color: var(--DarkBlue);
      color: var(--Light);
      border-radius: 0.3rem;
      cursor: not-allowed;
    }
  }

  @media only screen and (max-width: 834px) {
    display: none;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0;
  margin-bottom: 5rem;
  @media only screen and (max-width: 834px) {
    margin: 0 1rem;
  }
`;
export const Author = styled.a`
  background-color: var(--Secondary);
  display: flex;
  border-radius: 0.5rem;
  margin: 1rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  color: var(--DarkBlue);

  @media only screen and (max-width: 834px) {
    height: 5rem;
  }
`;
