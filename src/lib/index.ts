export function formatVietnameseDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `ngày ${day} tháng ${month} năm ${year}`;
}
