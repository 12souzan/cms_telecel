import dummyData from './env'
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
