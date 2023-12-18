import express from "express";
import {
  addContact,
  deleteContact,
  editContact,
  getAllContacts,
  getAllDetailsOneContact,
} from "./controller.js";

export const router = new express.Router();

router.post("/", addContact);
router.get("/", getAllContacts);
router.get("/:id", getAllDetailsOneContact);
router.put("/:id", editContact);
router.delete("/:id", deleteContact);
