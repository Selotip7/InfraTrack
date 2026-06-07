import * as report from "#src/services/report.services.js";
import { asyncHandler } from "#src/handler/async.handler.js";
import pool from "#src/conn.js";
import fs from "fs/promises";
// export const upReport = asyncHandler(async (req, res, next) => {
//   const {
//     tittle,
//     description,
//     category_id,
//     severity_id,
//     reporter_id,
//     latitude,
//     longitude,
//     address,
//     status_id,
//   } = req.body;
//   console.log("after result running")

//   if (
//     !tittle ||
//     !description ||
//     !category_id ||
//     !severity_id ||
//     !reporter_id ||
//     !latitude ||
//     !longitude ||
//     !address ||
//     !status_id
//   ) {
//     const error = new Error("You must fill in all required fields.");
//     error.code = 400;
//     throw error;
//   }

//   const result = await report.upReport(req);
//   if (result.rowCount === 0) {
//     const error = new Error("Failed to create report.");
//     error.code = 500;
//     throw error;
//   }
// // console.log("after result running");
//   const report_id = result.rows[0].id;
  
//   for (const file of req.files) {
//   await report.upImages({ body: { id: report_id, image_path: file.path } });
//   }


//   // const upImagesResult = await report.upImages({ , body: { id: report_id, image_path: req.file.path } });
//   return res.json({
//     success: true,
//     message: "report created successfully",
//     report_id: result.rows[0].id,
//   });
// });

export const upReport = async (req, res, next) => {
  const client= await pool.connect();
  try {
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
    console.log("after result running");

    if (
      !tittle ||
      !description ||
      !category_id ||
      !severity_id ||
      !reporter_id ||
      !latitude ||
      !longitude ||
      !address ||
      !status_id
    ) {
      const error = new Error("You must fill in all required fields.");
      error.code = 400;
      throw error;
    }
    await client.query("BEGIN");
    const result = await report.upReport(client, req);
    if (result.rowCount === 0) {
      const error = new Error("Failed to create report.");
      error.code = 500;
      throw error;
    }
    // console.log("after result running");
    const report_id = result.rows[0].id;

    for (const file of req.files) {
      await report.upImages(client, {
        body: { id: report_id, image_path: file.path },
      });
    }
    await client.query("COMMIT");
    // const upImagesResult = await report.upImages({ , body: { id: report_id, image_path: req.file.path } });
    return res.json({
      success: true,
      message: "report created successfully",
      report_id: result.rows[0].id,
    });
  } catch (err) {
    await client.query("ROLLBACK");

    for (const file of req.files || []) {
      await fs.unlink(file.path);
    }

    next(err);
  } finally {
    client.release();
  }
};
