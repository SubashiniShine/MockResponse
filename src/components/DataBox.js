import React from 'react';
import './DataBox.css';

const DataBox = ({ brand, product, journey, content, isEditing, onEdit, onCreate, onSave, onDelete, onContentChange }) => {
  return (
    <div className="data-box">
      <div className="data-content">
        {content === 'No mock response have been added' ? (
          <div className="empty-state">
            <p>No mock response added :(</p>
            {isEditing ? (
              <div>
                <textarea
                  value={content}
                  onChange={(e) => onContentChange(e.target.value)}
                  rows="5"
                />
                <button onClick={onSave}>Save</button>
              </div>
            ) : (
              <div>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onCreate}>Create</button>
                <button onClick={onDelete}>Delete</button>
                <button onClick={() => navigator.clipboard.writeText(content)}>Copy</button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <p>{content}</p>
            <button onClick={() => navigator.clipboard.writeText(content)}>Copy</button>
            {isEditing ? (
              <div>
                <textarea
                  value={content}
                  onChange={(e) => onContentChange(e.target.value)}
                  rows="5"
                />
                <button onClick={onSave}>Save</button>
              </div>
            ) : (
              <div>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onCreate}>Create</button>
                <button onClick={onDelete}>Delete</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataBox;
