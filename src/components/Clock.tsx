import { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = String(currentTime.getHours()).padStart(2, "0");
  const min = String(currentTime.getMinutes()).padStart(2, "0");
  const sec = String(currentTime.getSeconds()).padStart(2, "0");

  const day = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const date = currentTime.getDate();
  const month = currentTime.getMonth() + 1;

  return (
    <div className="relative text-white flex flex-col items-center top-[-10%]">
     
      {/* Background day */}
      <div className="
        font-graen
        absolute
        text-[180px]
        whitespace-nowrap
        opacity-20
        z-5
        pointer-events-none
      ">
        {day}
      </div>

      {/* Digital clock */}
      <div className="relative z-10 text-7xl font-rome ">
        {hour}:{min}:<span className="text-red-600">{sec}</span>
      </div>

      {/* Date */}
      <div className="relative z-10 text-4xl font-rome">
        {date}<span className="text-red-600">/</span>{month}
      </div>

    </div>
  );
}

export default Clock;