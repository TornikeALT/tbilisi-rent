import { useState } from 'react';
import Accordion from './Accordion';

function Faq() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAccordionToggle = index => {
    setCurrentIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      title: '1) What insurance is already included in my rental? ',
      text: 'The rental company staff will usually offer you additional insurance for an extra fee. Knowing what you are covered for already will help you make the right decision for you.',
    },
    {
      title: '2) What fuel does the car take? ',
      text: 'Putting the wrong type of fuel in the car can seriously damage the engine and, because this mistake is not usually covered by any insurance, it will cost you quite a bit to put right. To find out what type of fuel your rental car takes see, Diesel or petrol car: How can I tell?',
    },
    {
      title: '3) Where should I park the car when I bring it back? ',
      text: 'Returning your rental car late usually means you will be charged a penalty fee. So knowing exactly where to leave your car will save you money as well as time.',
    },
  ];

  return (
    <section>
      <div className="text-center">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <h3 className="my-3 text-5xl font-bold">Frequently Asked Questions</h3>
        <p className="max-w-sm mx-auto mt-5 mb-8 text-gray-500">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>

      <div className="max-w-4xl mx-auto shadow-2xl">
        {questions.map((currentQuestion, index) => {
          return (
            <Accordion
              key={index}
              title={currentQuestion.title}
              content={currentQuestion.text}
              isOpen={currentIndex === index}
              onClick={() => handleAccordionToggle(index)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
