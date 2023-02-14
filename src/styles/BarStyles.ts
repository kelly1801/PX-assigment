import styled from "styled-components";
import { Box } from "@mui/system";

export const BarContainer = styled(Box)`
  background-color: #fff;
  align-self: flex-end;
  margin: 1rem 2rem;
  border-radius: 0.5rem;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between input {
      border: none;
      outline: none;
      width: 100%;
    }
    button {
      background: none;
      border: none;
    }
  }

  @media only screen and (max-width: 834px) {
    width: 90%;
    border-radius: 0.5rem;
  }
`;
