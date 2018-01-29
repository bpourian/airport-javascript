describe('Plane', function () {

  var plane;
  var airport;

  beforeEach(function () {
      plane = new Plane();
      airport = 'Heathrow';
      plane.land(airport);
  });

  describe('Plane landing', function () {
    it('Plane should have status landed', function () {
      expect(plane.status).toEqual('Landed');
    });

    it('Should store airport details', function functionName() {
      expect(plane.airportName).toEqual(airport);
    });
  });

  describe('Plane take-off', function () {
    it('Plane should have status flying', function functionName() {
      expect(plane.status).toEqual('Landed');
      plane.takeOff();
      expect(plane.status).toEqual('Flying');
    });

    it('Plane should have airport details empty', function functionName() {
      expect(plane.status).toEqual('Landed');
      plane.takeOff();
      expect(plane.airportName).toEqual('');
    });

  });

});
