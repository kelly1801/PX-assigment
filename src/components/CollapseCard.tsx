import { useContext } from "react";
import { Opportunity } from "../interfaces";
import { LineChart } from "./LineChart";
import { BarChart } from "./BarChart";
import { StyledCollapse } from "../styles/CardStyles";
import { Content } from "../styles/CardStyles";
import { CardContext } from "../context/CardContext";

export const CollapseCard = ({
  probabilityHistory,
  pilytixFactorsDecreasingWin,
  pilytixFactorsIncreasingWin
}: Opportunity) => {
  const { expanded } = useContext(CardContext);

  return (
    <StyledCollapse in={expanded} timeout="auto" unmountOnExit>
      <Content charts={"charts"}>
        {probabilityHistory && (
          <>
            <h3>Probability History</h3>
            <LineChart probabilityHistory={probabilityHistory} />
          </>
        )}
        {pilytixFactorsIncreasingWin && (
          <>
            <h3>Increasing</h3>
            <BarChart factors={pilytixFactorsIncreasingWin} />
          </>
        )}

        {pilytixFactorsDecreasingWin && (
          <>
            <h3>Decreasing</h3>
            <BarChart factors={pilytixFactorsDecreasingWin} />
          </>
        )}
      </Content>
    </StyledCollapse>
  );
};
