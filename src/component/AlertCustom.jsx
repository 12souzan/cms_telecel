import { Alert, Snackbar } from '@mui/material'
import React, { useContext } from 'react'
import DataContext from '../context/DataContext';

function AlertCustom() {
  const {
    alertOpen,
    alertMessage,
    alertSeverity,
    handleAlertClose,
  } = useContext(DataContext);

  return (
    <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleAlertClose}>
      <Alert onClose={handleAlertClose} severity={alertSeverity} variant="filled" sx={{ width: '100%' }}>
        {alertMessage}
      </Alert>
    </Snackbar>
  )
}

export default AlertCustom