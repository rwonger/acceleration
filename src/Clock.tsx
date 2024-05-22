import React, { useState, useEffect } from "react";


function Clock() {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    });


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

    function formatHours(val: number) {
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
            <h1>
                {formatHours(time.hours)}:{formatTime(time.minutes)}
            </h1>
        </div>
    )
}

export default Clock;