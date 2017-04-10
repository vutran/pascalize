import pascalize from '../';

describe('pascalize', () => {
    it('should convert a string to PascalCase', () => {
        expect(pascalize('FooBar')).toBe('FooBar');
        expect(pascalize('foo bar')).toBe('FooBar');
        expect(pascalize('foo-bar')).toBe('FooBar');
        expect(pascalize('foobar')).toBe('Foobar');
        expect(pascalize('foo_bar')).toBe('FooBar');
        expect(pascalize('foo(bar)')).toBe('FooBar');
        expect(pascalize('foo[bar]')).toBe('FooBar');
        expect(pascalize('foo;bar')).toBe('FooBar');
        expect(pascalize('foo,bar')).toBe('FooBar');
        expect(pascalize(' foo bar')).toBe('FooBar');
        expect(pascalize(' foo bar ')).toBe('FooBar');
        expect(pascalize(' foo bar')).toBe('FooBar');
    });
});
