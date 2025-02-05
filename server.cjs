const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

let services = [
    {
        id: 1,
        name: "Tech Solutions Ltd.",
        country: "USA",
        serviceType: "Software Development",
        status: "Active",
        phone: "12345678",
        email: 'souzan@gmail.com',
        lastUpdated: "2025-01-15",
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
        name: "Global Telecom Corp.",
        country: "Canada",
        serviceType: "Telecom Services",
        status: "Inactive",
        phone: "12345678",
        email: 'souzan@gmail.com',
        lastUpdated: "2024-12-22",
        servicesOffered: "Mobile Network, Broadband Internet, Cloud Solutions",
        website: "https://globaltelecom.com",
        ratings: 3.8,
        reviewsCount: 85,
        location: "4567 Toronto St., Ontario, Canada",
        contactPerson: "Jane Smith",
        operatingHours: "Mon-Fri: 8am - 5pm",
        additionalNotes: "We are upgrading our infrastructure for better performance."
    },
    {
        id: 3,
        name: "Web Innovations Inc.",
        country: "UK",
        serviceType: "Web Development",
        status: "Active",
        phone: "12345678",
        email: 'souzan@gmail.com',
        lastUpdated: "2025-01-01",
        servicesOffered: "Website Design, E-Commerce Solutions, SEO Services",
        website: "https://webinnovations.com",
        ratings: 4.7,
        reviewsCount: 210,
        location: "789 London Road, London, UK",
        contactPerson: "Michael Brown",
        operatingHours: "Mon-Fri: 9am - 5pm",
        additionalNotes: "We offer fully responsive websites optimized for mobile."
    },
    {
        id: 4,
        name: "CloudTech Solutions",
        country: "Australia",
        serviceType: "Cloud Services",
        status: "Active",
        phone: "12345678",
        email: 'souzan@gmail.com',
        lastUpdated: "2024-11-10",
        servicesOffered: "Cloud Hosting, Cloud Storage, Cloud Security",
        website: "https://cloudtechsolutions.com",
        ratings: 4.3,
        reviewsCount: 120,
        location: "123 Sydney St., Sydney, Australia",
        contactPerson: "David Lee",
        operatingHours: "Mon-Fri: 9am - 6pm",
        additionalNotes: "We ensure data security and high uptime with our cloud solutions."
    },
    {
        id: 5,
        name: "Green Energy Providers",
        country: "Germany",
        serviceType: "Energy Solutions",
        status: "Inactive",
        phone: "12345678",
        email: 'souzan@gmail.com',
        lastUpdated: "2024-10-30",
        servicesOffered: "Solar Energy Systems, Wind Power Solutions, Energy Efficiency Consulting",
        website: "https://greenenergy.com",
        ratings: 4.2,
        reviewsCount: 95,
        location: "987 Berlin Blvd., Berlin, Germany",
        contactPerson: "Clara Schmidt",
        operatingHours: "Mon-Fri: 8am - 4pm",
        additionalNotes: "We specialize in sustainable energy solutions for both businesses and homes."
    },
    {
        id: 6,
        name: "Digital Marketing Experts",
        country: "India",
        serviceType: "Digital Marketing",
        status: "Active",
        phone: "12345678",
        email: 'souzan@gmail.com',
        lastUpdated: "2025-01-20",
        servicesOffered: "SEO, PPC Management, Social Media Marketing",
        website: "https://digitalmarketing.com",
        ratings: 4.8,
        reviewsCount: 320,
        location: "123 Mumbai St., Mumbai, India",
        contactPerson: "Amit Kumar",
        operatingHours: "Mon-Sun: 10am - 7pm",
        additionalNotes: "We have a proven track record of delivering high ROI on digital campaigns."
    }
];


app.get("/getAllServices", (req, res) => {
    res.status(200).json(services);
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
