const yearInMilli = 1000 * 3600 * 24 * 365;

export const getYears = (date: string) => {
  const years = (new Date().getTime() - new Date(date).getTime()) / yearInMilli;

  if (years < 0.5) {
    return Math.round(years * 10) / 10;
  }

  return Math.round(years * 2) / 2;
};

export const getDurationString = (date: string): string => {
  const years = getYears(date);

  if (years < 1) {
    return `${Math.round(years * 12)} Months`;
  }

  return `${years} Years`;
};
