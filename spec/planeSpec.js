describe('Plane', function () {

  var plane;
  var airport;

  beforeEach(function () {
      plane = new Plane();
      airport = 'Heathrow';
  });

  describe('Plane landing', function () {
    it('Plane should have status landed', function () {
      plane.land(airport);
      expect(plane.status).toEqual('Landed');
    });

    it('Should store airport details', function functionName() {
      plane.land(airport);
      expect(plane.airportName).toEqual(airport);
    });
  });

});
