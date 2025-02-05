import React from 'react'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import ServiceForm from "../component/ServiceForm";
import MainButton from "../component/MainButton";
import HomeIcon from "@mui/icons-material/Home";
import useBackNavigation from "../hooks/useBackNavigation";
import AlertCustom from '../component/AlertCustom';
import { customBackButton } from '../utils/style';

function Edit_Service() {
    const { id } = useParams();
    const handleBack = useBackNavigation()
    const { data } = useContext(DataContext);

    const serviceToEdit = data.find((service) => service.id === parseInt(id));

    return (
        <div className="bg-gradient-to-t from-[#e52325e6] to-[#e5232500] pt-5 px-5 md:h-[100vh] flex flex-col gap-5">
            <MainButton
                Icon={<HomeIcon />}
                onClick={handleBack}
                buttonText="Back To Home"
                sx={customBackButton}
            />
            <div className="items-center flex flex-col-reverse md:flex-row justify-center ">
                <ServiceForm initialValues={serviceToEdit} />
            </div>
            <AlertCustom/>
        </div>
    )
}

export default Edit_Service