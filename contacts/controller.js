import { ContactModel } from "./model.js";

export async function addContact(req, res) {
  //const contact = req.body;
  //erhalten mongoose model und können db füllen

  const Contact = new ContactModel(req.body);
  try {
    await Contact.save();
    res.end();
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
}

export async function getAllContacts(req, res) {
  const contacts = await ContactModel.find();
  res.json(contacts);
}

export async function getAllDetailsOneContact(req, res) {
  const { id } = req.params;

  //   mit das können auch den verbindete sidekick komplete datei mit der referenzierte id bekommen, wenn eine ist
  const contact = await ContactModel.findOne({ _id: id })
    .populate("sidekick")
    .exec();
  res.json(contact);
}

export async function editContact(req, res) {
  //version um id von oben oder in body aber normalerweiser ist entweder id oben als params
  //   const { id } = req.params.id ? req.params : req.body;
  //   console.log(req.params);
  //   const { name } = req.body;

  const { id } = req.params;

  //   UPDATE nur eine propierty:
  //   const { name } = req.body;
  //   await ContactModel.updateOne({ _id: id }, { name });

  //   UPDATE alles mögliech
  //   wenn mehr als mehr als name
  await ContactModel.updateOne({ _id: id }, { ...req.body });
  res.end();
}

export async function deleteContact(req, res) {
  //version nur um id
  const { id } = req.params;
  await ContactModel.deleteOne({ _id: id });
  res.end();
}
