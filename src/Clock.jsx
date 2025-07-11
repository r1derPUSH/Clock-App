import React, { useState, useEffect } from 'react';

function Clock () {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function timer () {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours > 12 ? 'PM' : 'AM';

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero (number) {
        return (number < 10 ? '0' : '') + number;
    }


    return (
        <div className='container'>
            <span className='timer'>{timer()}</span>
        </div>
    )
}

export default Clock;