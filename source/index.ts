import isRemoteUrl from 'vamtiger-is-remote-url';
import getStylesheetPaths from 'vamtiger-get-stylesheet-paths';


export default async function getLocalStylesheetPaths(params: Params) {
    const html = params.html;
    const allLocalStylesheetPaths = await Promise.all(
        getStylesheetPaths({ html }).map(url => getLocalStylesheetPath({ url }))
    );
    const localStylesheetPaths = allLocalStylesheetPaths
        .filter(localStylesheetPath => localStylesheetPath ? true : false) as string[];

    return localStylesheetPaths;
}

async function getLocalStylesheetPath(params: GetLocalStylesheetPathParams) {
    const url = params.url;
    const remoteUrl = await isRemoteUrl({ url });
    const localUrl = !remoteUrl && url || undefined;

    return localUrl;
}

export interface Params {
    html: string;
}

export interface GetLocalStylesheetPathParams {
    url: string;
}