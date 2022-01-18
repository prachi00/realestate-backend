export const getListingSchema = {
  schema: {
    querystring: {
      type: "object",
    //   required: ["listingId"],
      properties: {
        listingId: { type: "string" },
      },
    },
  },
};

export const postListingSchema = {
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
