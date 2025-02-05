import React from 'react';
import { Button, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function ActionButtons({ onEdit, onDelete, onView }) {
  return (
    <div className="flex">
      <Tooltip title="Edit">
        <Button onClick={onEdit} className="!text-black !bg-transparent box-shadow-none !min-w-[30px]" size="small">
          <EditIcon className="!w-[20px] !h-[20px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete">
        <Button onClick={onDelete} className="!text-[var(--primaryColor)] !bg-transparent box-shadow-none !min-w-[30px]" size="small">
          <DeleteIcon className="!w-[20px] !h-[20px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View">
        <Button onClick={onView} className="!text-[#959595] !bg-transparent box-shadow-none !min-w-[30px]">
          <RemoveRedEyeIcon className="!w-[20px] !h-[20px]" />
        </Button>
      </Tooltip>
    </div>
  );
}

export default ActionButtons;
