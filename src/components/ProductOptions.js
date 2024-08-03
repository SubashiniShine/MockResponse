import React, { useState } from 'react';
import './ProductOptions.css';

const ProductOptions = ({ product, brand, themeColor, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [displayContent, setDisplayContent] = useState('');

  const handleOptionClick = (option, subOption) => {
    setSelectedOption(option);
    setSelectedSubOption(subOption);
    setDisplayContent(`Brand: ${brand}, Product: ${product}, Option: ${option}, SubOption: ${subOption}`);
  };

  return (
    <div className="product-options" style={{ borderColor: themeColor }}>
      <h3>{product} Options</h3>
      <div className="option-group">
        <h4>Eligible or Assisted Journey</h4>
        <button onClick={() => handleOptionClick('ELG Journey', 'Eligible')}>ELG Journey</button>
        <button onClick={() => handleOptionClick('NELG Journey', 'Assisted')}>NELG Journey</button>
      </div>
      <div className="option-group">
        <h4>Arrear or Prearrear</h4>
        <button onClick={() => handleOptionClick('Arrear', 'Arrear')}>Arrear</button>
        <button onClick={() => handleOptionClick('Prearrear', 'Prearrear')}>Prearrear</button>
      </div>
      <div className="option-group">
        <h4>Plan</h4>
        <button onClick={() => handleOptionClick('Plan', 'onemonth')}>One Month</button>
        <button onClick={() => handleOptionClick('Plan', '2to12month')}>2 to 12 Months</button>
        <button onClick={() => handleOptionClick('Plan', 'temp')}>Temporary</button>
        <button onClick={() => handleOptionClick('Plan', 'temp0')}>Temporary 0</button>
        <button onClick={() => handleOptionClick('Plan', 'hold')}>Hold</button>
      </div>
      {displayContent && (
        <div className="display-box">
          <p>{displayContent}</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(displayContent);
            }}
          >
            Copy
          </button>
        </div>
      )}
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  );
};

export default ProductOptions;
