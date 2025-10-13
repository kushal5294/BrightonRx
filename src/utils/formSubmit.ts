import axios from "axios";

const jsonToString = (data: any): string => {
  const { formData, prescriptions, rxNumbers, transferAll } = data;
  let content = "";

  switch (formData.form) {
    case "auto-refill":
      content += `New Automatic Refill Form Submission:\n\n`;
      content += `First Name: ${formData.firstName}\n`;
      content += `Last Name: ${formData.lastName}\n`;
      content += `Email: ${formData.email}\n`;
      content += `Phone: ${formData.phone}\n`;
      content += `Auto-Refill: ${formData.autoRefill ? "Yes" : "No"}\n`;
      content += `Preferred Notification: ${formData.notification}\n`;
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
      content += `Preferred Notification: ${formData.notification}\n`;
      break;

    case "refill":
      content += `New Refill Form Submission:\n\n`;
      content += `First Name: ${formData.firstName}\n`;
      content += `Last Name: ${formData.lastName}\n`;
      content += `Phone: ${formData.phone}\n`;
      content += `Pickup/Delivery: ${formData.pickupMethod}\n`;
      content += `Preferred Notification: ${formData.notification}\n\n`;
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
      content += `New Transfer Form Submission:\n\n`;
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
  const emailJsData = {
    service_id: "service_jbd4o5n",
    template_id: "template_tgttlbm",
    user_id: "lrIHvC2cp1wPpOX81",
    template_params: {
      first_name: data.formData.firstName,
      last_name: data.formData.lastName,
      form_data: emailContent,
    },
  };

  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      emailJsData
    );
    console.log("EmailJS response:", response.data);
  } catch (error) {
    console.error("Error sending email via EmailJS:", error);
  }
};

//@ts-expect-error
export const handleFormSubmit = (formData: any) => {
  console.log("Form submitted:", formData.formData.form);
  console.log(formData);
  sendEmail(formData);
};
