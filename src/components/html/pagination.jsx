import { PaginationItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

const Pagination = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    return (
        <Box>
             <Pagination
      page={page}
      count={10}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
        </Box>
    );
}

export default Pagination;
