import React, { useEffect, useMemo, useState } from "react";
import Satir from "./Satir";

const DateComp = ({
  value,
  months,
  dateindex,
  nextMonth,
  prevMonth,
  years,
  tableMonths,
  setselectedDate,
  setdateIndex,
}) => {
  const [date, setdate] = useState();
  const [startdate, setstartdate] = useState();
  const [datePicker, setDatePicker] = useState(years + '-' + (dateindex + 1 < 10 ? '0' + (dateindex + 1) : (dateindex + 1)));
  const [tMonths, setTMonths] = useState(tableMonths);
  const d = new Date();
  const isMonday = d.getDay() === 2;
  console.log(dateindex);

  //const [listDate,setListDate]=useState([])
  useEffect(() => {
    if (value) {
      const stdate = new Date(value.getFullYear(), value.getMonth(), 1);
      // console.log(stdate.getDate());
      // console.log(stdate);
      const hsayi = stdate.getDay();
      // console.log(stdate.getDate() - hsayi);
      setstartdate(new Date(stdate.setDate(stdate.getDate() - hsayi + 1)));
      setdate(value);
    }
  }, [value]);

  // const clickYear = ((e) => {
  //   console.log(e.target.value);
  // });

  const clickMonth = ((e) => {
    const dayArr = e.target.value.split('-');
    const stdate = new Date(dayArr[0], dayArr[1] - 1, 1);
    const hsayi = stdate.getDay();
    setstartdate(new Date(stdate.setDate(stdate.getDate() - hsayi + 1)));
    setdate(stdate);
    setDatePicker(e.target.value);
    setTMonths(months[dayArr[1] - 1]);
    setdateIndex(dayArr[1] - 1)
    console.log('tableMonths ', tableMonths);
  });

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
        <input className='form-control' value={datePicker} type="month" onChange={clickMonth} />
        {/* <input className='form-control' key={years} type="number" min='1900' max='2050' step='1' defaultValue={years} onChange={clickYear} /> */}
        <button onClick={nextMonth}><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <table>
        <thead className="days">
          {isMonday ? (<tr>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>Su</th>
          </tr>) : (<tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>)

          }

        </thead>
        <tbody>
          {listdate?.map((x, i) => (
            <Satir
              key={"r" + i}
              dates={x}
              years={years}
              tableMonths={tMonths}
              setselectedDate={setselectedDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DateComp;
