import React from 'react';

import { Avatar, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Link from '@mui/material/Link';

import { UserCardProps } from './UserCardProps';
import UserProfile from '../UserProfile/UserProfile';

import { Item } from './UserCard.styles';

const UserCard: React.FC<UserCardProps> = ({ username, avatar, profileURL }) => {
  
  return (
    <Item>
      <Stack 
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Avatar 
          sx={{ width: 100, height: 100 }}
          src={avatar}
        /> 
        <Box 
          component='div'
          ml={0}
          sx={{ width: '100%'}}
        >
          <Stack 
            direction='column'
            spacing={1}
          >
            <Box justifyContent='left' display='flex' sx={{ width: '80%'}}>
              <Typography 
                variant='h4' 
                component='span' 
                align='left'
                style={{ color: 'Blue' }}
                noWrap
              >
                <Link 
                  href={profileURL}
                  target='_blank' 
                  underline='always'
                >
                  {username}
                </Link>
              </Typography>
            </Box>
            <UserProfile username={username}/>
          </Stack> 
        </Box>
      </Stack>
    </Item>
  )
}

export default React.memo(UserCard);
