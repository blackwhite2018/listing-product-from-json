import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';
import './css/main.css';

const Listing = ({ items }) => (
    <div className="item-list">
        {
            items.map(({ listing_id, url, MainImage, title, currency_code, price, quantity }) => (
                <Item
                    key={ listing_id }
                    options={ {
                        url, MainImage, title, currency_code, price, quantity
                    } }
                />)
            )
        }
     </div>
);

Listing.propTypes = {
 items: PropTypes.array.isRequired
};

export default Listing;

