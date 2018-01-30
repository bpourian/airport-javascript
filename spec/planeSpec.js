describe('Plane', function () {

  var plane;
  var airport;

  beforeEach(function () {
      plane = new Plane();
      airport = 'Heathrow';
      plane.land(airport);
  });

  describe('Landing', function () {
    it('Plane should have status landed', function () {
      expect(plane.landed).toEqual(true);
    });

    it('Should store airport details', function functionName() {
      expect(plane.airportName).toEqual('Heathrow');
    });
  });

  describe('Take-off', function () {
    it('Plane should have status flying', function functionName() {
      expect(plane.landed).toEqual(true);
      plane.takeOff();

      expect(plane.landed).toEqual(false);
    });

    it('Plane should have airport details empty', function functionName() {
      expect(plane.landed).toEqual(true);
      plane.takeOff();
      
      expect(plane.airportName).toEqual('');
    });
  });

});
