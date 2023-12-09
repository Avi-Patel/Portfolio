const yearInMilli = 1000 * 3600 * 24 * 365;

export const getYears = (data: string) =>
  Math.round(
    ((new Date().getTime() - new Date(data).getTime()) / yearInMilli) * 2
  ) / 2;
