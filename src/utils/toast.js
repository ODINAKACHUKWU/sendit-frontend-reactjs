import toastr from "toastr";

export default {
  success: (message) => {
    toastr.remove();
    toastr.success(message, "SendIT Courier Service");
  },
  error: (message) => {
    toastr.remove();
    toastr.error(message, "SendIT Courier Service");
  },
  clear: () => {
    toastr.remove();
  },
};
