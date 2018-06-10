export default function getLocalStylesheetPaths(params: Params): Promise<string[]>;
export interface Params {
    html: string;
}
export interface GetLocalStylesheetPathParams {
    url: string;
}
