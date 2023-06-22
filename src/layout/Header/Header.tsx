import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import './Header.styles.scss';

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: 'fixed',
  padding: '24px',
}));

const Header: React.FC = () => {
  return (
    <>
      <header className="header-container">
        <CustomAppBar position="fixed">
          <Typography variant="h6">Github User Search App</Typography>
        </CustomAppBar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
