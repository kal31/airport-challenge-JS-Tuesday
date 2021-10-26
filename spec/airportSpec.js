describe ('Airport', ()=> {
    let airport;
    let plane;
    beforeEach(() => {
        airport = new Airport();
        plane = new Plane();
    });

    describe ('plane can land', ()=> {
        it('at an airport', () => {

          expect(airport.land(plane)).toBe(plane);
        
       

        });

    });

});