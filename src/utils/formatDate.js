export function formatDate(date) {
  const pad = (number) => (number < 10 ? `0${number}` : number);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = pad(date.getDate());
  let monthIndex = date.getMonth();
  let month = months[monthIndex];
  let year = date.getFullYear();

  return `${month} ${day} ${year}`;
}
