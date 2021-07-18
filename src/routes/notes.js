import { Router } from "express";
import Note from "../models/note.js";

const Routes = new Router();

Routes.get("/", async function (req, res, next) {
  const notes = await Note.find({});
  return res.json({ notes });
});

Routes.post("/", async function (req, res, next) {
  const note = await new Note().save();
  return res.json({ note });
});

Routes.put("/:id", async function (req, res, next) {
  const noteId = req.params.id;
  await Note.findOneAndUpdate(
    { _id: noteId },
    {
      $set: {
        content: req.body.content,
        position: req.body.position,
      },
    }
  ).exec();
  return res.json({ updated: true });
});

Routes.delete("/:id", async function (req, res, next) {
  const noteId = req.params.id;
  await Note.deleteOne({ _id: noteId }).exec();
  return res.json({ deleted: true });
});

export default Routes;
