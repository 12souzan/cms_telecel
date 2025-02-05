import React from 'react';
import { Button, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function ActionButtons({ onEdit, onDelete, onView }) {
  return (
    <div className="flex gap-2">
      <Tooltip title="Edit">
        <Button
          onClick={onEdit}
          className="!text-white !bg-[#5d9abd] !rounded-full !min-w-[35px] !h-[35px]"
          variant="contained"
          size="small"
        >
          <EditIcon className="!w-[20px] !h-[20px]" />
        </Button>
      </Tooltip>

      <Tooltip title="Delete">
        <Button
          onClick={onDelete}
          className="!text-white !bg-[var(--primaryColor)] !rounded-full !min-w-[35px] !h-[37px]"
          variant="contained"
          size="small"
        >
          <DeleteIcon className="!w-[20px] !h-[20px]" />
        </Button>
      </Tooltip>

      <Tooltip title="View">
        <Button
          onClick={onView}
          className="!text-white !bg-[#000000c2] !rounded-full !min-w-[35px] !h-[37px]"
        >
          <RemoveRedEyeIcon className="!w-[20px] !h-[20px]" />
        </Button>
      </Tooltip>
    </div>
  );
}

export default ActionButtons;
