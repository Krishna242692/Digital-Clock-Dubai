function updateClock() {
  const now = new Date();
  const options = {
    timeZone: 'Asia/Dubai', // Changed for Dubai time
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Use 24-hour format
  };
  const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
  document.getElementById('digital-clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
