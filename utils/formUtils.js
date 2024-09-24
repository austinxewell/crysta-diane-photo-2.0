// utils/formUtils.js
export function compareFormFields(currentFields, storedFields) {
  return Object.keys(currentFields).every((key) => currentFields[key] === storedFields[key]);
}
