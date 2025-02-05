import React, { useContext, useState } from 'react';
import {Box} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ActionButtons from './ActionButtons';
import DataContext from '../context/DataContext';
import { tableStyle } from '../utils/style';
import ConfirmationDialog from './Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function TableComponent() {
  const {
    data,
    handleDelete,
  } = useContext(DataContext);

  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const handleOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const confirmDelete = () => {
    if (selectedId) {
      handleDelete(selectedId);
    }
    handleClose();
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Company Name', flex: 1, minWidth: 150 },
    { field: 'country', headerName: 'Country', flex: 1, minWidth: 120 },
    { field: 'serviceType', headerName: 'Service Type', flex: 1, minWidth: 150 },
    { field: 'status', headerName: 'Status', flex: 1, minWidth: 90 },
    { field: 'lastUpdated', headerName: 'Last Updated', flex: 1, minWidth: 160 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <ActionButtons
        onEdit={() => navigate(`/edit_service/${params.row.id}`)}
        onDelete={() => handleOpen(params.row.id)}
        onView ={() =>navigate(`/service_details/${params.row.id}`)}
        />
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        sx={tableStyle}
      />

      <ConfirmationDialog
        open={open}
        handleClose={handleClose}
        dialogTitle="Confirm Deletion"
        dialogContent={`Are you sure you want to delete this service with ID: ${selectedId}?`}
        functionType="Delete"
        confirmDelete={confirmDelete}
        iconDialog={<DeleteIcon />}
      />

    </Box>
  );
}

export default TableComponent;
