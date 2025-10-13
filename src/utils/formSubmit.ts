//@ts-expect-error
export const handleFormSubmit = (formData: any) => {
  console.log("Form submitted:", formData.formData.form);
  console.log(formData);
};
