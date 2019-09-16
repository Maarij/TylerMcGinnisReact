async function getRepos(language) {
    try {
        const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

        let response = await fetch(endpoint);
        let reposData = await response.json();

        if(!reposData.items) {
            throw new Error(reposData.message)
        }

        return reposData.items;
    }
    catch(e) {
        console.log(e);
    }
}

export function fetchPopularRepos (language) {
    return getRepos(language);
}
