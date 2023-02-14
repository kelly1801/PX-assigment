import { Opportunity } from "../interfaces";
import { RepsInfo } from "./RepsInfo";
import { ContentHeader, Header, StyledAvatar } from "../styles/CardStyles";
import { StyledRating } from "../styles/TableStyles";

export const CardHeader = (props: Opportunity) => {
  const rating = Number(props?.pilytixTier?.split("")[0]);
  return (
    <ContentHeader key={props.oppId}>
      <Header>
        <StyledAvatar
          alt={props?.oppName}
          src="https://i.pravatar.cc/300"
          sx={{ width: 126, height: 126 }}
        />

        <StyledRating value={rating} readOnly />
        <h4>{props?.oppName}</h4>
        <h5>{props?.stage}</h5>
      </Header>

      <RepsInfo {...props} />
    </ContentHeader>
  );
};
