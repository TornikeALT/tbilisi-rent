import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Accordion({ title, content, isOpen, onClick }) {
  return (
    <div className="flex  flex-col shadow-xl">
      <div
        className={`flex items-center cursor-pointer justify-between ${
          isOpen ? 'bg-blue-800' : ''
        } ${isOpen ? 'text-white' : 'black'} py-7 px-5`}
        onClick={onClick}
      >
        <h3>{title}</h3>
        {isOpen ? <FaChevronUp className="" /> : <FaChevronDown className="" />}
      </div>
      <div>
        {isOpen && (
          <div className="flex flex-row pb-3 px-5">
            <p className="pt-7">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
