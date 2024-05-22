import { useState } from "react";


function GreetingMessage() {
    const [time, setTime] = useState(getCurrentTime());

    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours();

        return { hours }
    }

    function updateMOTD(curr: number) {
        // morning is defined by 00:00 to 11:59
        // afternoon is defined by 12:00 to 17:59
        // evening is defined by 18:00 to 23:59
        
        if (0 <= curr && curr < 12) {
            return "morning";
        } else if (12 <= curr && curr < 18) {
            return "afternoon";
        } else {
            return "evening";
        }
    }

    return (
        <div>
            <h2 className='greeting'>Good {updateMOTD(time.hours)}, Ricky</h2>
        </div>
    )
}
export default GreetingMessage;