export default class EnvironementType {

    constructor(name, humidity, actionsSupported){
        this.name = name;
        this.humidity = humidity;
        this.actionsSupported = actionsSupported;
        this.sciencePower = 4 - actionsSupported.size();
    }
}