//mui styles

import { BorderRight } from "@mui/icons-material";
import { Box, Button, ButtonGroup, CardContent, IconButton, Menu, styled, Typography } from "@mui/material";

export const commonTextFieldStyles = {
    marginBottom: 1,
    width: 250,
    background: 'transparent',
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiInput-underline:hover:after': {
        borderBottomColor: 'black',
    },
    '& .MuiInput-underline.Mui-focused:after': {
        borderBottomColor: 'black',
    },
    '.MuiFormLabel-root': {
        color: 'black',
        left: '15px'
    },
    '.css-1ew92b2-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
        color: 'black',
    },
    '& .MuiInputBase-input': {
        paddingLeft: '14px'
    }

};
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
    gap:'20px',
}

export const buttonStyle2 = {
    color: 'var(--primaryColor)', border: '2px solid var(--primaryColor)'
}

export const customEditButton = {
    border: "1px solid transparent",
    '&:hover': {
        borderColor: 'var(--primaryColor)',
        background: 'transparent'
    },
}


export const customTextField = {
    '& .MuiInputLabel-root.Mui-focused': {
        color: "black", 
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
        borderColor: "var(--primaryColor) ",
    },
    '& .MuiOutlinedInput-root.Mui-error': {
        borderColor: "var(--primaryColor)",
    },
    '& .MuiInputLabel-root.Mui-error': {
        color: "var(--primaryColor)",
    },
}

export const activeSwitch = {
    ".css-17jyosd-MuiSwitch-thumb": {
        color: 'var(--primaryColor)'
    },
    ".css-161ms7l-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
        background: 'var(--primaryColor)'
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
    '.css-1bgckiu-MuiDataGrid-main ': {
        background: 'white'
    },
    '.css-1gak8h1-MuiToolbar-root-MuiTablePagination-toolbar': {
        background: 'white',
    },
    '.css-11cfq65-MuiTablePagination-displayedRows': {
        color: 'black',
    },
    '.css-h7cjts-MuiButtonBase-root-MuiIconButton-root': {
        color: 'black',
    },
    '.MuiDataGrid-cell': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

export const CustomButton2 = styled(Button)({
    backgroundColor: 'var(--primaryColor)',
    color: 'white',
    borderColor: 'white',
    '&:hover': {
        backgroundColor: '',
    },
    '&.MuiButton-root': {
        borderColor: 'white !important',
    },

});

export const CustomButton = styled(ButtonGroup)({
    backgroundColor: 'red',
    color: 'white',
    width: 'fit-content',
    '&:hover': {
        backgroundColor: 'darkblue',
    },
    '&.MuiButton-root': {
        borderColor: 'white !important',
    },
});

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
    // alignItems:"center" , 
    // justifyContent:"justify-between" , 
    gap: '20px',
    flexDirection: 'column'

})
export const MainButtonStyle = styled(Button)({
    color: 'white', background: 'var(--primaryColor)', width: '300px', height: '100%', border: 'none'
})