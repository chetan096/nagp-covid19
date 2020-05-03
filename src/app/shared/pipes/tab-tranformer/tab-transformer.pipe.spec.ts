import { TabTextTransform } from './tab-transformer.pipe';
import { TestBed } from '@angular/core/testing';

describe('TabTextTransformerPipe', () => {

    let pipe: TabTextTransform;

    beforeEach(() => {
        pipe = new TabTextTransform();
    });

    afterEach(() => {
        pipe = null;
    });

    it('should tranform tab text with first letter small', () => {
        const result = pipe.transform('chetan');
        expect(result).toBe('Chetan');
    });

    it('should tranform tab text with first letter capital', () => {
        const result = pipe.transform('Mahajan');
        expect(result).toBe('Mahajan');
    });

});
