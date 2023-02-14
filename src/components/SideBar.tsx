import { ListItem, ListItemIcon } from "@mui/material";
import {
  Home,
  BarChart,
  MultilineChartOutlined,
  SearchOutlined
} from "@mui/icons-material";
import {
  Author,
  ItemContainer,
  Logo,
  SidebarContainer
} from "../styles/SidebarStyles";

export const SideBar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <MultilineChartOutlined />
        Visual Charts
      </Logo>
      <ItemContainer>
        <ListItem>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          Home
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          Chart
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SearchOutlined />
          </ListItemIcon>
          Filter
        </ListItem>
      </ItemContainer>
      <Author href="https://www.linkedin.com/in/kelly-chara/" target="_blank">
        Made with love By: Kelly Chara
      </Author>
    </SidebarContainer>
  );
};
