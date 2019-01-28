import React, {Component}from 'react';
import PropTypes from 'prop-types';
import './../index.css';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions'; 
import { Prompt } from 'react-router'
import { CUSTOMER_EDIT } from '../constants/permissions';
import {accessControl} from './../helpers/accessControl'



const isRequired = value => (
    !value && "Este campo es requerido"
);
const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const validate = values =>{
    const error ={};
    if (!values.name){
        error.name = "El campo nombre es requerido"
    }
    if(!values.dni){
        error.dni="El campo DNI es obligatorio"
    }
    return error;
};
const toUpper = value => value && value.toUpperCase();
const toLower =value => value && value.toLowerCase();
const toNumber =value => value && Number(value);

class CustomerEdit extends Component {
    componentDidMount(){
        if (this.txt) {
            this.txt.focus();
        }
    }
     renderField = ({ input, meta, type, label, name, withFocus}) => (
        <div>
            <label htmlFor={name}>{label} </label>
            <input {...input} 
            type={!type ? "text" : type}
            ref={withFocus && (txt => this.txt=txt) }
            ></input>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
render(){
    const { handleSubmit, submitting, onBack, pristine, submitSucceeded} =this.props;

        return (
            <div>
                <h2>Edicion del cliente</h2>
                
                <form onSubmit={handleSubmit}>
    
                    <Field
                        withFocus
                        name="name"
                        component={this.renderField}
                        type="text"
                        label="Nombre"
                        parse={toUpper}
                        format= {toLower}></Field>
    
                    <Field
                        name="dni"
                        component={this.renderField}
                        type="text"
                        validate={[isNumber]}
                        label="DNI"></Field>
    
                    <Field name="age" component={this.renderField} type="number"
                        validate={[isNumber]}
                        label="Edad"
                        parse={toNumber}
                    ></Field>
                    
                    <CustomersActions>
                        <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                        <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                    </CustomersActions>
                    <Prompt
                    when={!pristine && !submitSucceeded}
                    message="Se perderan los datos si continua!"></Prompt>
                </form>
            </div>
        );
}
};

CustomerEdit.propTypes = {
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({ 
    form: 'CustomerEdit',
    validate,
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm)

//export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerEditForm));  EJEMPLO PARA NO OTORGAR PERMISO DE EDICION 