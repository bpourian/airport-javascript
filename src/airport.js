function Airport() {
  this.hanger = [];
}

Airport.prototype.land = function (plane) {
  var weather = this._isStormy();
  return this.permisionToLand(weather, plane);
};

Airport.prototype.takeOff = function (plane) {
  var weather = this._isStormy();
  return this.permisionToTakeOff(weather, plane);
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
    this.addToHanger(plane);
    return 'Plane landed';
  }
};

Airport.prototype.permisionToTakeOff = function (weather , plane) {
  if (weather) {
    throw new Error('Stormy weather unable to takeOff.');
  } else {
    this.removeFromHanger(plane);
    return 'Plane took-off';
  }
};



Airport.prototype.addToHanger = function (plane) {
  this.hanger.push(plane);
};

Airport.prototype.removeFromHanger = function (plane) {
  this.hanger.pop(plane);
};
