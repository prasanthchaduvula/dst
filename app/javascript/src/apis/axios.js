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
    response.success = response.status >= 200 && response.status < 300;
    if (response.data.notice) {
      Toastr.success(response.data.notice);
    }
  }
  return response;
};

const handleErrorResponse = error => {
  console.log(error.response.data.errors)

  if (error.response?.status === 401) {
    Toastr.error("Unauthorized");
    setTimeout(() => (window.location.href = "/"), 2000);
  } 
  else if (error.response?.data?.errors?.length) {
  error.response.data.errors.map(error => {
    Toastr.error(error);
  })}
  else {
    Toastr.error(
      error.response?.data?.error || DEFAULT_ERROR_NOTIFICATION
    );
  }
  
  return Promise.reject(error);
};

const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  );
};

export { setAuthHeaders, registerIntercepts };