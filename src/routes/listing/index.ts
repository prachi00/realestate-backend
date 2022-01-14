import { FastifyPluginAsync } from "fastify";

const listing: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/listing", async function (request, reply) {
    return { root: true };
  });

  fastify.post("/", async function (request: any, res) {
    const { name, price, description, address, rooms, area, type } =
      request.body;

    const data: any = {};
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
    // res.send(listing)

    return { listing };
  });
};

export default listing;
