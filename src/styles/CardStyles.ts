import styled, { css } from "styled-components";
import { Box, Card, CardContent, Avatar, Collapse } from "@mui/material";
import { CardContentProps, ExpandMoreProps, ButtonProps } from "../interfaces";

export const ContentHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0.8rem 0;
  @media only screen and (max-width: 465px) {
    flex-direction: column;
  }
`;
export const CardContainer = styled(Card)`
  width: clamp(300px, 800px, 900px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  @media only screen and (max-width: 835px) {
    width: 98%;
    font-size: 0.9;
  }
`;
export const Content = styled(CardContent)<CardContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  max-height: 550px;

  ${(props) =>
    props.charts &&
    css`
      max-height: 800px;
      border-radius: 0.5rem;
      padding: 0 1rem;
      align-items: center;
      justify-content: center;
      background-color: var(--Secondary);
      overflow: hidden;
    `};
`;
export const StyledAvatar = styled(Avatar)`
  border: 2px solid var(--Primary);
  width: 1rem;
`;
export const Header = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem;
  position: relative;
  flex-direction: column;
`;
export const RepInfo = styled.div`
  background-color: var(--Secondary);
  color: var(--Dark);
  width: clamp(100px, 300px, 500px);
  height: 100%;
  padding: 1.5rem 1rem;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border-radius: 0.5rem;
`;
export const Button = styled.button<ButtonProps>`
  background-color: var(--DarkPurple);
  border: none;
  color: var(--Light);
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.2rem;

  ${(props) =>
    props.close &&
    css`
      position: absolute;
      font-size: 10px;
      right: 0;
      top: 0;
      align-self: flex-end;
      border-radius: 50%;
    `}

  ${(props) =>
    props.back &&
    css`
      position: absolute;
      top: 1rem;
      left: 16%;
      align-self: flex-start;
      justify-self: center;
      background: none;
      color: var(--Primary);
    `}
`;

export const ExpandButton = styled(Button)<ExpandMoreProps>`
  border: none;
  outline: none;
`;
export const StyledCollapse = styled(Collapse)`
  margin: 2rem 0;
  border-radius: 0.5rem;
  text-align: center;
`;
