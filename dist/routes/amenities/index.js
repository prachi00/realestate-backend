"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Amenities = async (fastify, opts) => {
    fastify.get("/", async function (request, reply) {
        const amenities = await fastify.prisma.amenities.findMany();
        return { amenities };
    });
    fastify.post("/", async function (request, res) {
        const { name, icon } = request.body;
        const data = {};
        if (icon) {
            data.icon = icon;
        }
        const amenities = await fastify.prisma.amenities.create({
            data: {
                name: name,
                ...data,
            },
        });
        return { amenities };
    });
};
exports.default = Amenities;
//# sourceMappingURL=index.js.map