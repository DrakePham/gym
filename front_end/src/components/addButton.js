import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { AddIcon }from '@mui/icons-material'; // need to update in the future
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

const ExpandingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {!isExpanded ? (
        <Button
          variant="contained"
          color="primary"
          // startIcon={<AddIcon />}
          onClick={() => setIsExpanded(true)}
        >
          Add
        </Button>
      ) : (
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField label="Name" variant="outlined" fullWidth />
              </TableCell>
              <TableCell>
                <TextField label="Age" variant="outlined" fullWidth />
              </TableCell>
              {/* Add more columns as needed */}
            </TableRow>
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ExpandingButton;
