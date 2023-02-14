import { useContext } from "react";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Button } from "../styles/CardStyles";
import { CardContext } from "../context/CardContext";

export const BackButton = () => {
  const { filtered, resetData } = useContext(CardContext);
  return (
    <Button
      onClick={() => resetData()}
      back
      style={{ display: filtered ? "inline-block" : "none" }}
    >
      <ArrowBackIosNewOutlined />
    </Button>
  );
};
