import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import TitleDetailsComponent from '../component/DetailsComponents/Details_Title';
import OOps from './../assets/Oops.gif';
import ContentDetailsComponent from '../component/DetailsComponents/Content_Details_Page';
import EditServiceModal from '../component/DetailsComponents/Details_Model';
import AlertCustom from '../component/AlertCustom';

const Service_Details = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [service, setService] = useState(null);

  useEffect(() => {
    const updatedService = data.find(service => service.id === parseInt(id));
    setService(updatedService);
  }, [data, id]);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      {service ? (
        <div className='py-10 px-5 flex flex-col py-[50px] items-center justify-center bg-[var(--bg-color)]'>
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
              country={service.country}
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
          />
          <AlertCustom />
        </div>
      ) : (
        <div className='h-[100vh] bg-[#e523251c] flex items-center flex-col justify-center gap-4'>
          <p className="text-center text-[40px] font-medium text-[#455a64]">Service not found</p>
          <img src={OOps} alt='service_not_Found' />
        </div>
      )}
    </div>
  );
};

export default Service_Details
