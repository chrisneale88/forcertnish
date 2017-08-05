export class Plant {

    plantId: string;
    make?: string;
    model?: string;
    siteId?: string;

    constructor(plantId: string, make: string, model?: string, siteId?: string) {
        this.plantId = plantId;
        this.make = make;
        this.model = model;
        this.siteId = siteId;
    }

}