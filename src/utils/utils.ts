import moment from "moment-timezone";

export const numberWithCommas = (x: string | number) => {
  return Number(x) % 1 === 0
    ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : Number(x)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getFormatedDate = (date: Date) => {
  const dateValue = moment(date).tz("Africa/Lagos");
  return dateValue.format("Do MMM. YYYY");
};

export const getFormatedDateTime = (date: Date) => {
  const dateValue = moment(date).tz("Africa/Lagos");
  return dateValue.format("Do MMM. YYYY, h:mm:ss a");
};

export const getFormatedTime = (date: Date) => {
  const dateValue = moment(date).tz("Africa/Lagos");
  return dateValue.format("h:mm:ss a");
};
