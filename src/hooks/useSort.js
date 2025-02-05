// useSort.js
import { useMemo } from 'react';

const useSort = (data, selectedOption, sortOrder) => {
  return useMemo(() => {
    if (!data || data.length === 0) return [];
    
    const sortedData = [...data];
    
    sortedData.sort((a, b) => {
      if (selectedOption === "Name") {
        return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (selectedOption === "Country") {
        return sortOrder === "asc" ? a.country.localeCompare(b.country) : b.country.localeCompare(a.country);
      } else if (selectedOption === "Last Updated") {
        const dateA = new Date(a.lastUpdated);
        const dateB = new Date(b.lastUpdated);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      }
      return 0; 
    });

    return sortedData;
  }, [data, selectedOption, sortOrder]); 
};

export default useSort;
