import { useNavigate } from "react-router-dom";
import React from "react";
import { instances } from "../../../config/axios/axios.instances";

export abstract class Base extends React.Component {
    protected _private = instances.private;
    protected _public = instances.public;
    private _navigate = useNavigate();

    constructor() {
        super({});
    };

    protected navigate(route: string) {
        this._navigate(`/${route}`);
    };
};
