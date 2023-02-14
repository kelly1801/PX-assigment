import { CardHeader } from "./CardHeader";
import { CardContainer, Content } from "../styles/CardStyles";
import { CollapseCard } from "./CollapseCard";
import { Opportunity } from "../interfaces";
import { usePagination } from "../hooks/usePagination";
import { NavButtons } from "./NavButtons";
import { CardContext } from "../context/CardContext";
import { useContext, useEffect } from "react";
export const PopupCard = (props: Opportunity) => {
  const { limit, start, next, prev } = usePagination({
    start: 0,
    limit: 1,
    step: 1,
  });
  const { setRow } = useContext(CardContext);

  useEffect(() => {
    setRow(limit);
  }, [limit, start]);

  return (
    <CardContainer>

      <Content>
        <CardHeader {...props} />
          <NavButtons
              next={next}
              step={1}
              prev={prev}
              start={start}
              limit={limit}
          />
        <CollapseCard {...props} />
      </Content>


    </CardContainer>
  );
};
