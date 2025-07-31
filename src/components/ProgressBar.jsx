import { useEffect, useState } from "react";

export default function ProgressBar({ timeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={timeout} value={remainingTime} />;
}
