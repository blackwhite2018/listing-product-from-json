import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Item = ({ options: { url, MainImage, title, currency_code, price, quantity } }) => {
    const currency = {
        'USD': '$',
        'EUR': '€'
    };

    const classLevel = cn(
        {
            'level-low': quantity <= 10,
            'level-medium': quantity > 10 && quantity <= 20,
            'level-high': quantity > 20
        }
    );

    if (!MainImage) {
        return null;
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={ url }>
                    <img src={ MainImage['url_570xN'] } alt={ title } />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{ title }</p>
                <p className="item-price">{ `${ currency[currency_code] || currency_code } ${ price }` }</p>
                <p className={ `item-quantity ${ classLevel }` }>{ quantity } left</p>
            </div>
        </div>
    );
};

Item.propTypes = {
    props: PropTypes.shape({
        options: PropTypes.shape({
            url: PropTypes.string.isRequired,
            MainImage: PropTypes.object.isRequired,
            title: PropTypes.string.isRequired,
            currency_code: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired
        })
    })
};

export default Item;

