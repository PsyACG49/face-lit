import { fixture, html, expect } from "@open-wc/testing";
import "../src/components/nav-app";

describe("Puebas componente nav-app", () => {
  it("carga de componente nav-app", async () => {
    const el = await fixture(html` <nav-app></nav-app> `);
  });
  it("carga de items en la pagina", async () => {
    const el = await fixture(html` <nav-app></nav-app> `);
    expect(el.itemsNav.length == 4).to.equal(true);
  })
});
