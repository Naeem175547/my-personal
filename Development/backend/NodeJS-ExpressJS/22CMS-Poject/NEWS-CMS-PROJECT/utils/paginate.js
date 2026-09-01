const paginate = async (
    model,
    query = {},
    reqQuery = {},
    options = {}
) => {

    const {
        page = 1,
        limit = 2,
        sort = '-date'
    } = reqQuery;

    const paginationOptions = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort,
        ...options
    };

    try {

        const result = await model.paginate(
            query,
            paginationOptions
        );

        return {
            data: result.docs,
            currentPage: result.page,
            limit: result.limit,
            totalPages: result.totalPages,
            totalDocs: result.totalDocs,
            hasNextPage: result.hasNextPage,
            hasPrevPage: result.hasPrevPage,
            nextPage: result.nextPage,
            prevPage: result.prevPage
        };

    } catch (error) {
        throw error;
    }

};

export default paginate;