import { ChangeEvent, useState } from 'react';
import './App.css';
//import FilterGeneric from './components/Filter/FilterGeneric';
//import FilterSpecificThree from './components/FilterSpecificThree';
//import FilterSpecificTwo from './components/FilterSpecificTwo';
import DoFilter, { ItemType } from './components/DoFilter/DoFilter';

function App() {
  //const [choosenFilter, setChoosenFilter] = useState<string>('');
  
  // const handleChoosenFilter = (event: ChangeEvent) => {
  //   const choosenFilterType = (event.target as HTMLInputElement).value;
    
  //   console.log('Choosen Filter : ', choosenFilterType);
    
  //   setChoosenFilter(choosenFilterType);
  // }

  const handleSearch = (event: ChangeEvent) => {
    const text = (event.target as HTMLInputElement).value;
    console.log('Search Text : ', text);
  }

  const handleDropdown = (event: ChangeEvent) => {
    const option = (event.target as HTMLInputElement).value;
    console.log('Choosen Option : ', option);
  }

  const handleToDate = (event: ChangeEvent) => {
    const toDate = (event.target as HTMLDataElement).value;
    console.log('To Date: ', toDate);
  }

  const handleFromDate = (event: ChangeEvent) => {
    const fromDate = (event.target as HTMLDataElement).value;
    console.log('From Date: ', fromDate);
  }

  return (
    <div className='mt-4'>
      {/* <div className='py-4'>
        <span>
          <span className='px-2'>Three Filters</span>
          <input type="radio" value="three-filters" name="filter" onChange={handleChoosenFilter} />
        </span>
        <span className='px-4'>
          <span className='px-2'>Two Filters</span>
          <input type="radio" value="two-filters" name="filter" onChange={handleChoosenFilter} />
        </span>
      </div>

      <FilterGeneric 
        Component={ choosenFilter === 'three-filters' ? FilterSpecificThree : FilterSpecificTwo}
      /> */}
      <div className='w-full flex justify-center'>
        <DoFilter initFilter={
          [
            {
              id: 1,
              type: ItemType.Input,
              label: 'Search List',
              handlerFn: handleSearch
            },
            {
              id: 2,
              type: ItemType.Dropdown,
              label: 'Choose Car',
              handlerFn: handleDropdown,
              options: [
                { value: 'volvo', viewValue: 'Volvo' },
                { value: 'tesla', viewValue: 'Tesla' },
                { value: 'bmw', viewValue: 'BMW' },
              ]
            },
            {
              id: 3,
              type: ItemType.DatePicker,
              label: 'To',
              handlerFn: handleToDate
            },
            {
              id: 4,
              type: ItemType.DatePicker,
              label: 'From',
              handlerFn: handleFromDate
            },
            {
              id: 5,
              type: ItemType.Dropdown,
              label: 'Choose Car',
              handlerFn: handleDropdown,
              options: [
                { value: 'volvo', viewValue: 'Volvo' },
                { value: 'tesla', viewValue: 'Tesla' },
                { value: 'bmw', viewValue: 'BMW' },
              ]
            },
            {
              id: 6,
              type: ItemType.DatePicker,
              label: 'To',
              handlerFn: handleToDate
            },
            {
              id: 7,
              type: ItemType.Input,
              label: 'Search List',
              handlerFn: handleSearch
            },
          ]
        }/>
      </div>
    </div>
  )
}

export default App;
