import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './checkbox.scss';

const Checkbox = ({ onClick, checked, onDelete, label, onKeyUp }) => {
  const handleCheckboxClick = () => {
    onClick(); // Toggle the checked state
  };

  return (
    <div className="checkbox" style={{ display: 'flex', alignItems: 'center', width: '100%', color:'white' }}>
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked={checked}
        className="checkbox-content"
        onClick={handleCheckboxClick}
        onKeyUp={onKeyUp}
        style={{ display: 'flex', alignItems: 'center', flex: '1' }}
      >
        <input tabIndex="-1" type="checkbox" checked={checked} readOnly style={{ marginRight: '10px' }} />
        <span className={checked ? 'checkbox-checked' : ''} style={{ marginLeft: '10px' }}>
          {label}
        </span>
      </div>
      <button type="button" className="checkbox-delete" onClick={onDelete}>
        <FontAwesomeIcon icon={faTimes} size="1x" />
      </button>
    </div>
  );
};

export default Checkbox;