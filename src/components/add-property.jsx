import React from 'react';
import '../styles/add-property.css';

class AddProperty extends React.Component {
  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
    this.state = { title: 'fields' };
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          <button className="Add" tpye="submit">
            {' '}
            Add{' '}
          </button>
        </form>
        <h1> Add Property Page </h1>
      </div>
    );
  }
}

export default AddProperty;
