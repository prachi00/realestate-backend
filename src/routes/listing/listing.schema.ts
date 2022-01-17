export const listingSchema = {
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
