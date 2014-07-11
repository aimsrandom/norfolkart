/*
    An HTML5 mobile app for navigating & browsing locations of public art, 
    architecture, and culture in Norfolk, VA. 
    Copyright (C) 2014 Code for Hampton Roads contributors

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

/** 
  * The exhibit route model.
  *
  * @class ExhibitRoute
  * @namespace Norfolkart
  * @constructor
  * @extends Ember.Route
  */
Norfolkart.ExhibitRoute = Ember.Route.extend({
    /** 
      * Returns the exhibit with the specified id.
      *
      * @method model
      *
      * @param {Object} params The query parameters for the URL.
      *
      * @return {DS.Model} The exhibit with the specified id. 
      */
    model: function (params) {
        'use strict';
        return this.get('store').find('exhibit', params.exhibit_id);
    }
});

