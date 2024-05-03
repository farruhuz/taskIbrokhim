import { useState } from 'react';

const ComplexForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'usa',
    state: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({ ...errors, [name]: '', });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Perform form validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitting(false);
      return;
    }
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(formData);
      setFormData({
        name: '',
        email: '',
        country: 'usa',
        state: '',
      });
      setSubmitting(false);
      alert('Form submitted successfully!');
    } catch (error) {
      setSubmitting(false);
      setSubmissionError('An error occurred while submitting the form. Please try again later.');
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Validate name
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    return errors;
  };

  return (
    <div className='h-screen flex justify-center items-center bg-teal-500'>
      <form onSubmit={handleSubmit} className="w-[500px] mt-8 p-8 bg-white shadow-lg rounded">
        {submissionError && <div className="text-red-500 mb-4">{submissionError}</div>}

        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <div className="text-red-500 text-xs italic">{errors.name}</div>}

        <label htmlFor="email" className="block text-gray-700 font-bold mb-2 mt-4">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <div className="text-red-500 text-xs italic">{errors.email}</div>}

        <label htmlFor="country" className="block text-gray-700 font-bold mb-2 mt-4">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>

        {/* Conditional fields */}
        {formData.country === 'usa' && (
          <div>
            <label htmlFor="state" className="block text-gray-700 font-bold mb-2 mt-4">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        {formData.country === 'uk' && (
          <div>
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2 mt-4">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ComplexForm;


