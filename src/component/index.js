import React, { useEffect, useState } from 'react';
import Rating from 'react-rating-stars-component';
import { Formik, Form } from 'formik';
import '../App.css';
import { Demodata } from '../demodatat';

function ChildReview({ dataNum }) {
  const data = Demodata
  const [showData, setShowData] = useState(true)

  useEffect(() => {
    const found = Demodata.find((item) => item.Id === parseInt(dataNum));
    setShowData(found);
  }, [dataNum])


  const initialValues = {
    quality: 0,
    quantity: 0,
    service: 0,
  };

  const handleSubmit = (values) => {
    const allRatingsHigh = Object.values(values).every((rating) => rating >= 4);
    if (allRatingsHigh && showData?.Link) {
      window.location.href = showData.Link;
    } else {
      alert('Thank you for your feedback!');
    }
  };
  console.log(showData)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-200 to-teal-400">
      {showData ?
        <div className="bg-white p-10 rounded-xl shadow-lg w-11/12 max-w-lg">
          <h1 className="text-2xl font-bold text-blue-700 text-center mb-3">
            {showData?.Name}
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Please leave a review to help us improve
          </p>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ setFieldValue, values }) => (
              <Form>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {['quality', 'quantity', 'service'].map((category, index) => (
                    <div
                      key={category}
                      className={`flex flex-col items-center pb-4 ${index < 2 ? 'border-b border-gray-300 md:border-none' : ''
                        }`}
                    >
                      <p className="mb-2 text-sm font-semibold capitalize text-gray-600">
                        {category}
                      </p>
                      <Rating
                        count={5}
                        value={values[category]}
                        onChange={(value) => setFieldValue(category, value)}
                        size={28}
                        activeColor="#ffd700"
                      />
                    </div>
                  ))}
                </div>

                <hr className="border-gray-300 my-4" />

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
        :
        <div className="bg-white p-10 rounded-xl shadow-lg w-11/12 max-w-lg text-center">
          <h1 className="text-4xl font-bold text-red-600">404</h1>
          <p className="text-lg text-gray-500">Page Not Found</p>
        </div>
      }
    </div>
  );
}

export default ChildReview;
