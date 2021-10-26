'use strict';

describe('Feature Test:', () => {
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', () => {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
