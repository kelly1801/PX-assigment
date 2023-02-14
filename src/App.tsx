import { useContext } from "react";
import { PageContainer, Overlay } from "./styles/PagesStyles";
import { SideBar } from "./components";
import { CardContext } from "./context/CardContext";
import { HomePage } from "./pages/HomePage";
export default function App() {
  const { show, setShow } = useContext(CardContext);
  return (
    <>
      <PageContainer>
        <SideBar />
        <HomePage />

        {show && <Overlay onClick={() => setShow(!show)} />}
      </PageContainer>
    </>
  );
}
