import RequestParamsService from "./requestParamsService";

class ResourceService {
    private readonly url: string = 'http://localhost:3000/api/';
    protected readonly resource: string = 'resource';

    protected loadData(params?: RequestParamsService): Promise<any> {
        return fetch(this.getRouteWithParams(params), {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then((data: any) => {
            return data.json()
        }) 
    }

    private getRouteWithParams(params?: RequestParamsService): string {
        return this.url + this.resource + '?' + params?.getParams();
    }
}

export default ResourceService;