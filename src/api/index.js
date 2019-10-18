import { wpFetch } from "./request"

export function getPost(postId) {
	return wpFetch(`/posts/${postId}`)
}

export function getPosts() {
	return wpFetch("/posts")
}
