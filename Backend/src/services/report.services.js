import pool from "#src/conn.js";

export const upReport = async (client,req) => {
  const {
    tittle,
    description,
    category_id,
    severity_id,
    reporter_id,
    latitude,
    longitude,
    address,
    status_id,
  } = req.body;
  const result = await client.query(
    "insert into reports (tittle,description,category_id,severity_id,reporter_id,latitude,longitude,address,status_id) values($1,$2,$3,$4,$5,$6,$7,$8,$9) returning id",
    [
      tittle,
      description,
      category_id,
      severity_id,
      reporter_id,
      latitude,
      longitude,
      address,
      status_id,
    ],
  );
  return result;
};

export const upImages = async (client,req) => {
  //  throw new Error("Simulasi gagal upload image");
  const { id, image_path } = req.body;
  const result = await client.query(
    "insert into report_images (report_id,image_path) values($1,$2)",
    [id, image_path],
  );
  return result;
};
