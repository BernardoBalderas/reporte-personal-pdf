const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Bernardo Perez Balderas",
    address: "Adolfo Lopez Mateos #8A",
    city: "Tequisquiapan",
    state: "GTO",
    country: "MEXICO",
    postal_code: 37800
  },
  items: [
    {
      item: "Laptop",
      description: "Procesador Intel Core 8",
      quantity: 1,
      amount: 900000
    },
    {
      item: "Celular",
      description: "Moto e5 plus, color gris",
      quantity: 1,
      amount: 700000
    },
    {
      item: "Audifonos",
      description: "Conexion Bluetho Marca Sony Boss",
      quantity: 1,
      amount: 45000
    },
    {
      item: "Balon ",
      description: "Balon Addidas Color Negro",
      quantity: 1,
      amount: 70000
    }
  ],
  subtotal: 1725000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
