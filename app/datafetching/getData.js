export default async function getData(id) {

    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return result.json();
}
