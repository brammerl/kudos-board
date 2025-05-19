
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model Kudos
 * 
 */
export type Kudos = $Result.DefaultSelection<Prisma.$KudosPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Boards
 * const boards = await prisma.board.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Boards
   * const boards = await prisma.board.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kudos`: Exposes CRUD operations for the **Kudos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kudos
    * const kudos = await prisma.kudos.findMany()
    * ```
    */
  get kudos(): Prisma.KudosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Board: 'Board',
    Kudos: 'Kudos',
    Category: 'Category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "board" | "kudos" | "category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      Kudos: {
        payload: Prisma.$KudosPayload<ExtArgs>
        fields: Prisma.KudosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KudosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KudosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload>
          }
          findFirst: {
            args: Prisma.KudosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KudosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload>
          }
          findMany: {
            args: Prisma.KudosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload>[]
          }
          create: {
            args: Prisma.KudosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload>
          }
          createMany: {
            args: Prisma.KudosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KudosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload>[]
          }
          delete: {
            args: Prisma.KudosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload>
          }
          update: {
            args: Prisma.KudosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload>
          }
          deleteMany: {
            args: Prisma.KudosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KudosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KudosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload>[]
          }
          upsert: {
            args: Prisma.KudosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosPayload>
          }
          aggregate: {
            args: Prisma.KudosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKudos>
          }
          groupBy: {
            args: Prisma.KudosGroupByArgs<ExtArgs>
            result: $Utils.Optional<KudosGroupByOutputType>[]
          }
          count: {
            args: Prisma.KudosCountArgs<ExtArgs>
            result: $Utils.Optional<KudosCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    board?: BoardOmit
    kudos?: KudosOmit
    category?: CategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    kudos: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kudos?: boolean | BoardCountOutputTypeCountKudosArgs
  }

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountKudosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KudosWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    boards: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | CategoryCountOutputTypeCountBoardsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    title: string | null
    img_url: string | null
    description: string | null
    category_id: number | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    title: string | null
    img_url: string | null
    description: string | null
    category_id: number | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    title: number
    img_url: number
    description: number
    category_id: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    title?: true
    img_url?: true
    description?: true
    category_id?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    title?: true
    img_url?: true
    description?: true
    category_id?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    title?: true
    img_url?: true
    description?: true
    category_id?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: number
    title: string
    img_url: string
    description: string | null
    category_id: number
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    img_url?: boolean
    description?: boolean
    category_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    kudos?: boolean | Board$kudosArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    img_url?: boolean
    description?: boolean
    category_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    img_url?: boolean
    description?: boolean
    category_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    id?: boolean
    title?: boolean
    img_url?: boolean
    description?: boolean
    category_id?: boolean
  }

  export type BoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "img_url" | "description" | "category_id", ExtArgs["result"]["board"]>
  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    kudos?: boolean | Board$kudosArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type BoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      kudos: Prisma.$KudosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      img_url: string
      description: string | null
      category_id: number
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {BoardUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoardUpdateManyAndReturnArgs>(args: SelectSubset<T, BoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kudos<T extends Board$kudosArgs<ExtArgs> = {}>(args?: Subset<T, Board$kudosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Board model
   */
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'Int'>
    readonly title: FieldRef<"Board", 'String'>
    readonly img_url: FieldRef<"Board", 'String'>
    readonly description: FieldRef<"Board", 'String'>
    readonly category_id: FieldRef<"Board", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board createManyAndReturn
   */
  export type BoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board updateManyAndReturn
   */
  export type BoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to delete.
     */
    limit?: number
  }

  /**
   * Board.kudos
   */
  export type Board$kudosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    where?: KudosWhereInput
    orderBy?: KudosOrderByWithRelationInput | KudosOrderByWithRelationInput[]
    cursor?: KudosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KudosScalarFieldEnum | KudosScalarFieldEnum[]
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model Kudos
   */

  export type AggregateKudos = {
    _count: KudosCountAggregateOutputType | null
    _avg: KudosAvgAggregateOutputType | null
    _sum: KudosSumAggregateOutputType | null
    _min: KudosMinAggregateOutputType | null
    _max: KudosMaxAggregateOutputType | null
  }

  export type KudosAvgAggregateOutputType = {
    id: number | null
    upvote_count: number | null
    board_id: number | null
  }

  export type KudosSumAggregateOutputType = {
    id: number | null
    upvote_count: number | null
    board_id: number | null
  }

  export type KudosMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    img_url: string | null
    upvote_count: number | null
    board_id: number | null
  }

  export type KudosMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    img_url: string | null
    upvote_count: number | null
    board_id: number | null
  }

  export type KudosCountAggregateOutputType = {
    id: number
    title: number
    description: number
    img_url: number
    upvote_count: number
    board_id: number
    _all: number
  }


  export type KudosAvgAggregateInputType = {
    id?: true
    upvote_count?: true
    board_id?: true
  }

  export type KudosSumAggregateInputType = {
    id?: true
    upvote_count?: true
    board_id?: true
  }

  export type KudosMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img_url?: true
    upvote_count?: true
    board_id?: true
  }

  export type KudosMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img_url?: true
    upvote_count?: true
    board_id?: true
  }

  export type KudosCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img_url?: true
    upvote_count?: true
    board_id?: true
    _all?: true
  }

  export type KudosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kudos to aggregate.
     */
    where?: KudosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kudos to fetch.
     */
    orderBy?: KudosOrderByWithRelationInput | KudosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KudosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kudos
    **/
    _count?: true | KudosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KudosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KudosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KudosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KudosMaxAggregateInputType
  }

  export type GetKudosAggregateType<T extends KudosAggregateArgs> = {
        [P in keyof T & keyof AggregateKudos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKudos[P]>
      : GetScalarType<T[P], AggregateKudos[P]>
  }




  export type KudosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KudosWhereInput
    orderBy?: KudosOrderByWithAggregationInput | KudosOrderByWithAggregationInput[]
    by: KudosScalarFieldEnum[] | KudosScalarFieldEnum
    having?: KudosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KudosCountAggregateInputType | true
    _avg?: KudosAvgAggregateInputType
    _sum?: KudosSumAggregateInputType
    _min?: KudosMinAggregateInputType
    _max?: KudosMaxAggregateInputType
  }

  export type KudosGroupByOutputType = {
    id: number
    title: string
    description: string
    img_url: string
    upvote_count: number
    board_id: number
    _count: KudosCountAggregateOutputType | null
    _avg: KudosAvgAggregateOutputType | null
    _sum: KudosSumAggregateOutputType | null
    _min: KudosMinAggregateOutputType | null
    _max: KudosMaxAggregateOutputType | null
  }

  type GetKudosGroupByPayload<T extends KudosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KudosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KudosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KudosGroupByOutputType[P]>
            : GetScalarType<T[P], KudosGroupByOutputType[P]>
        }
      >
    >


  export type KudosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img_url?: boolean
    upvote_count?: boolean
    board_id?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kudos"]>

  export type KudosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img_url?: boolean
    upvote_count?: boolean
    board_id?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kudos"]>

  export type KudosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img_url?: boolean
    upvote_count?: boolean
    board_id?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kudos"]>

  export type KudosSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    img_url?: boolean
    upvote_count?: boolean
    board_id?: boolean
  }

  export type KudosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "img_url" | "upvote_count" | "board_id", ExtArgs["result"]["kudos"]>
  export type KudosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }
  export type KudosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }
  export type KudosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }

  export type $KudosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kudos"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      img_url: string
      upvote_count: number
      board_id: number
    }, ExtArgs["result"]["kudos"]>
    composites: {}
  }

  type KudosGetPayload<S extends boolean | null | undefined | KudosDefaultArgs> = $Result.GetResult<Prisma.$KudosPayload, S>

  type KudosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KudosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KudosCountAggregateInputType | true
    }

  export interface KudosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kudos'], meta: { name: 'Kudos' } }
    /**
     * Find zero or one Kudos that matches the filter.
     * @param {KudosFindUniqueArgs} args - Arguments to find a Kudos
     * @example
     * // Get one Kudos
     * const kudos = await prisma.kudos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KudosFindUniqueArgs>(args: SelectSubset<T, KudosFindUniqueArgs<ExtArgs>>): Prisma__KudosClient<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kudos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KudosFindUniqueOrThrowArgs} args - Arguments to find a Kudos
     * @example
     * // Get one Kudos
     * const kudos = await prisma.kudos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KudosFindUniqueOrThrowArgs>(args: SelectSubset<T, KudosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KudosClient<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosFindFirstArgs} args - Arguments to find a Kudos
     * @example
     * // Get one Kudos
     * const kudos = await prisma.kudos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KudosFindFirstArgs>(args?: SelectSubset<T, KudosFindFirstArgs<ExtArgs>>): Prisma__KudosClient<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kudos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosFindFirstOrThrowArgs} args - Arguments to find a Kudos
     * @example
     * // Get one Kudos
     * const kudos = await prisma.kudos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KudosFindFirstOrThrowArgs>(args?: SelectSubset<T, KudosFindFirstOrThrowArgs<ExtArgs>>): Prisma__KudosClient<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kudos
     * const kudos = await prisma.kudos.findMany()
     * 
     * // Get first 10 Kudos
     * const kudos = await prisma.kudos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kudosWithIdOnly = await prisma.kudos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KudosFindManyArgs>(args?: SelectSubset<T, KudosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kudos.
     * @param {KudosCreateArgs} args - Arguments to create a Kudos.
     * @example
     * // Create one Kudos
     * const Kudos = await prisma.kudos.create({
     *   data: {
     *     // ... data to create a Kudos
     *   }
     * })
     * 
     */
    create<T extends KudosCreateArgs>(args: SelectSubset<T, KudosCreateArgs<ExtArgs>>): Prisma__KudosClient<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kudos.
     * @param {KudosCreateManyArgs} args - Arguments to create many Kudos.
     * @example
     * // Create many Kudos
     * const kudos = await prisma.kudos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KudosCreateManyArgs>(args?: SelectSubset<T, KudosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kudos and returns the data saved in the database.
     * @param {KudosCreateManyAndReturnArgs} args - Arguments to create many Kudos.
     * @example
     * // Create many Kudos
     * const kudos = await prisma.kudos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kudos and only return the `id`
     * const kudosWithIdOnly = await prisma.kudos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KudosCreateManyAndReturnArgs>(args?: SelectSubset<T, KudosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kudos.
     * @param {KudosDeleteArgs} args - Arguments to delete one Kudos.
     * @example
     * // Delete one Kudos
     * const Kudos = await prisma.kudos.delete({
     *   where: {
     *     // ... filter to delete one Kudos
     *   }
     * })
     * 
     */
    delete<T extends KudosDeleteArgs>(args: SelectSubset<T, KudosDeleteArgs<ExtArgs>>): Prisma__KudosClient<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kudos.
     * @param {KudosUpdateArgs} args - Arguments to update one Kudos.
     * @example
     * // Update one Kudos
     * const kudos = await prisma.kudos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KudosUpdateArgs>(args: SelectSubset<T, KudosUpdateArgs<ExtArgs>>): Prisma__KudosClient<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kudos.
     * @param {KudosDeleteManyArgs} args - Arguments to filter Kudos to delete.
     * @example
     * // Delete a few Kudos
     * const { count } = await prisma.kudos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KudosDeleteManyArgs>(args?: SelectSubset<T, KudosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kudos
     * const kudos = await prisma.kudos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KudosUpdateManyArgs>(args: SelectSubset<T, KudosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kudos and returns the data updated in the database.
     * @param {KudosUpdateManyAndReturnArgs} args - Arguments to update many Kudos.
     * @example
     * // Update many Kudos
     * const kudos = await prisma.kudos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kudos and only return the `id`
     * const kudosWithIdOnly = await prisma.kudos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KudosUpdateManyAndReturnArgs>(args: SelectSubset<T, KudosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kudos.
     * @param {KudosUpsertArgs} args - Arguments to update or create a Kudos.
     * @example
     * // Update or create a Kudos
     * const kudos = await prisma.kudos.upsert({
     *   create: {
     *     // ... data to create a Kudos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kudos we want to update
     *   }
     * })
     */
    upsert<T extends KudosUpsertArgs>(args: SelectSubset<T, KudosUpsertArgs<ExtArgs>>): Prisma__KudosClient<$Result.GetResult<Prisma.$KudosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosCountArgs} args - Arguments to filter Kudos to count.
     * @example
     * // Count the number of Kudos
     * const count = await prisma.kudos.count({
     *   where: {
     *     // ... the filter for the Kudos we want to count
     *   }
     * })
    **/
    count<T extends KudosCountArgs>(
      args?: Subset<T, KudosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KudosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KudosAggregateArgs>(args: Subset<T, KudosAggregateArgs>): Prisma.PrismaPromise<GetKudosAggregateType<T>>

    /**
     * Group by Kudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KudosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KudosGroupByArgs['orderBy'] }
        : { orderBy?: KudosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KudosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKudosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kudos model
   */
  readonly fields: KudosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kudos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KudosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kudos model
   */
  interface KudosFieldRefs {
    readonly id: FieldRef<"Kudos", 'Int'>
    readonly title: FieldRef<"Kudos", 'String'>
    readonly description: FieldRef<"Kudos", 'String'>
    readonly img_url: FieldRef<"Kudos", 'String'>
    readonly upvote_count: FieldRef<"Kudos", 'Int'>
    readonly board_id: FieldRef<"Kudos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Kudos findUnique
   */
  export type KudosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    /**
     * Filter, which Kudos to fetch.
     */
    where: KudosWhereUniqueInput
  }

  /**
   * Kudos findUniqueOrThrow
   */
  export type KudosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    /**
     * Filter, which Kudos to fetch.
     */
    where: KudosWhereUniqueInput
  }

  /**
   * Kudos findFirst
   */
  export type KudosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    /**
     * Filter, which Kudos to fetch.
     */
    where?: KudosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kudos to fetch.
     */
    orderBy?: KudosOrderByWithRelationInput | KudosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kudos.
     */
    cursor?: KudosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kudos.
     */
    distinct?: KudosScalarFieldEnum | KudosScalarFieldEnum[]
  }

  /**
   * Kudos findFirstOrThrow
   */
  export type KudosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    /**
     * Filter, which Kudos to fetch.
     */
    where?: KudosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kudos to fetch.
     */
    orderBy?: KudosOrderByWithRelationInput | KudosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kudos.
     */
    cursor?: KudosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kudos.
     */
    distinct?: KudosScalarFieldEnum | KudosScalarFieldEnum[]
  }

  /**
   * Kudos findMany
   */
  export type KudosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    /**
     * Filter, which Kudos to fetch.
     */
    where?: KudosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kudos to fetch.
     */
    orderBy?: KudosOrderByWithRelationInput | KudosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kudos.
     */
    cursor?: KudosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kudos.
     */
    skip?: number
    distinct?: KudosScalarFieldEnum | KudosScalarFieldEnum[]
  }

  /**
   * Kudos create
   */
  export type KudosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    /**
     * The data needed to create a Kudos.
     */
    data: XOR<KudosCreateInput, KudosUncheckedCreateInput>
  }

  /**
   * Kudos createMany
   */
  export type KudosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kudos.
     */
    data: KudosCreateManyInput | KudosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kudos createManyAndReturn
   */
  export type KudosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * The data used to create many Kudos.
     */
    data: KudosCreateManyInput | KudosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kudos update
   */
  export type KudosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    /**
     * The data needed to update a Kudos.
     */
    data: XOR<KudosUpdateInput, KudosUncheckedUpdateInput>
    /**
     * Choose, which Kudos to update.
     */
    where: KudosWhereUniqueInput
  }

  /**
   * Kudos updateMany
   */
  export type KudosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kudos.
     */
    data: XOR<KudosUpdateManyMutationInput, KudosUncheckedUpdateManyInput>
    /**
     * Filter which Kudos to update
     */
    where?: KudosWhereInput
    /**
     * Limit how many Kudos to update.
     */
    limit?: number
  }

  /**
   * Kudos updateManyAndReturn
   */
  export type KudosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * The data used to update Kudos.
     */
    data: XOR<KudosUpdateManyMutationInput, KudosUncheckedUpdateManyInput>
    /**
     * Filter which Kudos to update
     */
    where?: KudosWhereInput
    /**
     * Limit how many Kudos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kudos upsert
   */
  export type KudosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    /**
     * The filter to search for the Kudos to update in case it exists.
     */
    where: KudosWhereUniqueInput
    /**
     * In case the Kudos found by the `where` argument doesn't exist, create a new Kudos with this data.
     */
    create: XOR<KudosCreateInput, KudosUncheckedCreateInput>
    /**
     * In case the Kudos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KudosUpdateInput, KudosUncheckedUpdateInput>
  }

  /**
   * Kudos delete
   */
  export type KudosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
    /**
     * Filter which Kudos to delete.
     */
    where: KudosWhereUniqueInput
  }

  /**
   * Kudos deleteMany
   */
  export type KudosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kudos to delete
     */
    where?: KudosWhereInput
    /**
     * Limit how many Kudos to delete.
     */
    limit?: number
  }

  /**
   * Kudos without action
   */
  export type KudosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudos
     */
    select?: KudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kudos
     */
    omit?: KudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    category_name: string | null
    display_name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    category_name: string | null
    display_name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    category_name: number
    display_name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    category_name?: true
    display_name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    category_name?: true
    display_name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    category_name?: true
    display_name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    category_name: string
    display_name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    display_name?: boolean
    boards?: boolean | Category$boardsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    display_name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    display_name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    category_name?: boolean
    display_name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_name" | "display_name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | Category$boardsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      boards: Prisma.$BoardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_name: string
      display_name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boards<T extends Category$boardsArgs<ExtArgs> = {}>(args?: Subset<T, Category$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly category_name: FieldRef<"Category", 'String'>
    readonly display_name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.boards
   */
  export type Category$boardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    cursor?: BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BoardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    img_url: 'img_url',
    description: 'description',
    category_id: 'category_id'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const KudosScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    img_url: 'img_url',
    upvote_count: 'upvote_count',
    board_id: 'board_id'
  };

  export type KudosScalarFieldEnum = (typeof KudosScalarFieldEnum)[keyof typeof KudosScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    category_name: 'category_name',
    display_name: 'display_name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: IntFilter<"Board"> | number
    title?: StringFilter<"Board"> | string
    img_url?: StringFilter<"Board"> | string
    description?: StringNullableFilter<"Board"> | string | null
    category_id?: IntFilter<"Board"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    kudos?: KudosListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    img_url?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrder
    category?: CategoryOrderByWithRelationInput
    kudos?: KudosOrderByRelationAggregateInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    title?: StringFilter<"Board"> | string
    img_url?: StringFilter<"Board"> | string
    description?: StringNullableFilter<"Board"> | string | null
    category_id?: IntFilter<"Board"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    kudos?: KudosListRelationFilter
  }, "id">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    img_url?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Board"> | number
    title?: StringWithAggregatesFilter<"Board"> | string
    img_url?: StringWithAggregatesFilter<"Board"> | string
    description?: StringNullableWithAggregatesFilter<"Board"> | string | null
    category_id?: IntWithAggregatesFilter<"Board"> | number
  }

  export type KudosWhereInput = {
    AND?: KudosWhereInput | KudosWhereInput[]
    OR?: KudosWhereInput[]
    NOT?: KudosWhereInput | KudosWhereInput[]
    id?: IntFilter<"Kudos"> | number
    title?: StringFilter<"Kudos"> | string
    description?: StringFilter<"Kudos"> | string
    img_url?: StringFilter<"Kudos"> | string
    upvote_count?: IntFilter<"Kudos"> | number
    board_id?: IntFilter<"Kudos"> | number
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
  }

  export type KudosOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    upvote_count?: SortOrder
    board_id?: SortOrder
    board?: BoardOrderByWithRelationInput
  }

  export type KudosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KudosWhereInput | KudosWhereInput[]
    OR?: KudosWhereInput[]
    NOT?: KudosWhereInput | KudosWhereInput[]
    title?: StringFilter<"Kudos"> | string
    description?: StringFilter<"Kudos"> | string
    img_url?: StringFilter<"Kudos"> | string
    upvote_count?: IntFilter<"Kudos"> | number
    board_id?: IntFilter<"Kudos"> | number
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
  }, "id">

  export type KudosOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    upvote_count?: SortOrder
    board_id?: SortOrder
    _count?: KudosCountOrderByAggregateInput
    _avg?: KudosAvgOrderByAggregateInput
    _max?: KudosMaxOrderByAggregateInput
    _min?: KudosMinOrderByAggregateInput
    _sum?: KudosSumOrderByAggregateInput
  }

  export type KudosScalarWhereWithAggregatesInput = {
    AND?: KudosScalarWhereWithAggregatesInput | KudosScalarWhereWithAggregatesInput[]
    OR?: KudosScalarWhereWithAggregatesInput[]
    NOT?: KudosScalarWhereWithAggregatesInput | KudosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kudos"> | number
    title?: StringWithAggregatesFilter<"Kudos"> | string
    description?: StringWithAggregatesFilter<"Kudos"> | string
    img_url?: StringWithAggregatesFilter<"Kudos"> | string
    upvote_count?: IntWithAggregatesFilter<"Kudos"> | number
    board_id?: IntWithAggregatesFilter<"Kudos"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    category_name?: StringFilter<"Category"> | string
    display_name?: StringFilter<"Category"> | string
    boards?: BoardListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    category_name?: SortOrder
    display_name?: SortOrder
    boards?: BoardOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    category_name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    display_name?: StringFilter<"Category"> | string
    boards?: BoardListRelationFilter
  }, "id" | "category_name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category_name?: SortOrder
    display_name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    category_name?: StringWithAggregatesFilter<"Category"> | string
    display_name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type BoardCreateInput = {
    title: string
    img_url: string
    description?: string | null
    category: CategoryCreateNestedOneWithoutBoardsInput
    kudos?: KudosCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    title: string
    img_url: string
    description?: string | null
    category_id: number
    kudos?: KudosUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutBoardsNestedInput
    kudos?: KudosUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    kudos?: KudosUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id?: number
    title: string
    img_url: string
    description?: string | null
    category_id: number
  }

  export type BoardUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type KudosCreateInput = {
    title: string
    description: string
    img_url: string
    upvote_count: number
    board: BoardCreateNestedOneWithoutKudosInput
  }

  export type KudosUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    img_url: string
    upvote_count: number
    board_id: number
  }

  export type KudosUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    upvote_count?: IntFieldUpdateOperationsInput | number
    board?: BoardUpdateOneRequiredWithoutKudosNestedInput
  }

  export type KudosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    upvote_count?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
  }

  export type KudosCreateManyInput = {
    id?: number
    title: string
    description: string
    img_url: string
    upvote_count: number
    board_id: number
  }

  export type KudosUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    upvote_count?: IntFieldUpdateOperationsInput | number
  }

  export type KudosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    upvote_count?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    category_name: string
    display_name: string
    boards?: BoardCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    category_name: string
    display_name: string
    boards?: BoardUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    boards?: BoardUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    boards?: BoardUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    category_name: string
    display_name: string
  }

  export type CategoryUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type KudosListRelationFilter = {
    every?: KudosWhereInput
    some?: KudosWhereInput
    none?: KudosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KudosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img_url?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img_url?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img_url?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoardScalarRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type KudosCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    upvote_count?: SortOrder
    board_id?: SortOrder
  }

  export type KudosAvgOrderByAggregateInput = {
    id?: SortOrder
    upvote_count?: SortOrder
    board_id?: SortOrder
  }

  export type KudosMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    upvote_count?: SortOrder
    board_id?: SortOrder
  }

  export type KudosMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    upvote_count?: SortOrder
    board_id?: SortOrder
  }

  export type KudosSumOrderByAggregateInput = {
    id?: SortOrder
    upvote_count?: SortOrder
    board_id?: SortOrder
  }

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    display_name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    display_name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    display_name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutBoardsInput = {
    create?: XOR<CategoryCreateWithoutBoardsInput, CategoryUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBoardsInput
    connect?: CategoryWhereUniqueInput
  }

  export type KudosCreateNestedManyWithoutBoardInput = {
    create?: XOR<KudosCreateWithoutBoardInput, KudosUncheckedCreateWithoutBoardInput> | KudosCreateWithoutBoardInput[] | KudosUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: KudosCreateOrConnectWithoutBoardInput | KudosCreateOrConnectWithoutBoardInput[]
    createMany?: KudosCreateManyBoardInputEnvelope
    connect?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
  }

  export type KudosUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<KudosCreateWithoutBoardInput, KudosUncheckedCreateWithoutBoardInput> | KudosCreateWithoutBoardInput[] | KudosUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: KudosCreateOrConnectWithoutBoardInput | KudosCreateOrConnectWithoutBoardInput[]
    createMany?: KudosCreateManyBoardInputEnvelope
    connect?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<CategoryCreateWithoutBoardsInput, CategoryUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBoardsInput
    upsert?: CategoryUpsertWithoutBoardsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBoardsInput, CategoryUpdateWithoutBoardsInput>, CategoryUncheckedUpdateWithoutBoardsInput>
  }

  export type KudosUpdateManyWithoutBoardNestedInput = {
    create?: XOR<KudosCreateWithoutBoardInput, KudosUncheckedCreateWithoutBoardInput> | KudosCreateWithoutBoardInput[] | KudosUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: KudosCreateOrConnectWithoutBoardInput | KudosCreateOrConnectWithoutBoardInput[]
    upsert?: KudosUpsertWithWhereUniqueWithoutBoardInput | KudosUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: KudosCreateManyBoardInputEnvelope
    set?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
    disconnect?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
    delete?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
    connect?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
    update?: KudosUpdateWithWhereUniqueWithoutBoardInput | KudosUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: KudosUpdateManyWithWhereWithoutBoardInput | KudosUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: KudosScalarWhereInput | KudosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KudosUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<KudosCreateWithoutBoardInput, KudosUncheckedCreateWithoutBoardInput> | KudosCreateWithoutBoardInput[] | KudosUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: KudosCreateOrConnectWithoutBoardInput | KudosCreateOrConnectWithoutBoardInput[]
    upsert?: KudosUpsertWithWhereUniqueWithoutBoardInput | KudosUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: KudosCreateManyBoardInputEnvelope
    set?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
    disconnect?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
    delete?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
    connect?: KudosWhereUniqueInput | KudosWhereUniqueInput[]
    update?: KudosUpdateWithWhereUniqueWithoutBoardInput | KudosUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: KudosUpdateManyWithWhereWithoutBoardInput | KudosUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: KudosScalarWhereInput | KudosScalarWhereInput[]
  }

  export type BoardCreateNestedOneWithoutKudosInput = {
    create?: XOR<BoardCreateWithoutKudosInput, BoardUncheckedCreateWithoutKudosInput>
    connectOrCreate?: BoardCreateOrConnectWithoutKudosInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardUpdateOneRequiredWithoutKudosNestedInput = {
    create?: XOR<BoardCreateWithoutKudosInput, BoardUncheckedCreateWithoutKudosInput>
    connectOrCreate?: BoardCreateOrConnectWithoutKudosInput
    upsert?: BoardUpsertWithoutKudosInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutKudosInput, BoardUpdateWithoutKudosInput>, BoardUncheckedUpdateWithoutKudosInput>
  }

  export type BoardCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput> | BoardCreateWithoutCategoryInput[] | BoardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryInput | BoardCreateOrConnectWithoutCategoryInput[]
    createMany?: BoardCreateManyCategoryInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type BoardUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput> | BoardCreateWithoutCategoryInput[] | BoardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryInput | BoardCreateOrConnectWithoutCategoryInput[]
    createMany?: BoardCreateManyCategoryInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type BoardUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput> | BoardCreateWithoutCategoryInput[] | BoardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryInput | BoardCreateOrConnectWithoutCategoryInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutCategoryInput | BoardUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BoardCreateManyCategoryInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutCategoryInput | BoardUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutCategoryInput | BoardUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type BoardUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput> | BoardCreateWithoutCategoryInput[] | BoardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryInput | BoardCreateOrConnectWithoutCategoryInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutCategoryInput | BoardUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BoardCreateManyCategoryInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutCategoryInput | BoardUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutCategoryInput | BoardUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryCreateWithoutBoardsInput = {
    category_name: string
    display_name: string
  }

  export type CategoryUncheckedCreateWithoutBoardsInput = {
    id?: number
    category_name: string
    display_name: string
  }

  export type CategoryCreateOrConnectWithoutBoardsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBoardsInput, CategoryUncheckedCreateWithoutBoardsInput>
  }

  export type KudosCreateWithoutBoardInput = {
    title: string
    description: string
    img_url: string
    upvote_count: number
  }

  export type KudosUncheckedCreateWithoutBoardInput = {
    id?: number
    title: string
    description: string
    img_url: string
    upvote_count: number
  }

  export type KudosCreateOrConnectWithoutBoardInput = {
    where: KudosWhereUniqueInput
    create: XOR<KudosCreateWithoutBoardInput, KudosUncheckedCreateWithoutBoardInput>
  }

  export type KudosCreateManyBoardInputEnvelope = {
    data: KudosCreateManyBoardInput | KudosCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutBoardsInput = {
    update: XOR<CategoryUpdateWithoutBoardsInput, CategoryUncheckedUpdateWithoutBoardsInput>
    create: XOR<CategoryCreateWithoutBoardsInput, CategoryUncheckedCreateWithoutBoardsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBoardsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBoardsInput, CategoryUncheckedUpdateWithoutBoardsInput>
  }

  export type CategoryUpdateWithoutBoardsInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
  }

  export type KudosUpsertWithWhereUniqueWithoutBoardInput = {
    where: KudosWhereUniqueInput
    update: XOR<KudosUpdateWithoutBoardInput, KudosUncheckedUpdateWithoutBoardInput>
    create: XOR<KudosCreateWithoutBoardInput, KudosUncheckedCreateWithoutBoardInput>
  }

  export type KudosUpdateWithWhereUniqueWithoutBoardInput = {
    where: KudosWhereUniqueInput
    data: XOR<KudosUpdateWithoutBoardInput, KudosUncheckedUpdateWithoutBoardInput>
  }

  export type KudosUpdateManyWithWhereWithoutBoardInput = {
    where: KudosScalarWhereInput
    data: XOR<KudosUpdateManyMutationInput, KudosUncheckedUpdateManyWithoutBoardInput>
  }

  export type KudosScalarWhereInput = {
    AND?: KudosScalarWhereInput | KudosScalarWhereInput[]
    OR?: KudosScalarWhereInput[]
    NOT?: KudosScalarWhereInput | KudosScalarWhereInput[]
    id?: IntFilter<"Kudos"> | number
    title?: StringFilter<"Kudos"> | string
    description?: StringFilter<"Kudos"> | string
    img_url?: StringFilter<"Kudos"> | string
    upvote_count?: IntFilter<"Kudos"> | number
    board_id?: IntFilter<"Kudos"> | number
  }

  export type BoardCreateWithoutKudosInput = {
    title: string
    img_url: string
    description?: string | null
    category: CategoryCreateNestedOneWithoutBoardsInput
  }

  export type BoardUncheckedCreateWithoutKudosInput = {
    id?: number
    title: string
    img_url: string
    description?: string | null
    category_id: number
  }

  export type BoardCreateOrConnectWithoutKudosInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutKudosInput, BoardUncheckedCreateWithoutKudosInput>
  }

  export type BoardUpsertWithoutKudosInput = {
    update: XOR<BoardUpdateWithoutKudosInput, BoardUncheckedUpdateWithoutKudosInput>
    create: XOR<BoardCreateWithoutKudosInput, BoardUncheckedCreateWithoutKudosInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutKudosInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutKudosInput, BoardUncheckedUpdateWithoutKudosInput>
  }

  export type BoardUpdateWithoutKudosInput = {
    title?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type BoardUncheckedUpdateWithoutKudosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type BoardCreateWithoutCategoryInput = {
    title: string
    img_url: string
    description?: string | null
    kudos?: KudosCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    img_url: string
    description?: string | null
    kudos?: KudosUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutCategoryInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput>
  }

  export type BoardCreateManyCategoryInputEnvelope = {
    data: BoardCreateManyCategoryInput | BoardCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutCategoryInput, BoardUncheckedUpdateWithoutCategoryInput>
    create: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutCategoryInput, BoardUncheckedUpdateWithoutCategoryInput>
  }

  export type BoardUpdateManyWithWhereWithoutCategoryInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BoardScalarWhereInput = {
    AND?: BoardScalarWhereInput | BoardScalarWhereInput[]
    OR?: BoardScalarWhereInput[]
    NOT?: BoardScalarWhereInput | BoardScalarWhereInput[]
    id?: IntFilter<"Board"> | number
    title?: StringFilter<"Board"> | string
    img_url?: StringFilter<"Board"> | string
    description?: StringNullableFilter<"Board"> | string | null
    category_id?: IntFilter<"Board"> | number
  }

  export type KudosCreateManyBoardInput = {
    id?: number
    title: string
    description: string
    img_url: string
    upvote_count: number
  }

  export type KudosUpdateWithoutBoardInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    upvote_count?: IntFieldUpdateOperationsInput | number
  }

  export type KudosUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    upvote_count?: IntFieldUpdateOperationsInput | number
  }

  export type KudosUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    upvote_count?: IntFieldUpdateOperationsInput | number
  }

  export type BoardCreateManyCategoryInput = {
    id?: number
    title: string
    img_url: string
    description?: string | null
  }

  export type BoardUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kudos?: KudosUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kudos?: KudosUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}