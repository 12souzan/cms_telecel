import { useNavigate } from "react-router-dom";

//for country (dropdown)
export const handleCountryChange = (event, data, setData) => {
    const country = event.target.value;
    setData({
        ...data,
        country: country,
    });
};

//for services type (dropdown)
export const handleTypeChange = (event, data, setData, types) => {
    const selectedId = event.target.value;
    const selectedType = types.find((type) => type.value === selectedId);
    if (selectedType) {
        setData({
            ...data,
            serviceType: selectedType.value,
        });
    }
};

// for switch(active inactive)
export const handleToggleChange = (event, data, setData) => {
    setData({
        ...data,
        status: event.target.checked,
    });
};

//validation form
export const validateForm = (data) => {
  const errors = {};

  // Validate company name (or Service Name)
  if (!data.name || !data.name.trim()) {
    errors.name = "Company Name is required";
  }
  // Validate email
  if (!data.email || !data.email.trim()) {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
  }
  if (!data.phone || !data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (isNaN(data.phone)) {
    errors.phone = "Phone number must be a valid number";
  }

  if (!data.country || !data.country.text) {
    errors.country = "Country is required";
  }
  // Validate service 
  if (!data.serviceType || !data.serviceType.text) {
    errors.serviceType = "Service Type is required";
  }
  // Validate website URL if provided
  if (data.website && data.website.trim()) {
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlRegex.test(data.website.trim())) {
      errors.website = "Invalid website URL";
    }
  }
  // // Validate ratings 
  // if (data.ratings && data.ratings.toString().trim() !== "") {
  //   if (isNaN(Number(data.ratings))) {
  //     errors.ratings = "Service Ratings must be a valid number";
  //   }
  // }
  // // Validate reviews count
  // if (data.reviewsCount && data.reviewsCount.toString().trim() !== "") {
  //   if (isNaN(Number(data.reviewsCount))) {
  //     errors.reviewsCount = "Service Reviews Count must be a valid number";
  //   }
  // }

  return errors;
};

export const handleChangeData = (e , setData) => {
  const { name, value } = e.target;
  setData(prevData => ({
    ...prevData,
    [name]: value
  }));
};



export default { handleCountryChange  , handleTypeChange , handleToggleChange ,validateForm  , handleChangeData};


