function updateClock() {
    const options = {
      timeZone: "Europe/Bucharest", 
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };
  
    const time = new Intl.DateTimeFormat("en-US", options).format(new Date());
    document.getElementById("clock").textContent = time;
  }
  
  // update every second
  setInterval(updateClock, 1000);
  updateClock();
  