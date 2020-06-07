import React from 'react';
import Listing from './components/Listing/Listing';
import items from './etsy.json';

const App = () => (
    <Listing
        items={ items }
    />
);

export default App;

