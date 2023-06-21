import React from 'react'
import MuiTooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { TooltipProps } from './IconTooltip.props';

const IconTooltip: React.FC<TooltipProps> = (props) => {
  const { title, disabled, onClick, children } = props;
  return (
    <MuiTooltip title={title}>
      <span>
        <IconButton 
          disabled={disabled}
          sx={{ padding: 0 }}
          onClick={onClick}
        >
          {children}
        </IconButton>
      </span>
    </MuiTooltip>
  )
}

export default IconTooltip;
