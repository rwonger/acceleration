import React, { useState, useEffect } from "react";


function Clock() {
    const [time, setTime] = useState(getCurrentTime());
    const [is12HourFormat, setIs12HourFormat] = useState(() => {
        const timeFormat = localStorage.getItem('timeFormat');
        return timeFormat === 'true';
      });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        localStorage.setItem('timeFormat', is12HourFormat.toString());

        return () => clearInterval(intervalId);
    }, [is12HourFormat]);


    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return { hours, minutes, seconds }
    }

    function formatTime(val: number) {
        return val < 10 ? `0${val}` : val;
    }

    function changeHourFormat() {
        setIs12HourFormat(!is12HourFormat);
    }

    function formatHours(val: number) {
        if (is12HourFormat) {
            return val;
        }
        if (val > 12) {
            return val - 12;
        } else if (val == 0) {
            return 12;
        } else {
            return val;
        }
    }

    return (
        <div>
            <button className="hover:bg-black/25 rounded-2xl px-5 transition" onClick={() => {changeHourFormat()}}>
                {formatHours(time.hours)}:{formatTime(time.minutes)}
            </button>
        </div>
    )
}

export default Clock;