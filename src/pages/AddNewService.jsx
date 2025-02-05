import React from 'react'
import ServiceForm from '../component/ServiceForm'
import HomeIcon from '@mui/icons-material/Home';
import MainButton from '../component/MainButton';
import AddAvatar from './../assets/Add.gif'
import AlertCustom from '../component/AlertCustom';
import useBackNavigation from '../hooks/useBackNavigation';

function AddNewService() {
    const handleBack = useBackNavigation();
    return (
        <div className='bg-[var(--bg-color)] pt-5 px-5 md:h-[105vh] flex flex-col gap-5'>
            <MainButton Icon={<HomeIcon />} onClick={handleBack} variant="outlined" buttonText='Back To Home' className='md:!h-[50px] !w-full md:!w-fit' />
            <div className='items-center flex  justify-center '>
                <ServiceForm />
            </div>
            <AlertCustom/>
        </div>
    )
}

export default AddNewService