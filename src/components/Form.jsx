import { BiSearch } from "react-icons/bi";

const Form = ({ searchTerm, setSearchTerm, onSelect }) => {

  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };


  return (
    <form className="flex flex-col md:flex-row items-center gap-5">
      
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pl-3 pointer-events-none">
          <BiSearch className="text-gray-500 dark:text-slate-200" />
        </div>
        <input
          className="w-[300px] p-4 pl-14 shadow-md text-sm rounded-lg outline-none dark:bg-DarkBlue dark:text-slate-200 placeholder:dark:text-slate-200"
          placeholder="Search for a country..."
          required
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      
      <select
        className="shadow-lg rounded-md outline-none p-4 text-sm font-semibold cursor-pointer dark:bg-DarkBlue dark:text-slate-200"
        onChange={selectHandler}
      >
        <option selected className="font-semibold">
          Filter by Region
        </option>
        <option value="Africa" className="font-semibold">
          Africa
        </option>
        <option value="America" className="font-semibold">
          America
        </option>
        <option value="Asia" className="font-semibold">
          Asia
        </option>
        <option value="Europe" className="font-semibold">
          Europe
        </option>
        <option value="Oceania" className="font-semibold">
          Oceania
        </option>
      </select>
    </form>
  );
};

export default Form;
