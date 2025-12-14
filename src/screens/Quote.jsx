import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countries = [
    'Select Country',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'China',
    'India',
    'United Arab Emirates',
    'Singapore',
    'Other'
  ];

  const productsOfInterest = [
    'Select Product',
    'Horn Buttons',
    'Horn Plates',
    'Viking Horns',
    'Horn Combs',
    'Horn Jewelry',
    'Horn Cutlery',
    'Custom Products',
    'Bulk Order',
    'Multiple Products'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^[\d\s\+\-\(\)]{7,}$/.test(formData.phone))
      newErrors.phone = "Phone number is invalid";

    if (!formData.country || formData.country === "Select Country")
      newErrors.country = "Please select a country";

    if (!formData.productInterest || formData.productInterest === "Select Product")
      newErrors.productInterest = "Please select a product";

    if (!formData.message.trim())
      newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const form = e.target;
    const encodedData = new URLSearchParams(new FormData(form)).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData
      });

      setSubmitSuccess(true);

      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        productInterest: '',
        message: ''
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-page">

      <section className="quote-form-section section-border">
        <div className="container">
          <div className="form-container">

            <div className="form-header">
              <h1 className="form-title">Request a Quote</h1>
              <p className="form-description">
                Get a personalized quote for our premium horn and bone products.
                Fill out the form below and our team will get back to you within 24–48 hours.
              </p>
            </div>

            {submitSuccess && (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <div>
                  <h3>Thank You!</h3>
                  <p>Your request was submitted successfully.</p>
                </div>
              </div>
            )}

            {/* NETLIFY FORM */}
            <form
              name="quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="quote-form"
              noValidate
            >
              {/* Required Netlify hidden fields */}
              <input type="hidden" name="form-name" value="quote" />
              <input type="hidden" name="bot-field" />

              <div className="form-grid">

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-input ${errors.fullName ? "error" : ""}`}
                  />
                  {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? "error" : ""}`}
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? "error" : ""}`}
                  />
                  {errors.phone && <p className="error-message">{errors.phone}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`form-select ${errors.country ? "error" : ""}`}
                  >
                    {countries.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.country && <p className="error-message">{errors.country}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">Product of Interest *</label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className={`form-select ${errors.productInterest ? "error" : ""}`}
                  >
                    {productsOfInterest.map((p, i) => (
                      <option key={i} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.productInterest && <p className="error-message">{errors.productInterest}</p>}
                </div>

              </div>

              <div className="form-group full-width">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? "error" : ""}`}
                />
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>

              {/* Optional spam protection */}
              <div data-netlify-recaptcha="true"></div>

              <div className="form-submit">
                <button className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Processing…" : "Submit Quote Request"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
