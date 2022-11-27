import React from "react";

const Country = ({ country }) => {
  return (
    <div className="w-[250px] h-[350px] shadow-lg cursor-pointer dark:bg-DarkBlue dark:text-slate-200 rounded-md">
        <img src={country.flags.png} alt="" className="w-full rounded-t-md" />
        <div className="p-7">
          <h1 className="font-bold my-3">{country.name.common}</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Population:</p>
            <span>{country.population}</span>
          </div>
          <div className="flex items-center  gap-2">
            <p className="font-semibold">Region:</p>
            <span>{country.region}</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Capital:</p>
            <span>{country.capital}</span>
          </div>
        </div>
    </div>
  );
};

export default Country;
