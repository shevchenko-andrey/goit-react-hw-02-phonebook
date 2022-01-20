import React, { Component } from 'react';
import { nanoid } from 'nanoid';
class Form extends Component {
  static defaultProps = {
    state: {
      name: '',
      number: '',
    },
  };
  state = this.props.state;
  static propTypes = {};
  loginInputId = nanoid();
  telInputId = nanoid();
  handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState(this.props.state);
  };
  render() {
    const { name, number } = this.state;
    const { loginInputId } = this.loginInputId;
    const { telInputId } = this.telInputId;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor={loginInputId}>Name</label>
          <input
            onChange={this.handleChangeInput}
            id={loginInputId}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <label htmlFor={telInputId}>Number</label>
          <input
            onChange={this.handleChangeInput}
            id={telInputId}
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
