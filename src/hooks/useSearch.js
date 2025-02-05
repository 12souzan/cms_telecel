import { useMemo } from 'react';

function useFilteredData(data, searchQuery) {
    
  // Filter the data based on the search query
  return useMemo(() => {
    return data.filter((item) => {
      return (
        item && item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item && item.country && item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item && item.serviceType && item.serviceType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [data, searchQuery]);
}

export default useFilteredData;
