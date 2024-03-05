import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [

      ],
      items: [
        {
          id: 1,
          title: 'Black chair',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '69,9'
        },
        {
          id: 2,
          title: 'White chair',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '69,9'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '249,9'
        },
        {
          id: 4,
          title: 'Table',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '149,9'
        },
        {
          id: 5,
          title: 'Light',
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '59,9'
        },
        {
          id: 6,
          title: 'Custom design',
          img: 'int01.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'design',
          price: '109,9'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter( el => el.id !== id)})
  }

  addToOrder(item) {
    const isInArray = this.state.orders.some(el => el.id === item.id);
  
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
