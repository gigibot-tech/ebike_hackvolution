export function fetchGet(api_url, path_param) {
    let url = api_url + `${path_param}`;
    return fetch(url, { "method": "GET" });
}

export function fetchGetWithQuery(api_url, path_param, query_key, query_value) {
    let url = api_url + `${path_param}` + `?` + query_key + `=` + query_value;
    return fetch(url, { "method": "GET" });
}

export function fetchPost(api_url, path_param, bodycontent) {
    let url = api_url + `${path_param}`;
    return fetch(url, {
        "method": "POST",
        "body": bodycontent,
        "headers": {
            "Content-Type": "application/json"
        }
    });
}

export function fetchPostWithQuery(api_url, path_param, query_key, query_value, bodycontent) {
    let url = api_url + `${path_param}` + `?` + query_key + `=` + query_value;
    return fetch(url, {
        "method": "POST",
        "body": bodycontent
    });
}