import { useState } from "react";
import { Trash2 } from "lucide-react";
import { darkBlue } from "../../utils/constants";

interface PrescriptionRow {
  id: number;
  name: string;
  quantity: string;
}

export default function RefillForm() {
  const [formData, setFormData] = useState({
    form: "refill",
    lastName: "",
    firstName: "",
    phone: "",
    pickupMethod: "pickup",
    notification: "",
  });

  const [rxNumbers, setRxNumbers] = useState(["", "", "", ""]);
  const [prescriptions, setPrescriptions] = useState<PrescriptionRow[]>([
    { id: 1, name: "", quantity: "" },
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRxChange = (index: number, value: string) => {
    const newRxNumbers = [...rxNumbers];
    newRxNumbers[index] = value;
    setRxNumbers(newRxNumbers);
  };

  const handlePrescriptionChange = (
    id: number,
    field: "name" | "quantity",
    value: string
  ) => {
    setPrescriptions((prev) =>
      prev.map((rx) => (rx.id === id ? { ...rx, [field]: value } : rx))
    );
  };

  const addPrescription = () => {
    const newId = Math.max(...prescriptions.map((p) => p.id)) + 1;
    setPrescriptions([...prescriptions, { id: newId, name: "", quantity: "" }]);
  };

  const deletePrescription = (id: number) => {
    setPrescriptions((prev) => prev.filter((rx) => rx.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { formData, rxNumbers, prescriptions });
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-16 px-4 sm:px-6 md:px-0 -mt-3">
      <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <div className="space-y-6">
          <div className="border-b-2 border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-red-600">
              * REQUIRED INFORMATION
            </h2>
          </div>

          {/* WHO IS THIS PRESCRIPTION FOR? */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: darkBlue }}>
              WHO IS THIS PRESCRIPTION FOR?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: darkBlue }}
                >
                  FIRST NAME <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name here"
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: "rgb(209, 213, 219)",
                    color: darkBlue,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgb(209, 213, 219)")
                  }
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: darkBlue }}
                >
                  LAST NAME <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name here"
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: "rgb(209, 213, 219)",
                    color: darkBlue,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgb(209, 213, 219)")
                  }
                />
              </div>
            </div>
          </div>

          {/* PHONE NUMBER */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: darkBlue }}
            >
              PHONE NUMBER <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number here"
              required
              className="w-full md:w-1/2 px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
              style={{ borderColor: "rgb(209, 213, 219)", color: darkBlue }}
              onFocus={(e) => (e.target.style.borderColor = darkBlue)}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgb(209, 213, 219)")
              }
            />
          </div>

          {/* RX REFILL NUMBERS */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: darkBlue }}>
              RX REFILL NUMBERS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rxNumbers.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span
                    className="border-2 font-bold px-4 py-3 rounded-lg text-sm"
                    style={{ borderColor: darkBlue, color: darkBlue }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleRxChange(index, e.target.value)}
                    placeholder="Enter RX refill number here"
                    className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                    style={{
                      borderColor: "rgb(209, 213, 219)",
                      color: darkBlue,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgb(209, 213, 219)")
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ADD MORE PRESCRIPTIONS */}
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ color: darkBlue }}>
              ADD MORE PRESCRIPTIONS
            </h3>
            <p className="text-sm mb-4" style={{ color: darkBlue }}>
              (OVER THE COUNTER ITEM)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div
                className="border-2 font-bold px-4 py-3 rounded-lg text-center"
                style={{ borderColor: darkBlue, color: darkBlue }}
              >
                NAME
              </div>
              <div
                className="border-2 font-bold px-4 py-3 rounded-lg text-center"
                style={{ borderColor: darkBlue, color: darkBlue }}
              >
                QTY
              </div>
            </div>

            {prescriptions.map((prescription) => (
              <div
                key={prescription.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              >
                <div>
                  <input
                    type="text"
                    value={prescription.name}
                    onChange={(e) =>
                      handlePrescriptionChange(
                        prescription.id,
                        "name",
                        e.target.value
                      )
                    }
                    placeholder="Enter name here"
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                    style={{
                      borderColor: "rgb(209, 213, 219)",
                      color: darkBlue,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgb(209, 213, 219)")
                    }
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={prescription.quantity}
                    onChange={(e) =>
                      handlePrescriptionChange(
                        prescription.id,
                        "quantity",
                        e.target.value
                      )
                    }
                    placeholder="Enter quantity here"
                    className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                    style={{
                      borderColor: "rgb(209, 213, 219)",
                      color: darkBlue,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgb(209, 213, 219)")
                    }
                  />
                  {prescriptions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => deletePrescription(prescription.id)}
                      className="w-12 h-12 flex items-center justify-center border-2 rounded-lg transition-all flex-shrink-0"
                      style={{
                        borderColor: "rgb(156, 163, 175)",
                        color: "rgb(75, 85, 99)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgb(243, 244, 246)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      title="Delete prescription"
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addPrescription}
              className="flex items-center gap-2 px-6 py-3 border-2 font-semibold rounded-lg transition-all"
              style={{ borderColor: darkBlue, color: darkBlue }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(243, 244, 246)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span className="text-xl">+</span>
              Add Prescription
            </button>
          </div>

          {/* PICK UP OR DELIVERY */}
          <div>
            <label
              className="block text-sm font-semibold mb-3"
              style={{ color: darkBlue }}
            >
              PICK UP OR DELIVERY <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="pickupMethod"
                  value="pickup"
                  checked={formData.pickupMethod === "pickup"}
                  onChange={handleChange}
                  className="w-5 h-5"
                  style={{ accentColor: darkBlue }}
                />
                <span style={{ color: darkBlue }}>Pickup</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="pickupMethod"
                  value="delivery"
                  checked={formData.pickupMethod === "delivery"}
                  onChange={handleChange}
                  className="w-5 h-5"
                  style={{ accentColor: darkBlue }}
                />
                <span style={{ color: darkBlue }}>Delivery</span>
              </label>
            </div>
          </div>

          {/* NOTIFICATION */}
          <div>
            <label
              className="block text-sm font-semibold mb-3"
              style={{ color: darkBlue }}
            >
              WOULD YOU LIKE US TO NOTIFY YOU WHEN YOUR PRESCRIPTION(S) ARE
              READY?<span className="text-red-600">*</span>
            </label>
            <select
              name="notification"
              value={formData.notification}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-white"
              style={{ borderColor: "rgb(209, 213, 219)", color: darkBlue }}
              onFocus={(e) => (e.target.style.borderColor = darkBlue)}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgb(209, 213, 219)")
              }
            >
              <option value="">- Please Select -</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="text">Text Message</option>
              <option value="none">No Notification</option>
            </select>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-start">
            <div
              className="g-recaptcha"
              data-sitekey="your-site-key-here"
            ></div>
          </div>

          {/* Submit Button */}
          <div className="-mt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-8 py-3 border-2 font-semibold rounded-lg transition-all shadow-md"
              style={{ borderColor: darkBlue, color: darkBlue }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(243, 244, 246)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
