import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
import './../index.css';

const CustomersList = ({ customers, urlPath }) => {
    
    return (
        
        
            <div className="customers-list">
                {
                    customers.map(c =>
                        <CustomerListItem
                        
                            key={c.dni}
                            dni={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}>
                        </CustomerListItem>
                    )
                }
            </div>

    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
};

export default CustomersList;