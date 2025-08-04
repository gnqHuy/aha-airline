import { useEffect, useState } from "react";
import { City } from "../../object/city";
import { getAllCities } from "../../api/cities.API";

export const useCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newCity, setNewCity] = useState<City>({ name: "", country: "", imageUrl: "" });
  const [editingCity, setEditingCity] = useState<City | null>(null);
  const [search, setSearch] = useState({ name: "", country: "" });

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await getAllCities();
        setCities(response.data);
      } catch {
        setError("Failed to load city data.");
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCity((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCity = () => {
    setCities((prev) => [...prev, newCity]);
    setNewCity({ name: "", country: "", imageUrl: "" });
  };

  const handleEditCity = (city: City) => {
    setEditingCity(city);
    setNewCity({ ...city });
  };

  const handleSaveEdit = () => {
    setCities((prev) =>
      prev.map((city) => (city === editingCity ? newCity : city))
    );
    setEditingCity(null);
    setNewCity({ name: "", country: "", imageUrl: "" });
  };

  const handleDeleteCity = (target: City) => {
    setCities((prev) => prev.filter((c) => c !== target));
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.name.toLowerCase()) &&
    city.country.toLowerCase().includes(search.country.toLowerCase())
  );

  return {
    cities: filteredCities,
    loading,
    error,
    newCity,
    editingCity,
    search,
    handleInputChange,
    handleSearchChange,
    handleAddCity,
    handleEditCity,
    handleSaveEdit,
    handleDeleteCity,
  };
};
