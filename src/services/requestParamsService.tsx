class RequestParamsService {
    private readonly params: any = {};

    constructor(params: any) {
        if(Object.keys(params).length > 0) {
            Object.keys(params).forEach((key: string) => {
                this.setParam(key, params[key]);
            })
        }
    }

    /**
     * Set param of a request
     * @param key 
     * @param value 
     */
    public setParam(key: string, value: any): void {
        this.params[key] = value;
    }

    /**
     * Get specific param value
     * @param key 
     */
    public getParamValue(key: string): void {
        if(!this.params[key]) {
            throw new Error('The param was not found!');
        }

        return this.params[key];
    }

    /**
     * Get all params
     * @returns 
     */
    public getParams(): string {
        if(Object.keys(this.params).length === 0) {
            return '';
        }

        return JSON.stringify(this.params);
    }
}

export default RequestParamsService;