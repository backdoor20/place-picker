import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log("Setting Interval.....");
    const intervalSet = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      console.log("Clearingin Interval....");
      clearInterval(intervalSet);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
