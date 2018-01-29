function Plane() {

}

Plane.prototype.land = function (airport) {
  this.airportName = airport;
  this.status = 'Landed';
};

Plane.prototype.takeOff = function () {
  this.airportName = '';
  this.status = 'Flying';
};

Plane.prototype.status = function () {
  return status;
};

Plane.prototype.airportName = function () {
  return airport_name;
};
