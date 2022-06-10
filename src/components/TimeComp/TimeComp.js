import React, { useState, useMemo } from 'react'


const TimeComp = ({ setHours }) => {

    const showHours = (e) => {
        setHours(
            e.target.textContent
        )
    }


    const timeShow = useMemo(() => {
        const hourList = []
        for (let i = 0; i < 24; i++) {
            const hour = String(i)
            // const minuteList= []
            let k = "0".padStart(2, 0)
            for (let j = 0; j < 4; j++) {
                const minute = String(k)
                if (hour < 10) {
                    hourList.push('0' + hour + ":" + minute)
                    k = Number(k) + 15
                } else {
                    hourList.push(hour + ":" + minute)
                    k = Number(k) + 15
                }
            }

        }
        return hourList
    })

    return (
        <div className="scroll-container">
            <p className="timeTitle">Time</p>
            {timeShow.map((item, index) =>
                <div className="scroll-page" id="page-1" key={index}>
                    <button className='buttonlist' onClick={(e) => showHours(e)} >    {item}  </button>
                </div>)}
        </div>
    )
}

export default TimeComp;
