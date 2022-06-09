import React, { useEffect, useMemo, useState } from "react";
// import './style.css'
import Satir from "./Satir";


const DateComp = ({
  value,
  nextMonth,
  prevMonth,
  years,
  tableMonths,
  setselectedDate,
}) => {
  const [date, setdate] = useState();
  const [startdate, setstartdate] = useState();
  console.log(date);

  //const [listDate,setListDate]=useState([])
  useEffect(() => {
    if (value) {
      const stdate = new Date(value.getFullYear(), value.getMonth(), 1);
      // console.log(stdate.getDate());
      // console.log(stdate);
      const hsayi = stdate.getDay();
      // console.log(stdate.getDate() - hsayi);
      setstartdate(new Date(stdate.setDate(stdate.getDate() - hsayi)));
      setdate(value);
    }
  }, [value]);

  const listdate = useMemo(() => {
    const newList = [];
    let satir = [];

    let k = 0;
    if (startdate) {
      for (let i = 0; i < 6; i++) {
        satir = [];
        for (let j = 0; j < 7; j++) {
          const dt = new Date(startdate);
          satir.push(dt.setDate(dt.getDate() + k));
          k++;
        }
        newList.push(satir);
      }
    }
    return newList;
  }, [startdate]);
  // console.log(listdate);
  // console.log(new Date(1640473200000));

  return (
    <div className="dateCon">
      <div className="tableButtons">
        <button onClick={prevMonth}><i class="fa-solid fa-arrow-left"></i></button>
        {tableMonths}, {years}
        <button onClick={nextMonth}><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <table>
        <thead className="days">
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
          {listdate?.map((x, i) => (
            <Satir
              key={"r" + i}
              dates={x}
              years={years}
              tableMonths={tableMonths}
              setselectedDate={setselectedDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DateComp;
