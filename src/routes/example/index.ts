import { FastifyPluginAsync } from "fastify";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
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

export default example;
