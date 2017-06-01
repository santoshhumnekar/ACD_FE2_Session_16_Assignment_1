import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from "./app.aboutComponent";


describe('MyList Tests', () => {
    let aboutlist: AboutComponent;
    //let service: MyService = new MyService();

    beforeEach(() => {
        aboutlist = new AboutComponent();
    });

    it('Should get 3 Names', () => {
        //list.ngOnInit();

        expect(aboutlist.lists.length).toBe(3);
        //expect(aboutlist.lists.name).toEqual(['Noel', 'James', 'Robin']);
    });
});