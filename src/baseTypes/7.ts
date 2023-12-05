/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDEY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
};

function isWeekend(day: DaysOfWeek): boolean {
  if (day === DaysOfWeek.SATURDAY ||day === DaysOfWeek.SUNDAY) {
    return true
  };
  return false;
};


isWeekend(DaysOfWeek.TUESDAY);   //false