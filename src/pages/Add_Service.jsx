import React from 'react'
import ServiceForm from '../component/ServiceForm'
import HomeIcon from '@mui/icons-material/Home';
import MainButton from '../component/MainButton';
import AlertCustom from '../component/AlertCustom';
import useBackNavigation from '../hooks/useBackNavigation';
import { customBackButton } from '../utils/style';

function Add_Service() {
    const handleBack = useBackNavigation();
    return (
        <div className='bg-gradient-to-t from-[#e52325e6] to-[#e5232500] pt-5 px-5 md:h-[100vh] flex flex-col gap-5'>
            <MainButton Icon={<HomeIcon />} onClick={handleBack} buttonText='Back To Home' sx={customBackButton} />
            <div className='items-center flex  justify-center '>
                <ServiceForm />
            </div>
            <AlertCustom />
        </div>
    )
}

export default Add_Service