export default async function getAllData() {
    const result = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
        {
            next: {
                revalidate: 10,
            },
        }
    );

    if (!result.ok) {
        throw new Error("There was an error fetching data from the API");
    }

    return result.json();
}
