import mongoose from "mongoose";

// Subschemas für objecten, es geht nicht {name:String}

const universeSchema = new mongoose.Schema({
  name: String,
});

const contactSchema = new mongoose.Schema({
  last_name: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  favorite: {
    type: Boolean,
  },
  money: {
    type: Number,
    min: 101,
    max: 999,
  },
  ort: String, // wenn man nur den type setzen will, dann reicht auch diese kurzschreibweise
  powers: [String], // wir erstellen ein array
  universum: universeSchema, //subdokument embetend, // wir binden ein subdokument in unser dokument mit ein (object)
  sidekick: { type: mongoose.Types.ObjectId, ref: "Contacts" }, //wir können so auf ein anderes object aus einer beliebigen collection, ntacts' } // wir können so auf ein anderes objekt aus einer beliebigen collection refere
});

//mongoose validation is schwächer als die von joi, man kann die beide convinieren
//en money speichern nur die werte die in diesen range 101-999
//ort ist in kurzschreibweise
export const ContactModel = mongoose.model("Contacts", contactSchema);
