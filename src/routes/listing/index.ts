import { getListingSchema } from "./listing.schema";
import { FastifyPluginAsync } from "fastify";

const listing: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", getListingSchema, async function (request: any, reply) {
    const { listingId } = request.query;
    if (!listingId) {
      // return all lisitings if id is not there
      const allListing = await fastify.prisma.listing.findMany();
      return { allListing };
    }
    // By ID
    let listing: any = await fastify.prisma.listing.findUnique({
      where: {
        id: listingId,
      },
    });

    const amenities = await fastify.prisma.amenities.findMany({
      where: {
        id: { in: listing?.amenities },
      },
    });
    listing.amenities = amenities;
    return { listing };
  });

  fastify.post("/", async function (request: any, res) {
    const { name, price, description, address, rooms, area, type, amenities } =
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
    if (amenities) {
      data.amenities = amenities;
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

  fastify.patch("/", async function (request: any, res) {
    const { name, price, description, address, rooms, area, type, listingId } =
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

  fastify.delete("/", async function (request: any, reply) {
    const { listingId } = request.body;
    // By ID
    await fastify.prisma.listing.delete({
      where: {
        id: listingId,
      },
    });
    return "deleted successfully";
  });
};

export default listing;
