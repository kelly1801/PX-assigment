import { FormEvent, useContext } from "react";
import { CardContext } from "../context/CardContext";
import { SearchOutlined } from "@mui/icons-material";
import { useForm } from "../hooks/useForm";
import { BarContainer } from "../styles/BarStyles";

export const Filterbar = () => {
  const { filterData } = useContext(CardContext);
  const { filterProduct, inputChange, resetForm } = useForm({
    filterProduct: ""
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterData(filterProduct);
    resetForm();
  };
  return (
    <BarContainer>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name="filterProduct"
          value={filterProduct}
          onChange={inputChange}
          placeholder="Look by Product"
        />
        <button>
          <SearchOutlined />
        </button>
      </form>
    </BarContainer>
  );
};
