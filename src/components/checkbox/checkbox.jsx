import React from 'react';
import './checkbox.scss';

export const Checkbox = ({
  onClick, checked, onDelete, label, onKeyUp,
}) => {
  const handleCheckboxClick = () => {
    onClick(); // Toggle the checked state
  };

  return (
    <div className="checkbox">
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked={checked}
        className="checkbox-content"
        onClick={handleCheckboxClick}
        onKeyUp={onKeyUp}
      >
        <input tabIndex="-1" type="checkbox" checked={checked} readOnly />
        <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
      </div>
      <button type="button" className="checkbox-delete" onClick={onDelete}>
        x
      </button>
    </div>
  );
};
