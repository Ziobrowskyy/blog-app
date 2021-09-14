import { AdapterTranslator } from "web/model/ModelAdapter";
import Model, { ModelData, ModelStructure } from "../../web/Model";

export default function AfterResponse<Data extends ModelData,Structure extends ModelStructure>(target : Model<Data,Structure>, property : string, descriptor : PropertyDescriptor) {
    const method : (result : Structure) => Promise<Model<Data,Structure>> = descriptor.value
    descriptor.value = function(this : Model<Data,Structure>, result : Structure) : Promise<Model<Data,Structure>> {
        this.reverseTranslate = {} as AdapterTranslator<Structure,Data>
        this.afterResponse()
        return method.call(this, result)
    }
}