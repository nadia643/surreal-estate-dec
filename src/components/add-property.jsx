import React from 'react';
import '../styles/add-property.css';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
      },
    };
  }

  handleAddProperty = event => {
    event.preventDefault();
    // console.log(this.state.fields);
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
          <div className="button">
            <button type="submit">Add</button>
          </div>
        </form>
        <h1> Add Property Page </h1>
      </div>
    );
  }
}
export default AddProperty;
