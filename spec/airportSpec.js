describe ('Airport', ()=> {
    let airport;
    let plane;
    beforeEach(() => {
        airport = new Airport();
        plane = new Plane();
    });

    describe ('plane can', ()=> {
        it('land at an airport', () => {
          expect(airport.land(plane)).toBe(plane);
        });

        it('take off from an airport', ()=> {
            expect(airport.takeoff(plane)).toEqual("Plane no longer in the airport");
        })

    });

});
