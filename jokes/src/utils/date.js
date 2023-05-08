export const isDateToday = date => {
  const todaysDate = new Date();
  return (
    todaysDate.getDate() === new Date(date).getDate() &&
    todaysDate.getMonth() === new Date(date).getMonth() &&
    todaysDate.getFullYear() === new Date(date).getFullYear()
  );
};
