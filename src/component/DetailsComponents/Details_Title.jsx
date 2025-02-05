import React from 'react'
import TypographyCustom from '../TypographyCustom'

function Details_Title({ serviceName, creationDate }) {
  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      <TypographyCustom variant="h3" gutterBottom sx={{ marginBottom: 0 , textAlign:'center'}} TypographyContent={serviceName} />
      <TypographyCustom variant="h6" gutterBottom sx={{ display: 'block', color: 'var(--primaryColor)' , textAlign:'center'}} TypographyContent={creationDate} />
    </div>
  )
}

export default Details_Title