const INITIAL_VALUE = {
  lastUpdated: new Date().toLocaleDateString(),
  name: '',
  country: { text: '', value: '' },
  serviceType: { text: '', value: '' },
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



export default INITIAL_VALUE;
export { BaseUrl };
