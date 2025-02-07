import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "@remix-run/react";

type CustomPaginationProps = {
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
  totalPages: number;
};

const CustomPagination: React.FC<CustomPaginationProps> = ({ currentPage, prevPage, nextPage, totalPages }) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      color="primary"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        "& .MuiPaginationItem-root": {
          color: "white",
          backgroundColor: "#1976D2", // Primary color
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#125EA2",
          },
        },
        "& .Mui-selected": {
          backgroundColor: "#0D47A1",
          color: "white",
          fontWeight: "bold",
        },
      }}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={
            item.page === 1
              ? "?page=1"
              : item.page === totalPages
              ? `?page=${totalPages}`
              : `?page=${item.page}`
          }
          {...item}
        />
      )}
    />
  );
};

export default CustomPagination;
