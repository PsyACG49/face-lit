import { fixture, html, expect, oneEvent } from "@open-wc/testing";
import "../src/components/my-app";

describe("Pruebas carga my-app", () => {
  it("Carga nombre usuario", async () => {
    const el = await fixture(html` <my-app></my-app> `);
    expect(el.user.name).to.equal("Sergio");
  });
  it("Carga apellido usuario", async () => {
    const el = await fixture(html` <my-app></my-app> `);
    expect(el.user.lastName).to.equal("Cuevas");
  });
  it("Carga avatar usuario", async () => {
    const el = await fixture(html` <my-app></my-app> `);
    expect(el.user.avatar).to.equal("/src/assets/img1.jpg");
  });
  it('Carga publicaciones', async ()=>{
     const el = await fixture(html`
         <my-app></my-app>
     `);
     setTimeout(() => {
      expect(el.publications.length).to.equal(3);
     }, 500)
  });
});
