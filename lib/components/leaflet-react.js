"use strict";

class LeafletReact extends React.Component {
  componentDidMount() {
    var map = this._initializeMap();

    new L.Control.Zoom({
      position: this.props.zoomControlPosition || "bottomleft"
    }).addTo(map);

    map.setView([this.props.lat, this.props.lon], this.props.zoom);

    this.props.children.map(child => {
      $.get(child.props.src).done(geoJson => {
        L.geoJson($.parseJSON(geoJson)).addTo(map);
      });
    });

    console.log('this.layers: ', this.state.layers);

    this.state.layers.map(layer => {
      console.log('layer: ', layer);
      layer.addTo(map);
    });
  }

  render() {
    return (
      <div className="map">
        Loading map...
      </div>
    );
  }

  _initializeMap() {
    return L.map(React.findDOMNode(this), {
      minZoom: this.props.minZoom,
      maxZoom: this.props.maxZoom,
      zoomControl: false,
      layers: [
        L.tileLayer(this.props.tileProvider)
      ],
      attributionControl: false
    });
  }
}

class LayerGroup extends React.Component {
  render() {
    return;
  }
}
