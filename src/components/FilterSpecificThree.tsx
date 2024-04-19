import { ChangeEvent } from "react";

const FilterSpecificThree = () => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    console.log('Search : ', searchText);
  };

  const handleCarChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCar = event.target.value;
    console.log('Selected Car : ', selectedCar);
  }

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    console.log('Selected Country : ', selectedCountry);
  }

  return (
    <div className="flex gap-4">
      <div>
        <input
          className="border-solid border-2 border-gray-700 rounded-md px-2 py-1"
          type="text"
          placeholder="Search.."
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div>
        <select
          className="py-1 px-2 border-solid border-2 border-gray-700 rounded-md"
          onChange={handleCarChange}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div>
        <select
          className="py-1 px-2 border-solid border-2 border-gray-700 rounded-md"
          onChange={handleCountryChange}
        >
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSpecificThree;