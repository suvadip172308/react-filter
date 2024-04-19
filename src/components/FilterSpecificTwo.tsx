const FilterSpecificTwo = () => {
  return (
    <div className="flex gap-4">
      <div>
        <select className="py-1 px-2 border-solid border-2 border-gray-700 rounded-md">
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
        </select>
       </div>
       <div>
        <input
          className="border-solid border-2 border-gray-700 rounded-md px-2 py-1"
          type="text"
          placeholder="Search.."
        />
       </div>
    </div>
  );
};

export default FilterSpecificTwo;