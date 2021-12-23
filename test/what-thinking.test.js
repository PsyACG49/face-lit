import { fixture, html, expect } from '@open-wc/testing';
import '../src/components/what-thinking';

describe('Puebas componente what-thinking', () => {
    it('carga de componente what-thinking', async () => {
        const el = await fixture(html`
            <what-thinking></what-thinking>
        `)
    });
})