import React, { Component } from "react";
import { connect } from "react-redux";

// const GROCERY_ITEMS = [
//   { name: "Sliced bacon", price: 5.79 },
//   { name: "Pasta", price: 1.28 },
//   { name: "Dried beans", price: 1.36 },
//   { name: "Ground beef", price: 4.12 },
//   { name: "All-purpose flour", price: 0.52 },
//   { name: "Creamy peanut butter", price: 2.56 },
//   { name: "Top round steak", price: 5.78 },
//   { name: "Potatoes", price: 0.72 },
//   { name: "Frozen turkey", price: 1.59 },
//   { name: "Sirloin steak", price: 8.07 },
//   { name: "White rice", price: 0.72 },
//   { name: "Chocolate chip cookies", price: 3.47 },
//   { name: "Seedless grapes", price: 2.67 },
//   { name: "Sugar", price: 0.65 },
//   { name: "Ice cream", price: 4.7 },
// ];

class GroceryItems extends Component {
  render() {
    return (
      <div>
        <table border="1">
          <tbody>
            <tr>
              <th></th>
              <th>Item Price</th>
              <th>Item Name</th>
            </tr>
            {this.props.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <button onClick={() => this.props.addToCart(item)}>
                      Add to cart
                    </button>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.forSale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({
        type: "ADD_TO_CART",
        item,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems);
