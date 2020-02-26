
const phoneNumberFormat = (originalPhoneNumber) => {
  const numberRegex = /^\+?1?([2-9][0-9]{2})([0-9]{3})([0-9]{4})$/;
  const parsedNumber = originalPhoneNumber.match(numberRegex);
  if (!parsedNumber) return originalPhoneNumber;
  return `(${parsedNumber[1]}) ${parsedNumber[2]}-${parsedNumber[3]}`;
};

export default phoneNumberFormat;
