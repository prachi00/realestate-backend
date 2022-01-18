"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postListingSchema = exports.getListingSchema = void 0;
exports.getListingSchema = {
    schema: {
        querystring: {
            type: "object",
            properties: {
                listingId: { type: "string" },
            },
        },
    },
};
exports.postListingSchema = {
    schema: {
        querystring: {
            type: "object",
            required: ["name", "price"],
            properties: {
                name: { type: "string" },
                price: { type: "number" },
            },
        },
    },
};
//# sourceMappingURL=listing.schema.js.map