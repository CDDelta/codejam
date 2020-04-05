import solve from '../src/solve';

describe('sample cases', () => {
    test('1', () => {
        expect(solve('0000')).toBe('0000');
    });

    test('2', () => {
        expect(solve('101')).toBe('(1)0(1)');
    });

    test('3', () => {
        expect(solve('111000')).toBe('(111)000');
    });

    test('4', () => {
        expect(solve('1')).toBe('(1)');
    });
});

describe('non-binary cases', () => {
    test('1', () => {
        expect(solve('123')).toBe('(1(2(3)))');
    });
});