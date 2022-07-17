import React from 'react'

const Satir = ({ dates, years, setselectedDate, tableMonths }) => {

    const showDate = (e) => {
        console.log(e.target.textContent);
        const day = e.target.textContent
        const selectedDate = tableMonths + " " + day + "," + years
        console.log('selectedDate', selectedDate)
        setselectedDate(selectedDate)
    }

    return (
        <tr>
            {dates.map((x, i) =>
                <td key={"g" + i} className="text-center">
                    <button onClick={(e) => showDate(e)} className="dayButton"> {new Date(x).getDate()} </button>
                </td>)}
        </tr>
    )
}

export default Satir;