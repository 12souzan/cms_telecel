
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/getAllServices", (req, res) => {
    res.status(200).json(dummyData);
});



app.post("/addService", (req, res) => {
    const newService = req.body;
    console.log('newService', newService);

    const requiredKeys = ["id", "name", "country", "serviceType", "status", "lastUpdated"];
    if (!requiredKeys.every(key => key in newService)) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    services.push(newService);
    res.status(201).json({ message: "Service added successfully", service: newService }); 
});


app.post("/editService/:id", (req, res) => {
    const { id } = req.params;
    const { name, country, serviceType, status, phone , email, lastUpdated ,
         servicesOffered,
        website ,
        ratings,
        reviewsCount,
        location,
        contactPerson,
        operatingHours,
        additionalNotes
    
    } = req.body;

    const index = services.findIndex(service => service.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Service not found" });
    }

    services[index] = {
        ...services[index],
        name,
        country,
        serviceType,
        status,
        email,
        phone,
        lastUpdated: new Date().toLocaleString(),
        servicesOffered,
        website ,
        ratings,
        reviewsCount,
        location,
        contactPerson,
        operatingHours,
        additionalNotes
    };

    res.status(200).json({
        message: "Service updated successfully",
        updatedService: services[index],
    });
});


app.delete("/removeService/:id", (req, res) => {
    const { id } = req.params;
        const index = services.findIndex(service => service.id === parseInt(id));
        if (index === -1) {
        return res.status(404).json({ error: "Service not found" });
    }
    const removedService = services.splice(index, 1);
    res.status(200).json({ message: "Service removed successfully", service: removedService[0] });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


const dummyData = [
  {
    id: 1,
    name: "Tech Solutions Ltd.",
    country: "USA",
    serviceType: "Software Development",
    status: "Active",
    phone: "12345678",
    email: 'souzan@gmail.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Custom Software Development, IT Consulting, System Integration",
    website: "https://techsolutions.com",
    ratings: 4.5,
    reviewsCount: 150,
    location: "1234 Silicon Valley, CA, USA",
    contactPerson: "John Doe",
    operatingHours: "Mon-Fri: 9am - 6pm",
    additionalNotes: "We specialize in enterprise-level solutions and cloud computing."
  },
  {
    id: 2,
    name: "Innovative Tech Services",
    country: "Canada",
    serviceType: "IT Solutions",
    status: "Active",
    phone: "23456789",
    email: 'innovatech@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Cloud Computing, IT Security, Software Development",
    website: "https://innovativetech.ca",
    ratings: 4.7,
    reviewsCount: 120,
    location: "789 Tech Street, Toronto, Canada",
    contactPerson: "Sarah Connor",
    operatingHours: "Mon-Fri: 8am - 5pm",
    additionalNotes: "Leading provider in secure cloud solutions."
  },
  {
    id: 3,
    name: "Global Solutions Inc.",
    country: "Australia",
    serviceType: "Consulting",
    status: "Inactive",
    phone: "34567890",
    email: 'globalsolutions@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Business Consulting, Strategy Development",
    website: "https://globalsolutions.com.au",
    ratings: 3.9,
    reviewsCount: 85,
    location: "22 Harbour Road, Sydney, Australia",
    contactPerson: "Michael Johnson",
    operatingHours: "Mon-Fri: 10am - 4pm",
    additionalNotes: "Helping businesses with long-term growth strategies."
  },
  {
    id: 4,
    name: "NextGen Technologies",
    country: "UK",
    serviceType: "Web Development",
    status: "Active",
    phone: "45678901",
    email: 'nextgen@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Web Design, E-commerce Solutions, SEO Optimization",
    website: "https://nextgen-tech.co.uk",
    ratings: 4.2,
    reviewsCount: 200,
    location: "56 Oxford Street, London, UK",
    contactPerson: "Emma Watson",
    operatingHours: "Mon-Fri: 9am - 5pm",
    additionalNotes: "Delivering user-friendly websites with a focus on performance."
  },
  {
    id: 5,
    name: "Smart Data Solutions",
    country: "Germany",
    serviceType: "Data Analytics",
    status: "Active",
    phone: "56789012",
    email: 'smartdata@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Data Analysis, AI Solutions, Business Intelligence",
    website: "https://smartdata.de",
    ratings: 4.6,
    reviewsCount: 180,
    location: "123 Data Street, Berlin, Germany",
    contactPerson: "Hans Muller",
    operatingHours: "Mon-Fri: 8am - 6pm",
    additionalNotes: "Empowering businesses with actionable data insights."
  },
  {
    id: 6,
    name: "Digital Strategies Ltd.",
    country: "India",
    serviceType: "Digital Marketing",
    status: "Active",
    phone: "67890123",
    email: 'digitalstrategies@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "SEO Services, Content Marketing, Social Media Marketing",
    website: "https://digitalstrategies.in",
    ratings: 4.3,
    reviewsCount: 250,
    location: "88 Digital Avenue, Mumbai, India",
    contactPerson: "Rajesh Kumar",
    operatingHours: "Mon-Fri: 9am - 6pm",
    additionalNotes: "Helping brands grow with innovative marketing strategies."
  },
  {
    id: 7,
    name: "Tech Innovators",
    country: "Singapore",
    serviceType: "App Development",
    status: "Active",
    phone: "78901234",
    email: 'techinnovators@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Mobile App Development, UX/UI Design",
    website: "https://techinnovators.sg",
    ratings: 4.8,
    reviewsCount: 190,
    location: "12 Innovation Blvd, Singapore",
    contactPerson: "Liam Tan",
    operatingHours: "Mon-Fri: 10am - 7pm",
    additionalNotes: "Specializing in custom mobile apps for businesses."
  },
  {
    id: 8,
    name: "Creative Design Studio",
    country: "France",
    serviceType: "Graphic Design",
    status: "Active",
    phone: "89012345",
    email: 'creativedesign@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Logo Design, Brand Identity, Print Media Design",
    website: "https://creativedesign.fr",
    ratings: 4.4,
    reviewsCount: 220,
    location: "101 Artistic Lane, Paris, France",
    contactPerson: "Sophie Martin",
    operatingHours: "Mon-Fri: 9am - 5pm",
    additionalNotes: "We create designs that reflect your brand's identity."
  },
  {
    id: 9,
    name: "FutureTech Robotics",
    country: "Japan",
    serviceType: "Robotics",
    status: "Inactive",
    phone: "90123456",
    email: 'futuretech@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Robot Design, Automation Solutions",
    website: "https://futuretechrobots.jp",
    ratings: 4.1,
    reviewsCount: 160,
    location: "9 Robot Street, Tokyo, Japan",
    contactPerson: "Takashi Ito",
    operatingHours: "Mon-Fri: 9am - 5pm",
    additionalNotes: "Pioneering innovation in robotics and automation."
  },
  {
    id: 10,
    name: "CloudX Solutions",
    country: "USA",
    serviceType: "Cloud Computing",
    status: "Active",
    phone: "01234567",
    email: 'cloudx@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Cloud Infrastructure, Data Storage, Backup Solutions",
    website: "https://cloudxsolutions.com",
    ratings: 4.9,
    reviewsCount: 210,
    location: "500 Cloud Drive, San Francisco, USA",
    contactPerson: "Alice Johnson",
    operatingHours: "Mon-Fri: 8am - 6pm",
    additionalNotes: "Delivering secure, scalable cloud solutions."
  },
  {
    id: 11,
    name: "Visionary Tech Labs",
    country: "South Korea",
    serviceType: "AI Solutions",
    status: "Active",
    phone: "23456789",
    email: 'visionarytech@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "AI Development, Machine Learning, Robotics",
    website: "https://visionarytech.kr",
    ratings: 4.7,
    reviewsCount: 230,
    location: "78 Tech Park, Seoul, South Korea",
    contactPerson: "Jin Lee",
    operatingHours: "Mon-Fri: 9am - 5pm",
    additionalNotes: "Creating smarter solutions with AI technology."
  },
  {
    id: 12,
    name: "RedTech Solutions",
    country: "USA",
    serviceType: "Tech Solutions",
    status: "Active",
    phone: "12343210",
    email: 'redtech@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Tech Support, Network Security, Software Solutions",
    website: "https://redtechsolutions.com",
    ratings: 4.4,
    reviewsCount: 300,
    location: "7775 Red Avenue, New York, USA",
    contactPerson: "Amanda Stevens",
    operatingHours: "Mon-Fri: 9am - 6pm",
    additionalNotes: "Reliable tech support for businesses of all sizes."
  },
  {
    id: 13,
    name: "Pixel Perfect Studios",
    country: "Italy",
    serviceType: "Design & Branding",
    status: "Active",
    phone: "99887766",
    email: 'pixelperfect@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Graphic Design, Brand Development, Website Design",
    website: "https://pixelperfectstudios.it",
    ratings: 4.8,
    reviewsCount: 175,
    location: "500 Design Street, Rome, Italy",
    contactPerson: "Giovanni Rossi",
    operatingHours: "Mon-Fri: 8am - 5pm",
    additionalNotes: "Transforming brands with pixel-perfect designs."
  },
  {
    id: 14,
    name: "GreenTech Innovations",
    country: "Brazil",
    serviceType: "Sustainability Solutions",
    status: "Active",
    phone: "789567123",
    email: 'greentech@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Solar Panel Installation, Green Consulting",
    website: "https://greentech.com.br",
    ratings: 4.6,
    reviewsCount: 110,
    location: "123 Green Street, Sao Paulo, Brazil",
    contactPerson: "Lucas Silva",
    operatingHours: "Mon-Fri: 9am - 5pm",
    additionalNotes: "Leading the way to a greener future."
  },
  {
    id: 15,
    name: "Smart Solutions Inc.",
    country: "USA",
    serviceType: "Tech Solutions",
    status: "Active",
    phone: "23344556",
    email: 'smartsolutions@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Web Solutions, Cloud Services",
    website: "https://smartsolutions.com",
    ratings: 4.5,
    reviewsCount: 185,
    location: "345 Smart Ave, Chicago, USA",
    contactPerson: "William Brown",
    operatingHours: "Mon-Fri: 9am - 6pm",
    additionalNotes: "Innovating the digital landscape for businesses."
  },
  {
    id: 16,
    name: "Zenith Innovations",
    country: "India",
    serviceType: "Technology Solutions",
    status: "Active",
    phone: "11223344",
    email: 'zenithinnovations@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Cloud Solutions, IT Security, Data Analytics",
    website: "https://zenithinnovations.in",
    ratings: 4.9,
    reviewsCount: 150,
    location: "45 Cloud Road, Bangalore, India",
    contactPerson: "Priya Singh",
    operatingHours: "Mon-Fri: 9am - 5pm",
    additionalNotes: "Pioneering innovative solutions for the digital era."
  },
  {
    id: 17,
    name: "AI Solutions Group",
    country: "USA",
    serviceType: "Artificial Intelligence",
    status: "Active",
    phone: "98765432",
    email: 'aisolutions@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "AI Development, Machine Learning, NLP Solutions",
    website: "https://aisolutionsgroup.com",
    ratings: 4.7,
    reviewsCount: 210,
    location: "123 AI Lane, Seattle, USA",
    contactPerson: "David Lee",
    operatingHours: "Mon-Fri: 8am - 5pm",
    additionalNotes: "Bringing the future of AI to your business today."
  },
  {
    id: 18,
    name: "TechnoSpark Ltd.",
    country: "Germany",
    serviceType: "Software Development",
    status: "Inactive",
    phone: "22334455",
    email: 'technospark@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Custom Software, Mobile Solutions",
    website: "https://technospark.de",
    ratings: 3.8,
    reviewsCount: 145,
    location: "67 Spark Road, Munich, Germany",
    contactPerson: "Martin Schneider",
    operatingHours: "Mon-Fri: 9am - 6pm",
    additionalNotes: "Innovative software solutions for businesses."
  },
  {
    id: 19,
    name: "BlueWave Solutions",
    country: "Japan",
    serviceType: "Tech Solutions",
    status: "Active",
    phone: "55443322",
    email: 'bluewavesolutions@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Software Development, IT Consulting",
    website: "https://bluewavesolutions.jp",
    ratings: 4.4,
    reviewsCount: 130,
    location: "89 Tech Park, Osaka, Japan",
    contactPerson: "Haruki Tanaka",
    operatingHours: "Mon-Fri: 10am - 7pm",
    additionalNotes: "Shaping the future of technology solutions."
  },
  {
    id: 20,
    name: "Optima Solutions",
    country: "USA",
    serviceType: "Business Solutions",
    status: "Active",
    phone: "10293847",
    email: 'optimasolutions@example.com',
    lastUpdated: "02/05/2025, 08:59:40 PM",
    servicesOffered: "Consulting, Strategy Planning, Business Process Management",
    website: "https://optimalsolutions.com",
    ratings: 4.6,
    reviewsCount: 170,
    location: "333 Optima Lane, San Diego, USA",
    contactPerson: "Sophia Taylor",
    operatingHours: "Mon-Fri: 9am - 6pm",
    additionalNotes: "Helping your business optimize for success."
  }
];

