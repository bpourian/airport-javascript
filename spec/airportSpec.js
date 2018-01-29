describe('Airport', function functionName() {

  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
  });

  describe('Weather', function () {
    it('Airport refuses landing due to bad weather', function () {
      spyOn(airport, "_isStormy").and.returnValue(true);
      expect(function(){ airport.land(plane); }).toThrow(new Error('Stormy weather unable to land.'));
    });

    it('Airport allows landing', function () {
      spyOn(airport, "_isStormy").and.returnValue(false);
      expect(airport.land(plane)).toEqual('Plane landed');
    });
  });
});
