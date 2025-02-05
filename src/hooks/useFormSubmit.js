import { useState } from "react";
import {validateForm} from './../utils/functions'
import INITIAL_VALUE from "../../env";

const useFormSubmit = (data, setData, addService, updateService, nextId, setNextId) => {
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm(data);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {

      if (data.id) {
        updateService(data.id, {
          ...data,
          country: data.country?.text || data.country,
          serviceType: data.serviceType?.text || data.serviceType,
        });
      }
      
      
      else {
        addService({
          id: nextId,
          name: data.name,
          country: data.country.text,
          email:data.email,
          serviceType: data.serviceType.text,
          phone:data.phone,
          status: data.status ? 'Active' : 'Inactive',
          lastUpdated: new Date().toLocaleString(),
          website:data.website || '',
          location:data.location || '',
          contactPerson:data.contactPerson || '',
          operatingHours:data.operatingHours || '',
          Offered:data.servicesOffered || '',
          serviceRatings:data.ratings || '' ,
          serviceReviewsCount:data.reviewsCount ||'',
          additionalNotes:data.additionalNotes || ''
        });
        setNextId((prevId) => prevId + 1);
        setData(INITIAL_VALUE);

      }
      // console.log('next id', nextId);
    }
  };

  return { handleFormSubmit, errors };
};

export default useFormSubmit;