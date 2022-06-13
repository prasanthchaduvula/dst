import axios from "axios";
import Toastr from "common/Toastr";

const DEFAULT_ERROR_NOTIFICATION = "Something went wrong!";

axios.defaults.baseURL = "/";

const setAuthHeaders = (setLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };
  setLoading(false);
};

const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
    if (response.data.notice) {
      Toastr.success(response.data.notice);
    }
  }
  return response;
};

const handleErrorResponse = axiosErrorObject => {

  if (axiosErrorObject.response?.status === 401) {
    setTimeout(() => (window.location.href = "/"), 2000);
  } 
  else if (axiosErrorObject.response?.status === 423) {
    window.location.href = "/";
  } else {
    Toastr.error(
      axiosErrorObject.response?.data?.error || DEFAULT_ERROR_NOTIFICATION
    );
  }
  
  return Promise.reject(axiosErrorObject);
};

const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  );
};

export { setAuthHeaders, registerIntercepts };