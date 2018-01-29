function Airport() {

}

Airport.prototype.land = function (plane) {
  var weather = this._isStormy();
  return this.permisionToLand(weather, plane);
};

Airport.prototype._isStormy = function () {
  var random = Math.floor(Math.random() * 20);
  if (random % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

Airport.prototype.permisionToLand = function (weather , plane) {
  if (weather) {
    throw new Error('Stormy weather unable to land.');
  } else {
    this.hanger(plane);
    return 'Plane landed';
  }
};

Airport.prototype.hanger = function (plane) {
  //needs to store plane in array
  //var hanger += {plane};
};
