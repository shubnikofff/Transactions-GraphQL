import initialData from "./initialData";

export default new Map(initialData.map(record => [record.id, record]));
