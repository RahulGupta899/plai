const {generateSlug} = require('../string.lib');

test('Product Manager slug generate test', function() {
    expect(generateSlug('PRODUCT_MANAGER')).toBe('product-manager');
});

test('With Space character slug generate test', function() {
    expect(generateSlug('PRODUCT_MANAGER Role')).toBe('product-manager-role');
});

test('With Special character slug generate test', function() {
    expect(generateSlug('PRODUCT_MANAGER&^ Role')).toBe('product-manager-role');
});