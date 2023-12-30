export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);

  return formattedDate;
};

export const formatDateSince = (dateString: string) => {
  if (dateString === "") return "";

  const currentDate = new Date();
  const givenDate = new Date(dateString);

  //@ts-ignore
  const difference = currentDate - givenDate;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years >= 1) {
    return `Since: ${years} ${years === 1 ? "year" : "years"}`;
  } else if (months >= 1) {
    return `Since: ${months} ${months === 1 ? "month" : "months"}`;
  } else {
    return `Since: ${days} ${days === 1 ? "day" : "days"}`;
  }
};

export const formatDateAgo = (dateString: string) => {
  if (dateString === "") return "";

  const currentDate = new Date();
  const givenDate = new Date(dateString);

  //@ts-ignore
  const difference = currentDate - givenDate;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years >= 1) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months >= 1) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
};

export const formatNumber = (num: number) => {
  if (num >= 1000 && num <= -1000) {
    const formatted = num / 1000;
    return `${formatted.toFixed(1)}k`;
  } else {
    return num.toString();
  }
};
