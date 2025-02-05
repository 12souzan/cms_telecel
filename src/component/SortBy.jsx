import React, { useState, useContext } from "react";
import { MenuItem, Box, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DataContext from "../context/DataContext";
import { CustomBox, CustomIcon, CustomMenu, MainButtonStyle } from "../utils/style";

const SortButtonWithArrows = () => {
  const {
    selectedOption,
    sortOrder,
    changeSortOrder,
    changeSortOption,
  } = useContext(DataContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortOptionSelect = (option) => {
    changeSortOption(option);
    handleClose();
  };

  const toggleSortOrder = () => {
    changeSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <CustomBox>
      <MainButtonStyle onClick={handleClick} className="!px-3">
        Sort By
      </MainButtonStyle>

      <CustomMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "sort-button",
        }}
      >
        <MenuItem onClick={() => handleSortOptionSelect("Name")}>Name</MenuItem>
        <MenuItem onClick={() => handleSortOptionSelect("Country")}>Country</MenuItem>
        <MenuItem onClick={() => handleSortOptionSelect("Last Updated")}>Last Updated</MenuItem>
      </CustomMenu>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 500, color: "#333", fontSize: "16px" }}>
          {selectedOption}
        </Typography>

        <CustomIcon onClick={toggleSortOrder}>
          {sortOrder === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </CustomIcon>
      </Box>
    </CustomBox>
  );
};

export default SortButtonWithArrows;
