import solve from '../src/solve';

describe('sample cases', () => {
    test('1', () => {
        expect(
            solve(
                31,
                '217 1891 4819 2291 2987 3811 1739 2491 4717 445 65 1079 8383 5353 901 187 649 1003 697 3239 7663 291 123 779 1007 3551 1943 2117 1679 989 3053'
            )
        ).toBe('CJQUIZKNOWBEVYOFDPFLUXALGORITHMS');
    });

    test('2', () => {
        expect(
            solve(
                25,
                '3292937 175597 18779 50429 375469 1651121 2102 3722 2376497 611683 489059 2328901 3150061 829981 421301 76409 38477 291931 730241 959821 1664197 3057407 4267589 4729181 5335543'
            )
        ).toBe('SUBDERMATOGLYPHICFJKNQVWXZ');
    });
});

describe('cases with repeated parts', () => {
    test('1', () => {
        expect(
            solve(
                32,
                '6 6 6 6 4 6 6 6 15 55 143 221 323 437 667 899 1147 1517 1763 2021 2491 3127 3599 4087 4757 5183 5767 6557 7387 8633 9797 10403'
            )
        ).toBe('ABABAABABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    test('2', () => {
        expect(
            solve(
                31,
                '6 6 6 15 15 6 6 15 55 143 221 323 437 667 899 1147 1517 1763 2021 2491 3127 3599 4087 4757 5183 5767 6557 7387 8633 9797 10403'
            )
        ).toBe('ABABCBABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
});
