/**
 * Inner Tuple type.
 */
type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ? R : _TupleOf<T, N, [T, ...R]>;

/**
 * Define a tuple instead of an array.
 */
export type Tuple<T, N extends number> = N extends N ? (number extends N ? T[] : _TupleOf<T, N, []>) : never;

/**
 * Use this to make a type optional.
 *
 * @example
 * type Test = string | number;
 * type MaybeText = Maybe<Text>;
 * // MaybeText = string | number | null
 */
export type Maybe<T> = T | null;
