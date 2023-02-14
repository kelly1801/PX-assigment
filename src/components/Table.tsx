import * as MaterialUI from "@mui/material";
import { MouseEvent, useContext } from "react";
import { Opportunity } from "../interfaces";
import { rows } from "../data/rows";
import {
  StyledTableContainer,
  StyledTable,
  StyledRow,
  StyledRating
} from "../styles/TableStyles";
import { PopupCard } from "./index";
import { NavButtons } from "./NavButtons";
import { CardContext } from "../context/CardContext";
import { usePagination } from "../hooks/usePagination";
const { TableBody, TableCell, TableHead, TableRow } = MaterialUI;

export const BasicTable = () => {
  const { show, setShow, data, filtered, setRow, row } = useContext(
    CardContext
  );
  const { start, limit, next, prev } = usePagination({
    start: 0,
    limit: 5,
    step: 5
  });

  const handleRowClick = (event: MouseEvent<HTMLElement>, id: number) => {
    setShow(!show);
    setRow(id);
  };

  return (
    <>
      <StyledTableContainer>
        <StyledTable aria-label="simple table">
          <TableHead>
            <TableRow>
              {rows.map(({ row }, index) => (
                <TableCell key={index} align="center">
                  {row}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.slice(start, limit).map((row: Opportunity) => {
              const rating = Number(row.pilytixTier?.split("")[0]);

              return (
                <StyledRow
                  onClick={(event: MouseEvent<HTMLElement>) =>
                    handleRowClick(event, row.oppId!)
                  }
                  key={row?.oppId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.oppName}
                  </TableCell>
                  <TableCell align="center">{row?.stage}</TableCell>
                  <TableCell align="center">{row?.repProbability}</TableCell>
                  <TableCell align="center">
                    {row?.pilytixProbability}
                  </TableCell>
                  <TableCell align="center">
                    <StyledRating name="read-only" value={rating} readOnly />
                  </TableCell>
                  <TableCell align="center">{row?.amount}</TableCell>
                  <TableCell align="center">{row?.product}</TableCell>
                  <TableCell align="center">{row?.salesRepName}</TableCell>
                </StyledRow>
              );
            })}
          </TableBody>
        </StyledTable>
        {show && <PopupCard {...row} />}

        {!filtered && (
          <NavButtons
            next={next}
            prev={prev}
            step={5}
            start={start}
            limit={limit}
          />
        )}
      </StyledTableContainer>
    </>
  );
};
