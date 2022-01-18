"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listing_schema_1 = require("./listing.schema");
const listing = async (fastify, opts) => {
    fastify.get("/", listing_schema_1.getListingSchema, async function (request, reply) {
        const { listingId } = request.query;
        if (!listingId) {
            const allListing = await fastify.prisma.listing.findMany();
            return { allListing };
        }
        const listing = await fastify.prisma.listing.findUnique({
            where: {
                id: listingId,
            },
        });
        return { listing };
    });
    fastify.post("/", async function (request, res) {
        const { name, price, description, address, rooms, area, type } = request.body;
        const data = {};
        if (rooms) {
            data.rooms = rooms;
        }
        if (area) {
            data.area = area;
        }
        if (type) {
            data.type = type;
        }
        if (description) {
            data.description = description;
        }
        if (address) {
            data.address = address;
        }
        const listing = await fastify.prisma.listing.create({
            data: {
                name: name,
                price: price,
                ...data,
            },
        });
        return { listing };
    });
    fastify.patch("/", async function (request, res) {
        const { name, price, description, address, rooms, area, type, listingId } = request.body;
        const data = {};
        if (rooms) {
            data.rooms = rooms;
        }
        if (area) {
            data.area = area;
        }
        if (type) {
            data.type = type;
        }
        if (description) {
            data.description = description;
        }
        if (address) {
            data.address = address;
        }
        if (name) {
            data.name = name;
        }
        if (price) {
            data.price = price;
        }
        const listing = await fastify.prisma.listing.update({
            where: {
                id: listingId,
            },
            data: {
                ...data,
            },
        });
        return { listing };
    });
};
exports.default = listing;
//# sourceMappingURL=index.js.map