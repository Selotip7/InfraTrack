import * as report from "#src/services/report.services.js";
import { asyncHandler } from "#src/handler/async.handler.js";

export const upReport = asyncHandler(async (req, res, next) => {
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

  const result = await report.upReport(req);

  if (result.rowCount === 0) {
    const error = new Error("Failed to create report.");
    error.code = 500;
    throw error;
  }

  const report_id = result.rows[0].id;
  
  for (const file of req.files) {
  await report.upImages({ body: { id: report_id, image_path: file.path } });
  }


  // const upImagesResult = await report.upImages({ , body: { id: report_id, image_path: req.file.path } });
  return res.json({
    success: true,
    message: "report created successfully",
    report_id: result.rows[0].id,
  });
});
