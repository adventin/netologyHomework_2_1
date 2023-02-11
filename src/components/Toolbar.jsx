import { useState } from 'react';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  const buttons = filters.map((filter, index) => (
    <button
      key={index}
      onClick={() => onSelectFilter(filter)}
      className={`filter-buttons__button ${selected === filter ? "filter-buttons__button_selected" : ""}`}>{filter}</button>
  ));

  return (
    <div className='filter-buttons'>{buttons}</div>
  );
}