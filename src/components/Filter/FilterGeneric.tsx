export interface FilterGenericProps {
  Component: React.ComponentType;
}

const FilterGeneric = ({ Component }: FilterGenericProps) => {
  return(
    <div
      className="flex w-5/6 h-[60px] justify-between border-solid border-2 border-gray-200 rounded-md content-center p-3"
    >
      <Component/>
      <button className="mx-3 px-4 py-1 rounded-md bg-blue-700 text-white">Filter</button>
    </div>
      
  )
};

export default FilterGeneric;