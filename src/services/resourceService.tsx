import RequestParamsService from "./requestParamsService";
import useSWRInfinite from "swr/infinite";

const fetcher = async (url: string) => {
    const res = await fetch(url);
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

    protected infiniteLoadData(params?: RequestParamsService) {
        const getKey = (pageIndex: number, previousPageData: any) => {
            return this.getRouteWithParamsAsString(params);
          };

        return useSWRInfinite(getKey, fetcher);
    }

    private getRouteWithParams(params?: RequestParamsService): [string, any] {
        return [this.url + this.resource, params?.getParamsAsAnObject()];
    }

    private getRouteWithParamsAsString(params?: RequestParamsService): string {
        return this.url + this.resource + '?' + params?.getParams();
    }
}

export default ResourceService;