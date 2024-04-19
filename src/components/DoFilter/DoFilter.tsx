import { ChangeEvent, useState } from "react";

export enum ItemType {
  Input = 'input',
  Dropdown = 'dropdown',
  DatePicker = 'datepicker',
}

export interface Option {
  value: string;
  viewValue: string;
}

export interface FilterItem {
  id: number;
  label: string;
  type: ItemType;
  options?: Option[],
  handlerFn: (event: ChangeEvent) => void;
}

export interface FilterProps {
  initFilter: FilterItem[];
  itemsPerRow?: number;
}

const getFiterElement = (filter: FilterItem) => {
  switch(filter.type) {
    case ItemType.Input: {
      return (
        <input
          className="border-solid border-2 border-gray-700 rounded-md px-2 py-1"
          type="text"
          placeholder="Search"
          onChange={filter.handlerFn}
        />
      );
    };
    case ItemType.Dropdown: {
      return (
        <select
          className="py-1 px-2 w-[150px] border-solid border-2 border-gray-700 rounded-md"
          onChange={filter.handlerFn}
        >
          {filter.options?.map((option: Option, index: number) => {
            return (
              <option value={option.value} key={index}>
                {option.viewValue}
              </option>
            )
          })}
        </select>
      )
    };
    case ItemType.DatePicker: {
      return (
        <input
          className="border-solid border-2 border-gray-700 rounded-md px-2 py-1"
          type="date"
          onChange={filter.handlerFn}
        />
      )
    };
  }
}

// Actual component implementation
export function DoFilter(props: FilterProps) {
  const { initFilter, itemsPerRow = 4 } = props;
  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(itemsPerRow);
  
  const [filtersRow, setFiltersRow ] = useState([...initFilter.slice(0, itemsPerRow)]);

  const handleMoreItem = () => {
    if (endIndex >= initFilter.length) {
      return;
    }

    startIndex = endIndex;
    endIndex = endIndex + itemsPerRow;
    setStartIndex(startIndex);
    setEndIndex(endIndex);

    const newRow = initFilter.slice(startIndex, endIndex);
    setFiltersRow(prevRow => [ ...prevRow, ...newRow ]);
  }

  return(
    <div className="w-full mx-2 my-2 flex border-2 border-solid border-slate-200 p-4 justify-between">
      <div className="flex flex-wrap">
       { filtersRow.map((filterItem: FilterItem) => {
        return (
          <div className="flex-col mx-2" key={filterItem.id}>
            <label className="text-sm">{filterItem.label}</label>
            <div>
              {getFiterElement(filterItem)}
            </div>
          </div>
        );
       })}
      </div>
      <div className="flex items-center">
        {endIndex < initFilter.length && (
          <div
            className="mx-3 px-4 py-1 text-sm text-violet-700 hover: cursor-pointer hover: underline"
            onClick={handleMoreItem}
          >
            + More Options
          </div>
        )}
      </div>
    </div>
  )
}

export default DoFilter;