import { showToast } from "../../components/shared/ToastAlert";

const ERROR = "Error";

export const validateFormCreateProduct = (formData: any) => {
  if (formData.description.trim().length <= 5) {
    showToast({
      message: "Complete your description please",
      typeToast: "error"
    });
    return { refOfField: "descritption", status: ERROR };
  }
  if (formData.name.trim().length <= 2) {
    showToast({
      message: "Please complete your name",

      typeToast: "error"
    });
    return { refOfField: "name", status: ERROR };
  }
  if (formData.price <= 0) {
    showToast({
      message: "Please complete the product name",

      typeToast: "error"
    });
    return { refOfField: "name", status: ERROR };
  }
  if (formData.solde <= 0) {
    showToast({
      message: "Please complete the balance of the product",

      typeToast: "error"
    });
    return { refOfField: "solde", status: ERROR };
  }
  if (formData.remise <= 0) {
    showToast({
      message: "Please complete the product discount field",

      typeToast: "error"
    });
    return { refOfField: "remise", status: ERROR };
  }
  return { refOfField: "remise", status: "SUCCESS" };
};
