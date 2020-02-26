
const timeFormat = (originalDate, showSec) => {
  const d = new Date(originalDate);
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let ampm = hour < 12 ? 'am' : 'pm';

  min = min.toString().padStart(2, 0);
  sec = sec.toString().padStart(2, 0);

  hour = hour === 0
    ? 12
    : hour > 12
      ? hour - 12
      : hour

  const finalTime = showSec
    ? `${hour}:${min}:${sec}${ampm}`
    : `${hour}:${min}${ampm}`;

  return finalTime;
};

export default timeFormat;
