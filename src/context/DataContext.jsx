// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import useFilteredData from '../hooks/useSearch';
import useSort from '../hooks/useSort';
import { BaseUrl } from '../../env';


const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [nextId, setNextId] = useState(1);
    const [services, setServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [selectedOption, setSelectedOption] = useState("Name");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        fetch(`${BaseUrl}/getAllServices`)
            .then((response) => response.json())
            .then((fetchedData) => {
                const mappedData = fetchedData.map((item) => ({
                    id: item.id,
                    name: item.name,
                    country: item.country?.text || item.country,
                    serviceType: item.serviceType?.text || item.serviceType,
                    status: item.status,
                    phone: item.phone,
                    email: item.email,
                    lastUpdated: item.lastUpdated,
                    website:item.website,
                    location:item.location,
                    contactPerson:item.contactPerson,
                    operatingHours:item.operatingHours,
                    Offered:item.servicesOffered,
                    serviceRatings:item.ratings,
                    serviceReviewsCount:item.reviewsCount,
                    additionalNotes:item.additionalNotes

                }));
                setData(mappedData);
                console.log(mappedData)
                setNextId(mappedData.length + 1);
                // console.log('mappedData lenght', mappedData.length)
            })
            .catch((err) => {
                setError('Error fetching data.');
            });
        console.log('data', data)
    }, []);

    // Add a new service with an incremented ID
    const addService = (newService) => {
        const serviceWithId = { ...newService, id: nextId };
        fetch(`${BaseUrl}/addService`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceWithId),
        })
            .then(response => response.json())
            .then(data => {
                setServices((prevServices) => [...prevServices, data.service]);
                setNextId((prevId) => prevId + 1);
                setAlertMessage('Service Added successfully!');
                setAlertSeverity('success');
                setAlertOpen(true);
            })
            .catch(error => {
                console.error("Error adding service:", error);
                setAlertMessage('Error adding service!');
                setAlertSeverity('error');
                setAlertOpen(true);
            });
    };

    //EDIT service
    const updateService = (id, updatedService) => {
        console.log('Updating service with ID:', id);
        console.log('Updated Service:', updatedService);

        fetch(`${BaseUrl}/editService/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedService),
        })
            .then(response => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Response data:', data);
                setServices((prevServices) =>
                    prevServices.map((service) =>
                        service.id === id ? { ...service, ...updatedService } : service
                    )
                );
                setAlertMessage('Service updated successfully!');
                setAlertSeverity('success');
                setAlertOpen(true);
            })
            .catch(error => {
                console.error('Error updating service:', error);
                setAlertMessage('Error updating service!');
                setAlertSeverity('error');
                setAlertOpen(true);
            });
    };

    //delete service
    const handleDelete = (id) => {
        fetch(`${BaseUrl}/removeService/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    setData((prevData) => prevData.filter((item) => item.id !== id));
                    console.log(`Deleted service with ID: ${id}`);
                    setAlertMessage('Service deleted successfully!');
                    setAlertSeverity('success');
                    setAlertOpen(true);
                } else {
                    console.error('Failed to delete service');
                    setAlertMessage('Error deleting service');
                    setAlertSeverity('error');
                    setAlertOpen(true);
                }
            })
            .catch((err) => {
                console.error('Error deleting service:', err);
                setAlertMessage('Error deleting service');
                setAlertSeverity('error');
                setAlertOpen(true);
            });
    }


    //sortDAta (name , country , lastUpdate)
    const sortedData = useSort(data, selectedOption, sortOrder);

    //search by name country or servive
    const filteredData = useFilteredData(sortedData, searchQuery);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    // Change sort order
    const changeSortOrder = (order) => {
        setSortOrder(order);
    };

    // Change sort option
    const changeSortOption = (option) => {
        setSelectedOption(option);
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    return (
        <DataContext.Provider value={{
            data: filteredData,
            addService,
            selectedOption,
            sortOrder,
            error,
            searchQuery,
            changeSortOrder,
            changeSortOption,
            updateService,
            handleSearchChange,
            handleDelete,
            alertOpen,
            alertMessage,
            alertSeverity,
            handleAlertClose,
            nextId,
            setNextId
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
