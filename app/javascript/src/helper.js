export const validator = (key, value) => {
  if (!value) return { error: true, message: `${key} is required` };
  if (
    key == "email" &&
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  ) {
    return { error: true, message: "Invalid email" };
  }
  return { error: false, message: "" };
};
