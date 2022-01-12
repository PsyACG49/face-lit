import { fixture, html, expect } from '@open-wc/testing';
import '../src/components/item-list';

describe('Puebas componente item-list', () => {
    it('carga de componente item-list', async () => {
        const el = await fixture(html`
            <item-list></item-list>
        `)
    });
})