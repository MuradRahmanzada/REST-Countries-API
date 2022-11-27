import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {apiURL} from '../util/api';

// Components
import Country from "../components/Country";
import Form from "../components/Form";



function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const getAllCountries = async () => {
    const res = await axios
      .get(`${apiURL}/all`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log({ err }));
  };

  const getCountryByRegion = async (regionName) => {
    const res = await axios.get(`${apiURL}/region/${regionName}`).then((res) => {
      setCountries(res.data)
    }).catch((err) => console.log({err}));
  }

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center md:items-start p-24">
      <Form
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSelect={getCountryByRegion}
      />
      <div className="flex flex-wrap justify-between gap-10 xl:gap-x-16 xl:gap-y-10 py-10 rounded-md">
        {countries
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.common.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((c) => {
            return (
              <Link to={`/${c.name.common}`}>
                <Country key={c.id} country={c} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default App;
