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

  // Validate company name
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

  // Validate phone number (ensure it's numeric)
  if (!data.phone || !data.phone.trim()) {
      errors.phone = "Phone number is required";
  } else if (isNaN(data.phone)) {
      errors.phone = "Phone number must be a valid number";
  }

  // console.log('data country',data.country)
  // console.log('data serviceType',data.serviceType)

  // Validate country and type
  if (!data.country.text) {
      errors.country = "Country is required";
  }
  if (!data.serviceType.text) {
      errors.serviceType = "Service Type is required";
  }

  return errors;
};


export default { handleCountryChange  , handleTypeChange , handleToggleChange ,validateForm };


