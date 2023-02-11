import { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default function Portfolio(props) {
  const [selected, setSelected] = useState('All');
  const images = props.images.filter((image) => image.category === selected || selected === 'All');

  return (
    <div className='portfolio'>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={(filter) => {
          setSelected(filter);
        }} />
      <ProjectList projects={images} />
    </div>
  )
}