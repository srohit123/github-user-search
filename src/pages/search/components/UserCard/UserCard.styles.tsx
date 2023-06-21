import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  marginBottom: '20px', 
  boxShadow: 'rgba(0, 0, 0, 0.7) 0px 5px 15px', 
  color: theme.palette.text.secondary,
}));
