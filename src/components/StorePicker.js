import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  myInput = React.createRef();

  goToStore = e => {
    //Stop the form from submitting
    e.preventDefault();
    //Get the text from the input
    const path = this.myInput.current.value;
    //Change the page to /store/input
    this.props.history.push(`/store/${path}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store --></button>
      </form>
    );
  }
}

export default StorePicker;
