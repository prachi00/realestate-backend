export declare const getListingSchema: {
    schema: {
        querystring: {
            type: string;
            properties: {
                listingId: {
                    type: string;
                };
            };
        };
    };
};
export declare const postListingSchema: {
    schema: {
        querystring: {
            type: string;
            required: string[];
            properties: {
                name: {
                    type: string;
                };
                price: {
                    type: string;
                };
            };
        };
    };
};
