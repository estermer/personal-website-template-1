const publicWordpressAPI = "http://public-api.wordpress.com/rest/v1"
const wordpressSite = "yoursite.wordpress.com"

export function wpFetch(path, options) {
	return fetch(`${publicWordpressAPI}/sites/${wordpressSite}${path}`, {
		method: "GET",
		...options,
	}).then(res => res.json())
}
