import { useState } from 'react';
import './App.css';
import DateComp from './components/DateComp/DateComp';
import TimeComp from './components/TimeComp/TimeComp';


function App() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const [selectedDate, setselectedDate] = useState(" please select a Date")
  const [dateindex, setdateIndex] = useState(5)
  const [years, setYears] = useState(2022)
  const [hours, setHours] = useState("please select time")

  const nextMonth = () => {
    setdateIndex(dateindex + 1)
    console.log(dateindex);
    if (dateindex === 11) {
      setdateIndex(0)
      setYears(years + 1)
    }
  }

  const prevMonth = () => {
    setdateIndex(dateindex - 1)
    console.log(dateindex);

    if (dateindex === 0) {
      setdateIndex(11)
      setYears(years - 1)
    }
  }

  const tableMonths = months[dateindex]
  console.log(tableMonths);

  const dt = new Date(months[dateindex] + " 1, " + years)
  return (
    <main className='main'>
      <div className='dateTable'>
        <h3>  {selectedDate} <span>{hours}</span> </h3>
      </div>
   <section className="table">

   <DateComp
        value={dt}
        nextMonth={nextMonth} months={months} dateindex={dateindex}
        prevMonth={prevMonth}
        years={years}
        tableMonths={tableMonths}
        selectedDate={selectedDate}
        setselectedDate={setselectedDate}
      />

      <TimeComp
        hours={hours}
        setHours={setHours}
      />
   </section>
    </main>
  );
}
export default App;