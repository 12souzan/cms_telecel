//mui styles

import { alpha, Box, Button, CardContent, IconButton, Menu, styled} from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";

export const customBackButton = {
    background: 'transparent',
    color: 'var(--primaryColor)',
    height: '50px',
    width: 'fit-content',
    fontWeight: '600',
    fontSize: '16px',
    display: "flex",
    alignItems: 'center'
}

export const iconDesign = {
    background: "var(--primaryColor)",
    padding: "5px",
    color: 'white',
    borderRadius: '50%',
    fontSize: 'text-2xl',
    width: '30px',
    height: '30px',
}

export const TitleBox = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fce7e7",
    padding: "20px",
    borderRadius: "4px",
    gap: '20px',
}

export const customEditButton = {
    border: "1px solid transparent",
    '&:hover': {
        borderColor: 'var(--primaryColor)',
        background: 'transparent'
    },
}

export const activeSwitch = {
    ".css-17jyosd-MuiSwitch-thumb": {
        color: 'var(--primaryColor)'
    },
    ".css-k5b5m0-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
        background: 'var(--primaryColor)'
    }
}

export const paginationStyle = {
    '.Mui-selected ': {
        backgroundColor: 'var(--primaryColor) !important',
        color: '#ffffff',
    }
}

export const searchStyle = {
    '.MuiOutlinedInput-root': {
        backgroundColor: 'white',
        '& fieldset': {
            borderColor: 'transparent',
            outline: 'none',
        },
        '&:hover fieldset': {
            borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'transparent',
        },
    },
    '.MuiInputLabel-root': {
        color: 'gray',
    },
    '.MuiInputBase-input': {
        color: 'black',
    },
    '.MuiInputAdornment-root': {
        color: 'black',
    },
}

export const tableStyle = {
    justifyContent: "center",
    '.MuiDataGrid-columnHeaders': {
        outline: 'none',
        color: 'var( --primaryColor)',
        background: 'white',
        justifyContent: 'center'

    },
    "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeaderTitleContainer": {
        justifyContent: "center",
    },
    '.MuiDataGrid-columnHeaders:focus': {
        outline: 'none'
    },
    '.MuiDataGrid-cell:focus': {
        outline: 'none',
    },
    '.css-1gak8h1-MuiToolbar-root-MuiTablePagination-toolbar': {
        background: 'white',
    },
    '.MuiDataGrid-cell': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

export const CustomIcon = styled(IconButton)({
    color: "var(--primaryColor)",
    "&:hover": {
        backgroundColor: "#e523255c",
    },
})

export const CustomBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 8,
    borderRadius: "4px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: 400,
    mx: "auto",
})

export const CustomBox2 = styled(Box)({
    display: "flex",
    flexDirection: 'column',
    alignItems: "basline",
    justifyContent: "center",
    gap: 10,
    padding: 8,
    borderRadius: "4px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",

})

export const CustomMenu = styled(Menu)({
    minWidth: 200,
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
})

export const CardContentstyle = styled(CardContent)({
    display: "flex",
    gap: '20px',
    flexDirection: 'column'

})

export const MainButtonStyle = styled(Button)({
    color: 'white', background: 'var(--primaryColor)', width: '300px', height: '100%', border: 'none'
})

export const StripedDataGrid = styled(DataGrid)(() => ({
    '& .MuiDataGrid-footerContainer': {
        backgroundColor: '#ffffff !important',
    },
    '&.MuiDataGrid-root':{
        backgroundColor: '#ffffff !important',
    },
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: '#7b7b7b12',
        // '&:hover': {
        //     backgroundColor: alpha('#e52325', 0.8),
        //     '@media (hover: none)': {
        //         backgroundColor: 'transparent',
        //     },
        // },
        // '&.Mui-selected': {
        //     backgroundColor: alpha('#e52325', 0.8),
        //     '&:hover': {
        //         backgroundColor: alpha('#e52325', 0.6),
        //         '@media (hover: none)': {
        //             backgroundColor: alpha('#e52325', 0.8),
        //         },
        //     },
        // },
    },
}));