

export async function getAPI(api) {
    return (await fetch (api)).json();
}