import React, { useContext } from 'react'
import TableComponent from '../component/TableComponent'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import Search from '../component/Search';
import SiteLogo from '../component/SiteLogo';
import MainButton from '../component/MainButton';
import DataContext from '../context/DataContext';
import SortBy from '../component/SortBy';
import AlertCustom from '../component/AlertCustom';

function Service() {

    const { filteredData, searchQuery, handleSearchChange } = useContext(DataContext);

    const navigate = useNavigate()
    const handleAddService = () => {
        navigate('/add_service')
    }
    return (
        <div className='bg-gradient-to-t from-[#e52325e6] to-[#e5232500] h-[100vh] pb-5 flex flex-col items-center justify-centwe gap-11'>
            <SiteLogo className='md:w-[13%] md:h-[24%] w-[50%]' />
            <div className=' flex flex-col md:gap-5  gap-2 w-[100%] px-[20px]  md:px-[100px]'>
                <div className='flex gap-5 md:gap-2 items-center justify-between md:h-[50px] w-[100%] md:flex-row flex-col'>
                    <SortBy />
                    <div className='flex gap-2 items-center h-[50px] md:w-2/3 w-[100%]'>
                        <Search value={searchQuery} onChange={handleSearchChange} placeholder="Search by name, country, or service" />
                        <MainButton Icon={<AddIcon />} onClick={handleAddService} variant="contained" className='md:!w-[30%] w-[350%]' buttonText='Add Service' />
                    </div>
                </div>
                <TableComponent data={filteredData} />
            </div>
            <AlertCustom/>

        </div>
    )
}

export default Service