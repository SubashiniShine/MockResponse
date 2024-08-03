import React, { useState } from 'react';
import DataBox from './DataBox';
import './AdminPanel.css';

const initialData = {
  'lloyds': {
    'pca': {
      'elg': 'No mock response have been added',
      'nelg': 'No mock response have been added'
    },
    'card': {
      'elg': 'No mock response have been added',
      'nelg': 'No mock response have been added'
    },
    'loan': {
      'elg': 'No mock response have been added',
      'nelg': 'No mock response have been added'
    },
    'mortgage': {
      'elg': 'No mock response have been added',
      'nelg': 'No mock response have been added'
    }
  }
  // Add other brands similarly
};

const AdminPanel = ({ user, onLogoff, onBack }) => {
  const [data, setData] = useState(initialData);
  const [editing, setEditing] = useState(null);
  const [newContent, setNewContent] = useState('');

  const handleEdit = (brand, product, journey) => {
    setEditing({ brand, product, journey });
    setNewContent(data[brand][product][journey]);
  };

  const handleCreate = (brand, product, journey) => {
    setEditing({ brand, product, journey });
    setNewContent('');
  };

  const handleSave = () => {
    if (editing) {
      const { brand, product, journey } = editing;
      setData(prevData => ({
        ...prevData,
        [brand]: {
          ...prevData[brand],
          [product]: {
            ...prevData[brand][product],
            [journey]: newContent
          }
        }
      }));
      setEditing(null);
    }
  };

  const handleDelete = (brand, product, journey) => {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      setData(prevData => ({
        ...prevData,
        [brand]: {
          ...prevData[brand],
          [product]: {
            ...prevData[brand][product],
            [journey]: 'No mock response have been added'
          }
        }
      }));
    }
  };

  return (
    <div className="admin-panel">
      <button className="logoff-button" onClick={onLogoff}>Logoff</button>
      <button className="back-button" onClick={onBack}>Back to Login</button>
      <div className="data-container">
        {Object.keys(data).map(brand => (
          <div key={brand} className="brand-section">
            <h3>{brand}</h3>
            {Object.keys(data[brand]).map(product => (
              <div key={product} className="product-section">
                <h4>{product}</h4>
                {Object.keys(data[brand][product]).map(journey => (
                  <DataBox
                    key={journey}
                    brand={brand}
                    product={product}
                    journey={journey}
                    content={data[brand][product][journey]}
                    isEditing={editing && editing.brand === brand && editing.product === product && editing.journey === journey}
                    onEdit={() => handleEdit(brand, product, journey)}
                    onCreate={() => handleCreate(brand, product, journey)}
                    onSave={handleSave}
                    onDelete={() => handleDelete(brand, product, journey)}
                    onContentChange={setNewContent}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
