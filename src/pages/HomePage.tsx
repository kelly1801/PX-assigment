import { TableContainer } from "../styles/PagesStyles";
import { Filterbar, BackButton, BasicTable } from "../components";

export const HomePage = () => {
  return (
    <>
      <BackButton />
      <TableContainer>
        <Filterbar />
        <BasicTable />
      </TableContainer>
    </>
  );
};
