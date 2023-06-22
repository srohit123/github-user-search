import React from 'react';

import { Pagination, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';

import type { UserListProps } from './UserList.props';
import UserCard from '../UserCard/UserCard';

import { formatNumber } from '../../../../utils/methods';

import './UserList.styles.scss';

const UserList: React.FC<UserListProps> = props => {
  const { data, currentPage, onPageChange, totalPage } = props;

  return (
    <Box className="user-list-container" mt={7} mb={7}>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography className="text" variant="h6" align="right">
            Total Search Result: {formatNumber(data.total_count)}
          </Typography>
          {data.items.map(({ login, html_url, avatar_url }) => (
            <UserCard
              key={login}
              username={login}
              avatar={avatar_url}
              profileURL={html_url}
            />
          ))}
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      <Box display="flex" justifyContent="center">
        <Pagination
          page={currentPage}
          count={totalPage}
          onChange={onPageChange}
        />
      </Box>
    </Box>
  );
};

export default React.memo(UserList);
