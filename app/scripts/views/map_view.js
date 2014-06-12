/*
    An HTML5 mobile app for navigating & browsing locations of public art, 
    architecture, and culture in Norfolk, VA. 
    Copyright (C) 2014 Ryan Y.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Norfolkart.TileLayer = EmberLeaflet.TileLayer.extend({
    tileUrl: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
});

Norfolkart.MarkerLayer = EmberLeaflet.MarkerLayer.extend(EmberLeaflet.PopupMixin, {
    popupContentBinding: 'content.title'
});

Norfolkart.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend({
      contentBinding: 'controller'
    , itemLayerClass: Norfolkart.MarkerLayer
});

Norfolkart.MapView = EmberLeaflet.MapView.extend({
      classNames: ['map']
    , center: L.latLng(36.84765224454971, -76.2922677397728)
    , zoom: 16
    , childLayers: [
	  Norfolkart.TileLayer
	, Norfolkart.MarkerCollectionLayer
    ]
});