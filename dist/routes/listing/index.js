"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listing = async (fastify, opts) => {
    fastify.get("/listing", async function (request, reply) {
        return { root: true };
    });
    fastify.post("/", async function (request, res) {
        const { name, price, description, address, rooms, area, type } = request.body;
        console.log("contenttt", name, price, description, address, rooms, area, type);
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
};
exports.default = listing;
//# sourceMappingURL=index.js.map