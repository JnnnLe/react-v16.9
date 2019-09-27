import React, { useState } from 'react';

const SearchParams = () => {
  // default state of hook (stateful )
  const [ location, setLocation ] = useState('Oakland, CA');

  return (
    <div>
      <form>
        <label htmlFor="location">
          Location
          <input 
          id="location" 
          value={location} 
          placeholder="Location" 
          onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;