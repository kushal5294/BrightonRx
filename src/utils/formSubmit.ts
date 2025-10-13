import axios from "axios";
import { useModalStore } from "../store/modalStore";

const jsonToString = (data: any): string => {
  const { formData, prescriptions, rxNumbers, transferAll } = data;
  let content = "";

  switch (formData.form) {
    case "auto-refill":
      content += `New Auto Refill Form Submission:\n\n`;
      content += `First Name: ${formData.firstName}\n`;
      content += `Last Name: ${formData.lastName}\n`;
      content += `Email: ${formData.email}\n`;
      content += `Phone: ${formData.phone}\n`;
      content += `Auto-Refill: ${formData.autoRefill ? "Yes" : "No"}\n`;
      content += `Notification: ${formData.notification}\n`;
      break;

    case "booking":
      content += `New Booking Form Submission:\n\n`;
      content += `First Name: ${formData.firstName}\n`;
      content += `Last Name: ${formData.lastName}\n`;
      content += `Service: ${formData.service}\n`;
      content += `Phone: ${formData.phone}\n`;
      content += `Date: ${formData.date}\n`;
      content += `Time: ${formData.time}\n`;
      if (formData.question) {
        content += `Comments/Preferences: ${formData.question}\n`;
      }
      break;

    case "consult":
      content += `New Consultation Form Submission:\n\n`;
      content += `First Name: ${formData.firstName}\n`;
      content += `Last Name: ${formData.lastName}\n`;
      content += `Address: ${formData.address}\n`;
      content += `Phone: ${formData.phone}\n`;
      content += `Best Time to Call: ${formData.bestTimeToCall}\n`;
      if (formData.email) {
        content += `Email: ${formData.email}\n`;
      }
      if (formData.fax) {
        content += `Fax: ${formData.fax}\n`;
      }
      content += `Preferred Contact Method: ${formData.contactMethod}\n`;
      if (formData.question) {
        content += `Comments/Preferences: ${formData.question}\n`;
      }
      break;

    case "contact":
      content += `New Contact Form Submission:\n\n`;
      content += `First Name: ${formData.firstName}\n`;
      content += `Last Name: ${formData.lastName}\n`;
      content += `Address: ${formData.address}\n`;
      content += `Email: ${formData.email}\n`;
      content += `Phone: ${formData.phone}\n`;
      if (formData.question) {
        content += `Question/Comment: ${formData.question}\n`;
      }
      break;

    case "delivery":
      content += `New Delivery Form Submission:\n\n`;
      content += `First Name: ${formData.firstName}\n`;
      content += `Last Name: ${formData.lastName}\n`;
      content += `Email: ${formData.email}\n`;
      content += `Phone: ${formData.phone}\n`;
      content += `Free Pick-up and Delivery: ${
        formData.delivery ? "Yes" : "No"
      }\n`;
      content += `Notification: ${formData.notification}\n`;
      break;

    case "refill":
      content += `New Prescription Refill Form Submission:\n\n`;
      content += `First Name: ${formData.firstName}\n`;
      content += `Last Name: ${formData.lastName}\n`;
      content += `Phone: ${formData.phone}\n`;
      content += `Pickup/Delivery: ${formData.pickupMethod}\n`;
      content += `Notification: ${formData.notification}\n\n`;
      if (rxNumbers && rxNumbers.length > 0) {
        content += "RX Refill Numbers:\n";
        rxNumbers.forEach((rx: string, index: number) => {
          if (rx) content += `  - ${rx}\n`;
        });
        content += "\n";
      }
      if (prescriptions && prescriptions.length > 0) {
        content += "Over the Counter Items:\n";
        prescriptions.forEach((p: any) => {
          if (p.name)
            content += `  - Name: ${p.name}, Quantity: ${p.quantity}\n`;
        });
      }
      break;

    case "transfer":
      content += `New Prescription Transfer Form Submission:\n\n`;
      content += `First Name: ${formData.firstName}\n`;
      content += `Last Name: ${formData.lastName}\n`;
      content += `Phone: ${formData.phone}\n`;
      content += `Date of Birth: ${formData.dob}\n`;
      content += `Address: ${formData.address}\n`;
      content += `Old Pharmacy Name: ${formData.oldPharmacyName}\n`;
      content += `Old Pharmacy Phone: ${formData.oldPharmacyPhone}\n\n`;
      if (transferAll) {
        content += "Transfer all prescriptions.\n";
      } else if (prescriptions && prescriptions.length > 0) {
        content += "Prescriptions to Transfer:\n";
        prescriptions.forEach((p: any) => {
          if (p.name)
            content += `  - Medication: ${p.name}, Rx #: ${p.RxNumber}\n`;
        });
      }
      break;

    default:
      content += JSON.stringify(data, null, 2);
  }

  return content;
};

const sendEmail = async (data: any) => {
  const emailContent = jsonToString(data);

  const formSubmitData = {
    message: emailContent,
    _subject: `[Action Required] Online Submission From ${data.formData.firstName} ${data.formData.lastName}`,
    _captcha: "false",
  };

  try {
    await axios.post(
      "https://formsubmit.co/f9c90ef5ba9e73862b7d704190035286",
      formSubmitData
    );

    useModalStore.getState().openModal({
      title: "Submission Received",
      message:
        "Thank you for your submission. We will get back to you shortly.",
      status: "success",
    });
  } catch (error) {
    useModalStore.getState().openModal({
      title: "Submission Failed",
      message:
        "There was an error submitting your form. Please try again later.",
      status: "error",
    });
  }
};

//@ts-expect-error
export const handleFormSubmit = (formData: any) => {
  // console.log("Form submitted:", formData.formData.form);
  // console.log(formData);
  sendEmail(formData);
};
