"use strict";

class LeafletReact extends React.Component {
  componentDidMount() {
    var thisElement = $(React.findDOMNode(this))[0];

    var map = L.map(thisElement, {
      minZoom: 2,
      maxZoom: 20,
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      ],
      attributionControl: false
    });

    map.setView([29.817178, -95.4012915], 10);
  }

  render() {
    return(<div className="map">Loading map...</div>);
  }
}
