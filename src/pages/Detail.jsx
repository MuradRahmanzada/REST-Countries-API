import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { apiURL } from "../util/api";
import axios from "axios";

const Detail = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  const getDetailCountry = async () => {
    const baseURL = `${apiURL}/name/${name}`;
    const res = await axios
      .get(baseURL)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailCountry();
  }, []);

  return (
    <div>
      <div className="h-screen w-full py-4 md:py-10 xl:py-24 px-4 md:px-10 xl:px-24 dark:text-slate-200">
        <Link to="/">
          <button className="flex items-center gap-2 shadow-lg rounded-md border-2 border-gray-200 dark:bg-DarkBlue dark:border-none py-2 px-10">
            <BsArrowLeft />
            <span className="dark:text-slate-200">Back</span>
          </button>
        </Link>

        {country &&
          country.map((c) => {
            return (
              <div
                className="flex flex-col md:flex-row gap-[50px] md:gap-y-14 xl:gap-y-0 py-10"
                key={c.common.name}
              >
                <div>
                  <img
                    src={c.flags.png}
                    alt=""
                    className="w-[250px] md:w-[500px] lg:w-[650px]"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold">
                      {c.name.common}
                    </h1>
                  </div>

                  <div className="flex flex-col md:flex-row py-8 gap-7">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold dark:text-slate-200">
                          Native Name:
                        </p>
                        <span className="dark:text-gray-300">
                          {c.altSpellings[2]}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="font-semibold dark:text-slate-200">
                          Population:
                        </p>
                        <span className="dark:text-gray-300">
                          {c.population}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="font-semibold dark:text-slate-200">
                          Region:
                        </p>
                        <span className="dark:text-gray-300">{c.region}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="font-semibold dark:text-slate-200">
                          Sub Region:
                        </p>
                        <span className="dark:text-gray-300">
                          {c.subregion}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="font-semibold dark:text-slate-200">
                          Capital:
                        </p>
                        <span className="dark:text-gray-300">{c.capital}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold dark:text-slate-200">
                          Top Level Domain:
                        </p>
                        <span className="dark:text-gray-300">{c.tld}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="font-semibold dark:text-slate-200">
                          Currencies:
                        </p>
                        <span className="dark:text-gray-300">
                          {""}
                          {c.currencies[Object.keys(c.currencies)[0]].name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="font-semibold dark:text-slate-200">
                          Languages:
                        </p>
                        {Object.keys(c.languages).map((lang) => (
                          <span key={lang} className="dark:text-gray-300">
                            {c.languages[lang]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-lg font-semibold dark:text-slate-200">
                        Border Countries:
                      </p>
                      {c.borders?.map((country) => (
                        <button className="py-1 px-6 dark:bg-DarkBlue border border-gray-200 dark:border-none shadow-lg rounded-md dark:text-gray-300">
                          {country}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Detail;
