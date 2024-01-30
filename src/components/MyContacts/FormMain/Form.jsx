import { Component } from 'react';
import { nanoid } from 'nanoid';
import Styles from './Form.module.css';

const FirstState = {
  contact: [],
  name: '',
  number: '',
};

class FormName extends Component {
  formId = nanoid();
  state = { ...FirstState };

  HandlChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    // console.log(event.target.value);
    // console.log(event.target.name);
  };

  HandlSubmit = event => {
    event.preventDefault();
    this.ResetState();
  };
  ResetState() {
    this.setState({
      ...FirstState,
    });
  }

  render() {
    const { formId, HandlSubmit, HandlChange } = this;
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={HandlSubmit} className={Styles.formMain}>
          <label htmlFor={formId}>Name</label>
          <input
            value={name}
            onChange={HandlChange}
            type="text"
            name="name"
            id={formId}
            placeholder="Enter name"
            required
          />

          <label htmlFor={formId}>Number</label>
          <input
            value={number}
            onChange={HandlChange}
            type="tel"
            id={formId}
            placeholder="Enter number"
            name="number"
            required
          />
          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}

export default FormName;
