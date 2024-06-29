const yearInMilli = 1000 * 3600 * 24 * 365;

export const getYears = (data: string) => {
  const years = (new Date().getTime() - new Date(data).getTime()) / yearInMilli;

  if (years < 0.5) {
    return Math.round(years * 10) / 10;
  }

  return Math.round(years * 2) / 2;
};
