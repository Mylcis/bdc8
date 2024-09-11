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
    {
      id: 3,
      designation: "Total Affin' Orange (500ml)",
      quantite: 0,
      prix: 38.9,
      total: 0.0,
      description:
        "Draineur goût Orange (Thé vert / Maté / Queue de cerise / Radis Noir / Artichaut / Frêne / Bouleau / Reine des prés / Pissenlit)",
    },
    {
      id: 4,
      designation: "Minci' Boost (500ml)",
      quantite: 0,
      prix: 38.9,
      total: 0.0,
      description:
        "Draineur goût Pomme (Thé vert / Guarana/ Frêne / Algue Ulvaline / Bouleau / Ananas / Reine des prés / Pissenlit / Papaye / Chiendent / Chicorée)",
    },
    {
      id: 5,
      designation: "Ananas' Drain' (500ml)",
      quantite: 0,
      prix: 38.9,
      total: 0.0,
      description:
        "Draineur goût Ananas (Thé vert/ Guarana/ Frêne / Algue Ulvaline / Bouleau / Ananas / Reine des prés / Pissenlit / Papaye / Chiendent / Chicorée)",
    },
    {
      id: 6,
      designation: "Cocktail M (200ml)",
      quantite: 0,
      prix: 37.8,
      total: 0.0,
      description:
        "Brûleur de graisses liquide goût Cassis(Maté / Fenouil/ Fucus / Cassis / Pissenlit)",
    },
    {
      id: 7,
      designation: "Thermo Effect Ananas (250ml)",
      quantite: 0,
      prix: 38.6,
      total: 0.0,
      description:
        "Brûleur de graisses liquide goût Ananas (Maté / Noix de Kola/ Guarana / Thé vert/ Pissenlit)",
    },
    {
      id: 8,
      designation: "Thermo Effect Pêche (250ml)",
      quantite: 1,
      prix: 38.6,
      total: 38.6,
      description:
        "Brûleur de graisses liquide goût Pêche (Maté / Noix de Kola/ Guarana / Thé vert/ Pissenlit)",
    },
    {
      id: 9,
      designation: "Optimal M (90 gélules)",
      quantite: 1,
      prix: 37.4,
      total: 37.4,
      description:
        "Brûleur de graisses (Guarana / Citrus Aurantium / Thé vert/ Ananas / Marc de raisin)",
    },
    {
      id: 10,
      designation: "Slim Formul (60 gélules)",
      quantite: 1,
      prix: 37.4,
      total: 37.4,
      description:
        "Brûleur de graisses + Ventre Plat (Guarana / Maline Chicorée / Artichaut / Pamplemousse)",
    },
    {
      id: 11,
      designation: "Thermopîc (60 gélules)",
      quantite: 0,
      prix: 37.4,
      total: 0.0,
      description:
        "Brûleur de graisses Spécial Sportif et Homme (L-Carnitine/ Thé vert/ Ascophyllum algues)",
    },
    {
      id: 12,
      designation: "Stimul + (50 gélules)",
      quantite: 0,
      prix: 37.4,
      total: 0.0,
      description: "Anti-cellulite et brûleur de graisses (Maté / Thé vert)",
    },
    {
      id: 13,
      designation: "Lipo 24 (60 gélules)",
      quantite: 0,
      prix: 37.4,
      total: 0.0,
      description:
        "Brûleur de graisses sans caféine actions 24h (Nopal / Ananas / Artichaut / Vinaigre de cidre / Cétone de framboise)",
    },
    {
      id: 14,
      designation: "Crème Coolise (tube 200ml)",
      quantite: 0,
      prix: 39.9,
      total: 0.0,
      description: "Brûleur de graisses",
    },
    {
      id: 15,
      designation: "Plaisirs Permis (60 gélules)",
      quantite: 1,
      prix: 36.9,
      total: 36.9,
      description: "Crème-gel raffermissante et anti-cellulite",
    },
    {
      id: 16,
      designation: "Transitil (60 gélules)",
      quantite: 0,
      prix: 36.9,
      total: 0.0,
      description: "Capteur de graisses (Chitosan)",
    },
    {
      id: 17,
      designation: "Activ' Circulation (60 gélules)",
      quantite: 0,
      prix: 36.9,
      total: 0.0,
      description:
        "Digestion / Transit / Anti-ballonnement (Charbon Végétal / Rhubarbe / Coriandre)",
    },
    {
      id: 18,
      designation: "Méno régul (60 gélules)",
      quantite: 1,
      prix: 38.9,
      total: 38.9,
      description:
        "Circulation veineuse / Jambes lourdes (Vigne Rouge / Myrtille / Ail)",
    },
    {
      id: 19,
      designation: "Excess Regul (60 gélules)",
      quantite: 0,
      prix: 37.9,
      total: 0.0,
      description: "Ménopause (Huile d'Onagre)",
    },
    {
      id: 20,
      designation: "APICAL (60 gélules)",
      quantite: 1,
      prix: 37.9,
      total: 37.9,
      description:
        "Anti-compulsions alimentaires (Rhodiola Rosea/ Ginkgo Biloba/ Ginseng/ Millepertuis/ Magnésium)",
    },
    {
      id: 21,
      designation: "Anti Régul' (60 gélules)",
      quantite: 0,
      prix: 37.9,
      total: 0.0,
      description: "Anti-grignotage sucré (Garcinia)",
    },
    {
      id: 22,
      designation: "Sommeil Zen (60 gélules)",
      quantite: 1,
      prix: 37.9,
      total: 37.9,
      description: "Anti-fringale / Coupe faim (Pectine de Pomme)",
    },
    {
      id: 23,
      designation: "Sérénity (60 gélules)",
      quantite: 1,
      prix: 37.9,
      total: 37.9,
      description:
        "Problèmes de sommeil / insomnies (Mélisse / Passiflore / Tilleul / Magnésium Marin)",
    },
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
