const EventModel = require("./events/events.model");

const getEventById = async (id) => {
  try {
    return await EventModel.findById(id);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getEvents = async (page, limit, sortBy, order, others) => {
  try {
    let data = await EventModel.aggregate([
      { $match: { ...others } },
      {
        $facet: {
          data: [
            { $sort: { [sortBy]: order == "asc" ? 1 : -1 } },
            { $skip: (page - 1) * limit },
            { $limit: limit },
          ],
          totalCount: [{ $count: "count" }],
        },
      },
    ]).collation({ locale: "en", strength: 2 });
    return { data: data[0].data, totalCount: data[0].totalCount[0].count };
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getEvents, getEventById };
