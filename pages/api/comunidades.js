import { SideClient } from "datocms-client";

export default async function recebedorDeRequest(request, response) {
  if (request.method === "POST") {
    const TOKEN = "6c2cbbc8926879031c8b7df819e5ce";
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: "968619",
      ...request.body,
    });

    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
  }
}
