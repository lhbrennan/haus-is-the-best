import React from 'react';
import InstrumentGroup from './InstrumentGroup.jsx';

// const createInstrumentGroups = (numInstrumentGroups, numPads) => {
//   const InstrumentGroups = [];
//   for (let i = 0; i < numInstrumentGroups; i++) {
//     InstrumentGroups.push(<InstrumentGroup key={i} numPads={numPads} />);
//   }
//   return InstrumentGroups;
// }

// const Beat = props => (
//   <div>
//     {createInstrumentGroups(props.numInstrumentGroups, props.resolution / 4)}
//   </div>
// );

class Beat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createInstrumentGroups() {
    const instrumentGroups = [];
    for (let i = 0; i < this.props.numInstrumentGroups; i++) {
      InstrumentGroups.push(<InstrumentGroup key={i} numPads={this.props.resolution / 4} />);
    }
    return InstrumentGroups;    
  }

  render() {
    const {instruments, resolution} = this.props;
    return (
      <div>
        {instruments.map(instrument => <InstrumentGroup numPads={resolution / 4} key={instrument}/>)}
      </div>
    );
  }
}

export default Beat;