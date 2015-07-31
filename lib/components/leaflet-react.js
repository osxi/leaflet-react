"use strict";

class LeafletReact extends React.Component {
  componentDidMount() {
    var thisElement = $(React.findDOMNode(this))[0];

    var map = L.map(thisElement, {
      minZoom: this.props.minZoom,
      maxZoom: this.props.maxZoom,
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      ],
      attributionControl: false
    });

    map.setView([this.props.lat, this.props.lon], this.props.zoom);
  }

  render() {
    return(<div className="map">Loading map...</div>);
  }
}
