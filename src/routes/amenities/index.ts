import { FastifyPluginAsync } from "fastify";

const Amenities: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request: any, reply) {
    // return all lisitings if id is not there
    const amenities = await fastify.prisma.amenities.findMany();
    return { amenities };
  });

  fastify.post("/", async function (request: any, res) {
    const { name, icon } = request.body;

    const data: any = {};
    if (icon) {
      data.icon = icon;
    }
    const amenities = await fastify.prisma.amenities.create({
      data: {
        name: name,
        ...data,
      },
    });
    // res.send(listing)

    return { amenities };
  });

  //   fastify.delete("/", async function (request: any, reply) {
  //     const { listingId } = request.body;
  //     // By ID
  //     await fastify.prisma.listing.delete({
  //       where: {
  //         id: listingId,
  //       },
  //     });
  //     return "deleted successfully";
  //   });
};

export default Amenities;
