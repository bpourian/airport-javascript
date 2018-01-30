describe('Airport', function functionName() {

  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
  });

  describe('Weather - landing', function () {
    it('Airport refuses landing due to bad weather', function () {
      spyOn(airport, "_isStormy").and.returnValue(true);
      
      expect(function(){ airport.land(plane); }).toThrow(new Error('Stormy weather unable to land.'));
    });

    it('Airport allows landing', function () {
      spyOn(airport, "_isStormy").and.returnValue(false);

      expect(airport.land(plane)).toEqual('Plane landed');
    });
  });

  describe('Weather - take-off', function () {
    it('Airport refuses take-off due to bad weather', function () {
      airport.addToHanger(plane);
      spyOn(airport, "_isStormy").and.returnValue(true);

      expect(airport.takeOff(plane)).toEqual('Plane landed');
    });
  });
});
