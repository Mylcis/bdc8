import React, { useState } from "react";

const TableauProduits = () => {
  const [produits, setProduits] = useState([
    {
      id: 1,
      designation: "Intens' Drain (14 monodoses)",
      quantite: 3,
      prix: 39.8,
      total: 119.4,
      description:
        "Booster Détox goût Fruits Rouges (Thé vert / Guarana/ Frêne / Algue Ulvaline / Bouleau / Ananas / Reine des prés / Pissenlit / Papaye / Chiendent / Chicorée)",
    },
    {
      id: 2,
      designation: "Total Affin' Rouges (500ml)",
      quantite: 0,
      prix: 38.9,
      total: 0.0,
      description:
        "Draineur goût Fruits Rouges (Thé vert / Maté / Queue de cerise / Radis Noir / Artichaut / Frêne / Bouleau / Reine des prés / Pissenlit)",
    },
    // Ajoute tous tes autres produits ici...
  ]);

  const [fraisDePort] = useState(13.9);

  const calculerTotal = () => {
    return produits.reduce((acc, prod) => acc + prod.total, 0) + fraisDePort;
  };

  const mettreAJourProduit = (id: number, champ: string, valeur: any) => {
    setProduits(
      produits.map((prod) => {
        if (prod.id === id) {
          const newProd = { ...prod, [champ]: valeur };
          newProd.total = newProd.quantite * newProd.prix;
          return newProd;
        }
        return prod;
      })
    );
  };

  const getCouleurLigne = (index: number): string => {
    if (index < 5) return "#FFB6C1"; // Rose
    if (index < 13) return "#90EE90"; // Vert clair
    if (index === 13) return "#FFA500"; // Orange
    if (index < 18) return "#E6E6FA"; // Violet clair
    if (index < 21) return "#FFFFE0"; // Jaune clair
    return "#ADD8E6"; // Bleu clair
  };

  const totalMensuel = calculerTotal();
  const mensualite4x = totalMensuel / 4;
  const coutParJour = mensualite4x / 30;
  const coutParSemaine = mensualite4x / 4.33;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "10px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#FFC0CB", color: "#8B0000" }}>
            <th
              colSpan={4}
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "center",
              }}
            >
              Produits
            </th>
          </tr>
          <tr style={{ backgroundColor: "#FFC0CB", color: "#8B0000" }}>
            <th
              style={{ padding: "8px", border: "1px solid #ddd", width: "40%" }}
            >
              Désignation
            </th>
            <th
              style={{ padding: "8px", border: "1px solid #ddd", width: "15%" }}
            >
              Quantité
            </th>
            <th
              style={{ padding: "8px", border: "1px solid #ddd", width: "15%" }}
            >
              Prix
            </th>
            <th
              style={{ padding: "8px", border: "1px solid #ddd", width: "15%" }}
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {produits.map((prod, index) => (
            <tr
              key={prod.id}
              style={{ backgroundColor: getCouleurLigne(index) }}
            >
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {prod.designation}
                <br />
                <span style={{ fontSize: "0.8em", color: "#666" }}>
                  {prod.description}
                </span>
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                <input
                  type="number"
                  value={prod.quantite}
                  onChange={(e) =>
                    mettreAJourProduit(
                      prod.id,
                      "quantite",
                      parseInt(e.target.value) || 0
                    )
                  }
                  style={{ width: "50px" }}
                />
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {prod.prix.toFixed(2)} €
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {prod.total.toFixed(2)} €
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginBottom: "10px" }}>
        <strong>Mensualité en 1x sans frais : </strong>{" "}
        {totalMensuel.toFixed(2)} €
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Mensualité en 2x sans frais : </strong>{" "}
        {(totalMensuel / 2).toFixed(2)} €
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Mensualité en 3x sans frais : </strong>{" "}
        {(totalMensuel / 3).toFixed(2)} €
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Mensualité en 4x sans frais : </strong>{" "}
        {mensualite4x.toFixed(2)} €
      </div>
      <div style={{ marginBottom: "20px" }}>
        <strong>Total hors frais de port : </strong>{" "}
        {(totalMensuel - fraisDePort).toFixed(2)} €
      </div>

      <table
        style={{ width: "50%", borderCollapse: "collapse", marginLeft: "auto" }}
      >
        <tbody>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              Coût par jour
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                color: "blue",
              }}
            >
              {coutParJour.toFixed(2)} €
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              avec les économies estimées
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                color: "blue",
              }}
            >
              {(coutParJour - 2.8).toFixed(2)} €
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              Coût par semaine
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                color: "blue",
              }}
            >
              {coutParSemaine.toFixed(2)} €
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              avec les économies estimées
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                color: "blue",
              }}
            >
              {(coutParSemaine - 20).toFixed(2)} €
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableauProduits;
