class CustomRequest extends Request {
    public params: any = {};

    constructor(request: Request) {
        super(request);

        const searchParams = new URL(request.url).searchParams;

        searchParams.forEach((value, key) => {
            this.params[key] = value;
        })
    }
}

export default CustomRequest;