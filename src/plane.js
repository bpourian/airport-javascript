function Plane() {
  this.airportName = '';
  this.landed = false;
}

Plane.prototype.land = function (airport) {
  this.airportName = airport;
  this.landed = true ;
};

Plane.prototype.takeOff = function () {
  this.airportName = '';
  this.landed = false ;
};

// Plane.prototype.isFlying = function () {
//   return this.landed;
// };

// Plane.prototype.airportName = function () {
//   return airport_name;
// };
