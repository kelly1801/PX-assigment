import { ExpandButton, RepInfo } from "../styles/CardStyles";
import { Opportunity } from "../interfaces/index";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

export const RepsInfo = (props: Opportunity) => {
  const { expanded, setExpanded } = useContext(CardContext);
  const clickHandler = () => setExpanded(!expanded);

  return (
    <RepInfo>
      <span>Rep name: {props.salesRepName}</span>
      <span>Product: {props.product}</span>
      <span>Amount: {props.amount}</span>
      <span>PX Probability: {props.pilytixProbability}</span>
      <span>Rep Probability: {props.repProbability}</span>
      <ExpandButton expand={expanded} onClick={clickHandler}>
        {expanded ? "Hide" : "See"} charts
      </ExpandButton>
    </RepInfo>
  );
};
