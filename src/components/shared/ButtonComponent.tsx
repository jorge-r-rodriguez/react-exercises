import React from 'react';
import { Button } from '@mui/material';

const ButtonComponent: React.FC<any> = (props) => {
  return (
    <Button variant="contained" {...props}>
      {props.text}
    </Button>
  );
};

export default ButtonComponent;
