import toast from "react-hot-toast";

export const toastResponse = (statusCode: number, message: string) => {
  switch (statusCode) {
    case 200:
    case 201:
    case 202:
      toast.success(message);
      break;
    case 400:
    case 401:
    case 402:
    case 403:
    case 404:
      toast.error(message);
      break;
    case 500:
    case 501:
    case 504:
      toast.error(message);
      break;
    default:
      toast(message);
      break;
  }
};

export const toastLoading = (message: string) => {
  toast.loading(message);
};
