import "./form.css";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
  "https://yotfrispktekovingbwu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdGZyaXNwa3Rla292aW5nYnd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxODk0MDMsImV4cCI6MjAzNTc2NTQwM30.426rUxT-doBAeD8sn7R80XjMXkAr9FlM1z7XIL9VScs",
);

export const Reg = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmited, setSubmited] = useState(false);
  const [isError, setError] = useState(false);

  const [isValidNumber, setValidNumber] = useState(false);

  useEffect(() => {
    setValidNumber(/^\d+$/.test(phone));
  }, [phone]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("Registeration_Data")
      .insert([{ name, phone, email }]);

    if (error) {
      setError(true);
      console.error("Error inserting data:", error);
    } else {
      setSubmited(true);
      setName("");
      setPhone("");
      setEmail("");
      console.log("Data inserted successfully:", data);
    }
  };

  return (
    <div className="event-form">
      <div className="container">
        {isValidNumber === false && phone !== "" ? (
          <div className="form-submit-error">Enter a valid phone number.</div>
        ) : (
          <></>
        )}

        {isSubmited === true ? (
          <div className="form-submit-show">Form successfully Submitted</div>
        ) : (
          <></>
        )}

        {isError === true ? (
          <div className="form-submit-error">
            An Error Occured, please submit the form again.
          </div>
        ) : (
          <></>
        )}
        <header>Web Craft Registration Form</header>
        <div className="">
          <span style={{ textAlign: "center", padding: "1rem" }}>
            We will Contact You For The Payment
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="main1">
            <div className="field">
              <div className="input-field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone">Phone No</label>
                <input
                  type="text"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="email">Email Id</label>
                <input
                  type="text"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="submit">
                {isValidNumber === true ? (
                  <input
                    type="submit"
                    name="submit"
                    defaultValue="Submit"
                    value="Submit"
                  />
                ) : (
                  <input
                    type="submit"
                    name="submit"
                    defaultValue="Submit"
                    value="Submit"
                    disabled
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
