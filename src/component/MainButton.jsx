import React from 'react'
import { MainButtonStyle } from '../utils/style'

function MainButton({variant , buttonText , Icon ,className , sx , onClick }) {
  return (
    <MainButtonStyle startIcon={Icon} variant={variant} sx={sx} className={className} onClick={onClick} type="submit">{buttonText}</MainButtonStyle>
)
}

export default MainButton