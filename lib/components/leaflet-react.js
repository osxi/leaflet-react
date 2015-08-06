"use strict";

class LeafletReact extends React.Component {
  componentDidMount() {
    var map = this._initializeMap();

    new L.Control.Zoom({
      position: this.props.zoomControlPosition || "bottomleft"
    }).addTo(map);

    map.setView([this.props.lat, this.props.lon], this.props.zoom);
  }

  render() {
    return(<div className="map">Loading map...</div>);
  }

  _initializeMap() {
    return L.map(React.findDOMNode(this), {
      minZoom: this.props.minZoom,
      maxZoom: this.props.maxZoom,
      zoomControl: false,
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      ],
      attributionControl: false
    });
  }
}
