import React from 'react'

class Pet extends React.Component {

  state = {
    isAdopted: this.props.pet.isAdopted
  }


  localOnAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
    this.setState({isAdopted: true})
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀':'♂'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={!this.state.isAdopted ? "ui disabled button":null}>Already adopted</button>
          <button onClick={this.localOnAdoptPet} className={this.state.isAdopted ? "ui disabled button":"ui primary button"}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
