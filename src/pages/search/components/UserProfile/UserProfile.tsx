import React, { useState } from 'react';

import { Typography, Tooltip, CircularProgress } from '@mui/material';
import { Box, Stack } from '@mui/system';
import {
  PeopleOutlineOutlined,
  AccountTreeOutlined,
  RemoveRedEye,
  VisibilityOff,
  LocationOnOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import IconTooltip from './components/IconTooltip';

import { formatNumber } from '../../../../utils/methods';
import type { UserProfileProps } from './UserProfile.props';
import { useUserProfileQuery } from '../../queries/useUserProfileQuery';

import './UserProfile.styles.scss';

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
  const [showProfileDetails, setShowProfileDetails] = useState<boolean>(false);
  const { data, isFetching } = useUserProfileQuery({ 
    username,
    showProfileDetails
  });

  const updateUserProfile = (showProfileDetails: boolean) => {
    setShowProfileDetails(showProfileDetails);
  };

  const showMoreDetails = (
    showDetailsType: string,
    tooltipText: string,
    data: number,
  ) => {
    let icon;
    switch (showDetailsType) {
      case 'FOLLOWERS':
        icon = <PeopleOutlineOutlined />;
        break;
      case 'FOLLOWING':
        icon = <AccountCircleOutlined />;
        break;
      case 'REPOS':
        icon = <AccountTreeOutlined />;
        break;
    }

    return (
      <Box component="span" display="flex" key={showDetailsType}>
        <Tooltip title={tooltipText}>
          <Box
            component="span"
            display="flex"
            sx={{ gap: 0.5, cursor: 'pointer' }}
          >
            {icon}
            {formatNumber(data)}
          </Box>
        </Tooltip>
      </Box>
    );
  };

  return (
    <Stack
      direction="column"
      mt={0}
      className="user-profile-container"
      style={{ textAlign: 'left' }}
    >
      <Box mt={0} component="h3" mb={0} display="flex">
        View Full Profile &nbsp;{' '}
        {showProfileDetails ? (
          <IconTooltip
            disabled={isFetching}
            title="Hide User Profile Details"
            onClick={() => updateUserProfile(false)}
          >
            <RemoveRedEye />
          </IconTooltip>
        ) : (
          <IconTooltip
            disabled={isFetching}
            title="Show User Profile Details"
            onClick={() => updateUserProfile(true)}
          >
            <VisibilityOff />
          </IconTooltip>
        )}
        {isFetching && (
          <CircularProgress className="circular-progress-bar" size={18} />
        )}
      </Box>
      {!isFetching && data?.login && showProfileDetails && (
        <Box component="span" mt={0} sx={{ fontWeight: 'bold' }}>
          <Typography variant="h6" component="span" mt={0} align="left" mb={1}>
            {data.name}
          </Typography>
          <Typography component="div" mb={1} display="block">
            {data.bio}
          </Typography>
          <Stack direction="row" display="flex" sx={{ gap: 3 }}>
            {data.location && (
              <Box component="span" display="flex">
                <LocationOnOutlined />
                {data.location}
              </Box>
            )}

            {showMoreDetails('FOLLOWERS', 'Followers', data.followers)}
            {showMoreDetails('REPOS', 'Repositories', data.public_repos)}
            {showMoreDetails('FOLLOWING', 'Following', data.following)}
          </Stack>
        </Box>
      )}
    </Stack>
  );
};

export default UserProfile;
