
const INITIAL_VALUE = {
  lastUpdated: new Date().toLocaleDateString(),
  name: '',
  country: '',
  serviceType: '',
  status: '',
  phone: '',
  email: '',
  website: '',
  location: '',
  contactPerson: '',
  operatingHours: '',
  Offered: '',
  serviceRatings: '',
  serviceReviewsCount: '',
  additionalNotes: ''
};

const BaseUrl = "http://localhost:5000";

const fields = [
  { label: 'Company Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Phone', name: 'phone', type: 'text' },
  { label: 'Country', name: 'country', type: 'dropdown' },
  { label: 'Service Type', name: 'serviceType', type: 'dropdown' },
  { label: 'Last Updated', name: 'lastUpdated', disabled: true },
  { label: 'Website', name: 'website' },
  { label: 'Location', name: 'location' },
  { label: 'Contact Person', name: 'contactPerson' },
  { label: 'Operating Hours', name: 'operatingHours' },
  { label: 'Services Offered', name: 'offered' },
  { label: 'Service Ratings', name: 'serviceRatings', type: 'number' },
  { label: 'Service Reviews Count', name: 'serviceReviewsCount', type: 'number' },
  { label: 'Additional Notes', name: 'additionalNotes' },
  { label: 'Status', name: 'status', type: 'switch' },
];




export default INITIAL_VALUE;
export { BaseUrl  , fields };
