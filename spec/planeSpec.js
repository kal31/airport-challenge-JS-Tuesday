'use strict';
describe('Plane', () => {
    let plane;
    let airport;
    beforeEach(() => {
      plane = new Plane();
      airport = jasmine.createSpyObj('airport',['clearForLanding']);
    });
    it('can land at an airport', () => {
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });