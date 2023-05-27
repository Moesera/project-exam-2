import validator from "validator";

export function validateUrl(url) {
  if (validator.isURL(url)) {
    return true;
  }
  return false;
}