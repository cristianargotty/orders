import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  renderField = (data) => {
    data.input.className = 'form-control';

    const isInvalid = data.meta.touched && !!data.meta.error;
    if (isInvalid) {
      data.input.className += ' is-invalid';
      data.input['aria-invalid'] = true;
    }

    if (this.props.error && data.meta.touched && !data.meta.error) {
      data.input.className += ' is-valid';
    }

    return <div className={`form-group`}>
      <label htmlFor={`ordersitems_${data.input.name}`} className="form-control-label">{data.input.name}</label>
      <input {...data.input} type={data.type} step={data.step} required={data.required} placeholder={data.placeholder} id={`ordersitems_${data.input.name}`}/>
      {isInvalid && <div className="invalid-feedback">{data.meta.error}</div>}
    </div>;
  }

  render() {
    const { handleSubmit } = this.props;

    return <form onSubmit={handleSubmit}>
      <Field component={this.renderField} name="itemCode" type="text" placeholder="" />
      <Field component={this.renderField} name="name" type="text" placeholder="" />
      <Field component={this.renderField} name="qty" type="number" placeholder="" />
      <Field component={this.renderField} name="gift" type="number" placeholder="" />
      <Field component={this.renderField} name="categoryId" type="number" placeholder="" />
      <Field component={this.renderField} name="categoryName" type="text" placeholder="" />
      <Field component={this.renderField} name="orders" type="text" placeholder="" />
      <Field component={this.renderField} name="price" type="text" placeholder="" />

        <button type="submit" className="btn btn-success">Submit</button>
      </form>;
  }
}

export default reduxForm({form: 'ordersitems', enableReinitialize: true, keepDirtyOnReinitialize: true})(Form);
