import RequestParamsService from "./requestParamsService";

const fetcher = async (url: string) => {
    const res = await fetch(url, { next: { revalidate: 1 } });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
  };

class ResourceService {
    private readonly url: string = process.env.NEXT_PUBLIC_API_URL as string;
    protected readonly resource: string = 'resource';

    protected loadData(params?: RequestParamsService, shouldLoad: boolean = true): Promise<any> {
        return fetcher(this.getRouteWithParamsAsString(params));
    }
    
    private getRouteWithParamsAsString(params?: RequestParamsService): string {
        return this.url + this.resource + '?' + params?.getParams();
    }
}

export default ResourceService;