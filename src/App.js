import React, { useState } from 'react';

import Values from 'values.js';
import SingleColor from './SingleColor';

const App = () => {
  document.title = 'color generator';
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div>
      <>
        <section className="container">
          <h3>Color Generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="#fa5025"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className={`${error ? error : null}`}
            />
            <button className="btn" type="submit">
              submit
            </button>
          </form>
        </section>
        <section className="colors">
          {list.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            );
          })}
        </section>
      </>
    </div>
  );
};

export default App;
