import Races from '../model/Races';

export default class RacesController {

    constructor(axiosResource) {

        this._axiosResource = axiosResource;

    }

    getList() {
        return new Promise((resolve, reject) => {

            try {
                this._axiosResource.get(`races/`).then((res) => {

                    let resultCall = res.data.results;
                    let classes = [];
                    
                    resultCall.forEach(trace => {

                        classes.push(
                                new Races(trace.name,
                                    trace.slug,
                                    trace.desc,
                                    trace.asi_desc,
                                    trace.age,
                                    trace.alignment,
                                    trace.size)
                        );
                    });

                    resolve(classes);
                });
            } catch(error) {
                reject(error);
            }
        });
    }

    getByName(nameRace) {
        return new Promise((resolve, reject) => {
            try {
                this._axiosResource.get(`races/${nameRace}`).then((response) => {
                    let trace = new Races(
                        response.data.name,
                        response.data.slug,
                        response.data.desc,
                        response.data.asi_desc,
                        response.data.age,
                        response.data.alignment,
                        response.data.size)
                    resolve(trace);
                })
            } catch(error) {
                reject(error);
            }
        });
    }
}