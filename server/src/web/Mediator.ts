import DataModel from "./DataModel";

type Fetch = (value: any | PromiseLike<any>) => void;

export interface BodyType {
    _id : string;
}

export default class Mediator<DataType = any> implements DataModel<DataType>, BodyType {

    status : boolean;

    dataResult : DataType | null;

    errorMessage : string | null;

    _id : string;

    public constructor(_id : string) {

        this._id = _id;

        this.status = true;

        this.dataResult = null;

        this.errorMessage = null;

    }

    protected result = (Fetch : Fetch) => (dataResult : DataType | null = null) => {

        this.dataResult = dataResult;

        Fetch(this);

    }

    protected error = (Fetch : Fetch) => (errorMessage : string) => {

        this.status = false;

        this.errorMessage = errorMessage;

        Fetch(this);

    }

}