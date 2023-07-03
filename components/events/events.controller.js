exports.getEvents = async (req, res) => {
  const {
    page = 1,
    limit = 20,
    sortBy = "_id",
    order = "asc",
    ...others
  } = req.query;
  try {
    let events = await getProducts(page, +limit, sortBy, order, others);
    return res.send({
      message: "Product found",
      data: events.data,
      totalPages: Math.ceil(events.totalCount / limit),
    });
  } catch (error) {
    return sendError(res, error);
  }
};

