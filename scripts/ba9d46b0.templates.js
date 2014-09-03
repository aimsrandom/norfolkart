Ember.TEMPLATES["about/index"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("\n        JavaScript license information\n    ")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this,n=c.helperMissing;return e.buffer.push('<div class="pure-g" id="about">\n  <div class="pure-u-1-1">\n    <p>\n        This project attempts to remake the iArtNorfolk website using all free software client-side technology and open data. The application uses:\n    </p>\n\n    <ul>\n        <li>\n            <a href="https://github.com/c4hrva/proxy-art">\n              The iArtNorfolk Data Proxy\n            </a>\n            \n            (HTTP access <a href="http://norfolkart.herokuapp.com">here</a>)\n        </li>\n        \n        <li>\n            <a href="http://www.emberjs.com/">\n                Ember.js\n            </a>\n        </li>\n\n        <li>\n            <a href="http://www.leafletjs.com/">\n                Leaflet\n            </a>\n        </li>\n\n        <li>\n            <a href="http://www.openstreetmap.org/">\n                OpenStreetMap\n            </a>\n        </li>\n        \n        <li>\n            <a href="http://purecss.io/">\n                Pure CSS\n            </a>\n        </li>\n    </ul>\n\n    '),i={rel:b},j={rel:"STRING"},k={hash:{rel:"jslicense"},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:i,hashTypes:j,data:e},g=c["link-to"]||b["link-to"],h=g?g.call(b,"about.javascript",k):n.call(b,"link-to","about.javascript",k),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n  </div>\n</div>\n\n"),l}),Ember.TEMPLATES["about/javascript"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<!--\n    An HTML5 mobile app for navigating & browsing locations of public art,\n    architecture, and culture in Norfolk, VA.\n    Copyright (C) 2014 Code for Hampton Roads contributors\n\n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n    -->\n<div class="pure-g pure-u-1-1">\n  <table class="pure-table jslicense-table">\n      <tr>\n          <th>\n              File\n          </th>\n\n          <th>\n              License\n          </th>\n\n          <th>\n              Source\n          </th>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="scripts/3783c1ca.components.js">\n                  3783c1ca.components.js\n              </a>\n          </td>\n\n          <td>\n              <a href="https://www.gnu.org/licenses/gpl-3.0.html">\n                  GNU-GPL-3.0-or-later\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/c4hrva/norfolkart/archive/gh-pages.zip">\n                  gh-pages.zip\n              </a>\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="bower_components/handlebars/handlebars.js">\n                  handlebars.js\n              </a>\n          </td>\n\n          <td>\n              <a href="http://www.jclark.com/xml/copying.txt">\n                  Expat\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/wycats/handlebars.js/archive/v1.2.1.tar.gz">\n                  v1.2.1.tar.gz\n              </a>\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="bower_components/ember/ember.js">\n                  ember.js\n              </a>\n          </td>\n\n          <td>\n              <a href="http://www.jclark.com/xml/copying.txt">\n                  Expat\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/emberjs/ember.js/archive/v1.5.1.tar.gz">\n                  v1.5.1.tar.gz\n              </a>\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="bower_components/ember-data/ember-data.js">\n                  ember-data.js\n              </a>\n          </td>\n\n          <td>\n              <a href="http://www.jclark.com/xml/copying.txt">\n                  Expat\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/emberjs/data/archive/v1.0.0-beta.8.tar.gz">\n                  v1.0.0-beta.8.tar.gz\n              </a>\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="bower_components/leaflet/dist/leaflet.js">\n                  leaflet.js\n              </a>\n          </td>\n\n          <td>\n              <a href="http://www.freebsd.org/copyright/freebsd-license.html">\n                  Simplified-BSD\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/Leaflet/Leaflet/archive/v0.7.3.tar.gz">\n                  v0.7.3.tar.gz\n              </a>\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="bower_components/leaflet/dist/leaflet-src.js">\n                  leaflet-src.js\n              </a>\n          </td>\n\n          <td>\n              <a href="http://www.freebsd.org/copyright/freebsd-license.html">\n                  Simplified-BSD\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/Leaflet/Leaflet/archive/v0.7.3.tar.gz">\n                  v0.7.3.tar.gz\n              </a>\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="bower_components/leaflet/dist/leaflet.js">\n                  leaflet.js\n              </a>\n          </td>\n\n          <td>\n              <a href="http://www.freebsd.org/copyright/freebsd-license.html">\n                  Simplified-BSD\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/Leaflet/Leaflet/archive/v0.7.3.tar.gz">\n                  v0.7.3.tar.gz\n              </a>\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="bower_components/ember-leaflet/dist/ember-leaflet.js">\n                  ember-leaflet.js\n              </a>\n          </td>\n\n          <td>\n              <a href="http://www.jclark.com/xml/copying.txt">\n                  Expat\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/gabesmed/ember-leaflet/archive/v0.5.0.tar.gz">\n                  v0.5.0.tar.gz\n              </a>\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="scripts/ba9d46b0.templates.js">\n                  ba9d46b0.templates.js\n              </a>\n          </td>\n\n          <td>\n              <a href="https://www.gnu.org/licenses/gpl-3.0.html">\n                  GNU-GPL-3.0-or-later\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/c4hrva/norfolkart/archive/gh-pages.zip">\n                  gh-pages.zip\n              </a>\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              <a href="scripts/cbbfa75f.main.js">\n                  cbbfa75f.main.js\n              </a>\n          </td>\n\n          <td>\n              <a href="https://www.gnu.org/licenses/gpl-3.0.html">\n                  GNU-GPL-3.0-or-later\n              </a>\n          </td>\n\n          <td>\n              <a href="https://github.com/c4hrva/norfolkart/archive/gh-pages.zip">\n                  gh-pages.zip\n              </a>\n          </td>\n      </tr>\n  </table>\n</div>\n')}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("\n          <button>List</button>\n          ")}function g(a,b){b.buffer.push("\n          <button>Map</button>\n          ")}function h(a,b){b.buffer.push("\n        <button>About</button>\n          ")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this.escapeExpression,p=this,q=c.helperMissing;return e.buffer.push('<!--\n    An HTML5 mobile app for navigating & browsing locations of public art,\n    architecture, and culture in Norfolk, VA.\n    Copyright (C) 2014 Code for Hampton Roads contributors\n\n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n    -->\n<!--<div class="pure-u">-->\n  '),k={},l={},e.buffer.push(o(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push('\n<!--</div>-->\n<div>\n  <div class="pure-menu pure-menu-open pure-menu-horizontal navbar">\n    <ul>\n        <li>\n          '),k={},l={},m={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"exhibits",m):q.call(b,"link-to","exhibits",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n        </li><li>\n          "),k={},l={},m={hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"map",m):q.call(b,"link-to","map",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n        </li><li>\n          "),k={},l={},m={hash:{},inverse:p.noop,fn:p.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"about",m):q.call(b,"link-to","about",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n        </li><li>\n        <a><!--Keep style Consistent-->\n        <button "),k={},l={},e.buffer.push(o(c.action.call(b,"findMe",{hash:{},contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push(">Find Me</button>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"),n}),Ember.TEMPLATES.exhibit=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('<!--\n    An HTML5 mobile app for navigating & browsing locations of public art,\n    architecture, and culture in Norfolk, VA.\n    Copyright (C) 2014 Code for Hampton Roads contributors\n\n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n    -->\n<div class="pure-g exhibit"><!--Start of Container-->\n  <div class="pure-u-1-1 pure-img">\n    <img '),g={src:b},h={src:"STRING"},i={hash:{src:"this.fullimage"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bind-attr"]||b["bind-attr"],f?f.call(b,i):k.call(b,"bind-attr",i)))),e.buffer.push(' class="pure-img" />\n  </div>\n\n  <div class="pure-u-1-1 title">\n      <h1>'),h={},g={},e.buffer.push(l(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push('</h1>\n  </div>\n\n  <div class="pure-u-1-1 artists">\n      <h2>Artists</h2>\n      '),h={},g={},e.buffer.push(l(c._triageMustache.call(b,"artists",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push('\n  </div>\n\n  <div class="pure-u-1-1 location">\n      <h2>Location</h2>\n      '),h={},g={},e.buffer.push(l(c._triageMustache.call(b,"location",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push('\n  </div>\n\n  <div class="pure-u-1-1">\n      <h2>Description</h2>\n      <p class="description">'),h={},g={},e.buffer.push(l(c._triageMustache.call(b,"description",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push("</p>\n  </div>\n\n</div> <!--End of Container-->\n"),j}),Ember.TEMPLATES.exhibits=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n      "),f={},h={},i={hash:{},inverse:n.noop,fn:n.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"exhibit","",i):l.call(a,"link-to","exhibit","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n    "),j}function g(a,b){var d,e,f,g,h="";return b.buffer.push('\n	<div class="record pure-u">\n            <div class="pure-u-4-5">\n                <img '),e={src:a},f={src:"STRING"},g={hash:{src:"this.fullimage"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(m((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):l.call(a,"bind-attr",g)))),b.buffer.push(' class="thumbnail pure-img img" />\n                <span class="record-title">'),f={},e={},b.buffer.push(m(c._triageMustache.call(a,"title",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push('\n                <br />\n                <span class="record-location">'),f={},e={},b.buffer.push(m(c._triageMustache.call(a,"location",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push('</span>\n            </div>\n\n            <div class="pure-u-1-5">\n              <!-- <img src="/images/arrow.png" class="arrow" /> -->\n            </div>\n        </div>\n      '),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=c.helperMissing,m=this.escapeExpression,n=this;return e.buffer.push('<!--\n    An HTML5 mobile app for navigating & browsing locations of public art,\n    architecture, and culture in Norfolk, VA.\n    Copyright (C) 2014 Code for Hampton Roads contributors\n\n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n    -->\n<div class="pure-g">\n    '),i={},j={},h=c.each.call(b,"model",{hash:{},inverse:n.noop,fn:n.program(1,f,e),contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</div>\n"),k}),Ember.TEMPLATES["map-popup"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("\n    <p>\n        "),e={},f={},b.buffer.push(m(c._triageMustache.call(a,"title",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("\n    </p>\n\n    <img "),f={src:a},e={src:"STRING"},g={hash:{src:"imageurl"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(m((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):n.call(a,"bind-attr",g)))),b.buffer.push(' class="thumbnail" />\n\n    <p>\n        Details &gt;&gt;\n    </p>\n'),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this.escapeExpression,n=c.helperMissing,o=this;return e.buffer.push("<!--\n    An HTML5 mobile app for navigating & browsing locations of public art, \n    architecture, and culture in Norfolk, VA. \n    Copyright (C) 2014 Code for Hampton Roads contributors\n\n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n    -->\n"),i={},j={},k={hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b,b],types:["STRING","ID"],hashContexts:j,hashTypes:i,data:e},g=c["link-to"]||b["link-to"],h=g?g.call(b,"exhibit","id",k):n.call(b,"link-to","exhibit","id",k),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n\n\n"),l});