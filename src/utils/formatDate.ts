export function formatDate(d: Date) {
  const NOW = new Date(Date.now());

  const hoursAgo = Math.abs(NOW.getTime() - d.getTime()) / 36e5;
  const date = new Date(); // Replace this with your desired date

  // Format time to 'hh:mm' (hours and minutes)
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Format date to 'dd/MM/yyyy' (day, month, and year)
  const formattedDate = date.toLocaleDateString([], {
    day: "2-digit",
    month: "2-digit",
  });

  const dateText = hoursAgo > 21 ? formattedDate : formattedTime;
  return dateText;
}
