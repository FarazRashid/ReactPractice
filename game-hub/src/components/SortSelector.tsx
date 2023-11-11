import {
  Menu,
  Button,
  MenuList,
  Box,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSorderOrder = sortOrders.find(
    (order) => order.value == sortOrder
  );

  return (
    <Box marginX={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: {currentSorderOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default SortSelector;
