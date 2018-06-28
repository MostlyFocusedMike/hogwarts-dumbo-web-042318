import React from 'react';
// import augustus_gloop from '../hog-imgs/augustus_gloop'

class HogCard extends React.Component {

  state = {
    visible: false
  }

  handleClick = () =>{
    this.setState({
      visible: !this.state.visible
    }, () => console.log(this.state.visible))
  }

render() {
  const {name, greased, specialty, 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': weight, 'highest medal achieved': medal} = this.props.hog

  console.log(this.props.hog);
  // console.log(this.state.visible);
  return(
    <div onClick={this.handleClick}>
      <h1>{name}</h1>

      {this.state.visible ? (<div className='details'>
        <p>{greased}</p>
        <p>{specialty}</p>
        <p>{weight}</p>
        <p>{medal}</p>
      </div>) : null}
    </div>)
  }
}

export default HogCard;
