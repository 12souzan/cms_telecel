import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import TitleDetailsComponent from '../component/DetailsComponents/TitleDetailsComponent';
import OOps from './../assets/Oops.gif'
import ContentDetailsComponent from '../component/DetailsComponents/ContentDetailsComponent';
import EditServiceModal from '../component/DetailsComponents/EditServiceModal';
import AlertCustom from '../component/AlertCustom';

const ServiceDetailsPage = () => {
    const { data , updateService } = useContext(DataContext);
    const { id } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const service = data.find(service => service.id === parseInt(id));
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    // console.log("Matched Service:", service);

    return (
        <div>
            {service ? (
                <div className='py-10 px-5 flex flex-col items-center justify-center bg-[var(--bg-color)]'>
                    <TitleDetailsComponent
                        serviceName={service.name}
                        creationDate={service.lastUpdated}
                    />
                    <div>
                        <ContentDetailsComponent
                            serviceType={service.serviceType}
                            status={service.status}
                            servicePhone={service.phone}
                            serviceEmail={service.email}
                            serviceWebsite={service.website}
                            serviceLocation={service.location}
                            serviceContactPerson={service.contactPerson}
                            serviceOperatingHours={service.operatingHours}
                            serviceOffered={service.Offered}
                            serviceRatings={service.serviceRatings}
                            serviceReviewsCount={service.serviceReviewsCount}
                            additionalNotes={service.additionalNotes}
                            onClickEdit={handleOpenModal}
                        />
                    </div>
                    <EditServiceModal
                        open={openModal}
                        onClose={handleCloseModal}
                        initialValues={service}
                        updateService={updateService} 
                    />
                    <AlertCustom/>
                </div >
            ) :
                <div className='h-[100vh] bg-[#e523251c] flex items-center flex-col justify-center gap-4'>
                    <p className="text-center text-[40px] font-medium text-[#455a64]">Service not found</p>
                    <img src={OOps} alt='service_not_Found'></img>
                </div>
            }
        </div>
    );
};

export default ServiceDetailsPage;
