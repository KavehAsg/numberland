import { GET_BLOGS } from '../GraphQL/queries';
import { client } from '../main';

export async function blogsLoader({ request }) {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || 0, 10);
    const limit = 9; // Number of items per page
    // let after = null;
    // if (page == 1) {
    //     localStorage.clear();
    // }


    const { data } = await client.query({
        query: GET_BLOGS,
        variables: { after: null, first: 9 },
    });

    const blogs = data.wbPostsConnection.edges.map(edge => edge.node);
    const pageInfo = data.wbPostsConnection.pageInfo;

    // if (page > 1 && localStorage.getItem("endCursor-asPage")) {
    //     let cursors = JSON.parse(localStorage.getItem('endCursor-asPage'));
    //     cursors[page] = pageInfo.endCursor;
    //     after
    //     localStorage.setItem('endCursor-asPage', JSON.stringify(cursors));
    // } else if (page > 1 && !localStorage.getItem("endCursor-asPage")) {
    //     localStorage.setItem('endCursor-asPage', JSON.stringify({ [page]: pageInfo.endCursor }));
    // }

    return {
        blogs,
        pageInfo
    };
}