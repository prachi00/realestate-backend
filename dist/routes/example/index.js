"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example = async (fastify, opts) => {
    fastify.get("/", async function (request, reply) {
        await fastify.prisma.user.create({
            data: {
                name: "Rich",
                email: "hello@prisma.com",
                posts: {
                    create: {
                        title: "My first post",
                        body: "Lots of really interesting stuff",
                        slug: "my-first-post",
                    },
                },
            },
        });
        const allUsers = await fastify.prisma.user.findMany({
            include: {
                posts: true,
            },
        });
        console.dir(allUsers, { depth: null });
        return "example test";
    });
};
exports.default = example;
//# sourceMappingURL=index.js.map