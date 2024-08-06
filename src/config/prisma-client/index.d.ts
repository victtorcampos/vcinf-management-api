
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Contador
 * 
 */
export type Contador = $Result.DefaultSelection<Prisma.$ContadorPayload>
/**
 * Model UserContador
 * 
 */
export type UserContador = $Result.DefaultSelection<Prisma.$UserContadorPayload>
/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  NOOB: 'NOOB',
  SUPERVISOR: 'SUPERVISOR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.contador`: Exposes CRUD operations for the **Contador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contadors
    * const contadors = await prisma.contador.findMany()
    * ```
    */
  get contador(): Prisma.ContadorDelegate<ExtArgs>;

  /**
   * `prisma.userContador`: Exposes CRUD operations for the **UserContador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserContadors
    * const userContadors = await prisma.userContador.findMany()
    * ```
    */
  get userContador(): Prisma.UserContadorDelegate<ExtArgs>;

  /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Contador: 'Contador',
    UserContador: 'UserContador',
    Empresa: 'Empresa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "contador" | "userContador" | "empresa"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Contador: {
        payload: Prisma.$ContadorPayload<ExtArgs>
        fields: Prisma.ContadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          findFirst: {
            args: Prisma.ContadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          findMany: {
            args: Prisma.ContadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>[]
          }
          create: {
            args: Prisma.ContadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          createMany: {
            args: Prisma.ContadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          update: {
            args: Prisma.ContadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          deleteMany: {
            args: Prisma.ContadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          aggregate: {
            args: Prisma.ContadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContador>
          }
          groupBy: {
            args: Prisma.ContadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContadorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContadorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContadorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContadorCountArgs<ExtArgs>
            result: $Utils.Optional<ContadorCountAggregateOutputType> | number
          }
        }
      }
      UserContador: {
        payload: Prisma.$UserContadorPayload<ExtArgs>
        fields: Prisma.UserContadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserContadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserContadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContadorPayload>
          }
          findFirst: {
            args: Prisma.UserContadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserContadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContadorPayload>
          }
          findMany: {
            args: Prisma.UserContadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContadorPayload>[]
          }
          create: {
            args: Prisma.UserContadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContadorPayload>
          }
          createMany: {
            args: Prisma.UserContadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserContadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContadorPayload>
          }
          update: {
            args: Prisma.UserContadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContadorPayload>
          }
          deleteMany: {
            args: Prisma.UserContadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserContadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserContadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContadorPayload>
          }
          aggregate: {
            args: Prisma.UserContadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserContador>
          }
          groupBy: {
            args: Prisma.UserContadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserContadorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserContadorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserContadorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserContadorCountArgs<ExtArgs>
            result: $Utils.Optional<UserContadorCountAggregateOutputType> | number
          }
        }
      }
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EmpresaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EmpresaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contadores: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contadores?: boolean | UserCountOutputTypeCountContadoresArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContadorWhereInput
  }


  /**
   * Count Type ContadorCountOutputType
   */

  export type ContadorCountOutputType = {
    usuarios: number
    Empresa: number
  }

  export type ContadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ContadorCountOutputTypeCountUsuariosArgs
    Empresa?: boolean | ContadorCountOutputTypeCountEmpresaArgs
  }

  // Custom InputTypes
  /**
   * ContadorCountOutputType without action
   */
  export type ContadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorCountOutputType
     */
    select?: ContadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContadorCountOutputType without action
   */
  export type ContadorCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContadorWhereInput
  }

  /**
   * ContadorCountOutputType without action
   */
  export type ContadorCountOutputTypeCountEmpresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contadores?: boolean | User$contadoresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contadores?: boolean | User$contadoresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      contadores: Prisma.$UserContadorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contadores<T extends User$contadoresArgs<ExtArgs> = {}>(args?: Subset<T, User$contadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.contadores
   */
  export type User$contadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    where?: UserContadorWhereInput
    orderBy?: UserContadorOrderByWithRelationInput | UserContadorOrderByWithRelationInput[]
    cursor?: UserContadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserContadorScalarFieldEnum | UserContadorScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Contador
   */

  export type AggregateContador = {
    _count: ContadorCountAggregateOutputType | null
    _min: ContadorMinAggregateOutputType | null
    _max: ContadorMaxAggregateOutputType | null
  }

  export type ContadorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    regcrc: string | null
    telefone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContadorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    regcrc: string | null
    telefone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContadorCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    regcrc: number
    telefone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContadorMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    regcrc?: true
    telefone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContadorMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    regcrc?: true
    telefone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContadorCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    regcrc?: true
    telefone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contador to aggregate.
     */
    where?: ContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contadors to fetch.
     */
    orderBy?: ContadorOrderByWithRelationInput | ContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contadors
    **/
    _count?: true | ContadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContadorMaxAggregateInputType
  }

  export type GetContadorAggregateType<T extends ContadorAggregateArgs> = {
        [P in keyof T & keyof AggregateContador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContador[P]>
      : GetScalarType<T[P], AggregateContador[P]>
  }




  export type ContadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContadorWhereInput
    orderBy?: ContadorOrderByWithAggregationInput | ContadorOrderByWithAggregationInput[]
    by: ContadorScalarFieldEnum[] | ContadorScalarFieldEnum
    having?: ContadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContadorCountAggregateInputType | true
    _min?: ContadorMinAggregateInputType
    _max?: ContadorMaxAggregateInputType
  }

  export type ContadorGroupByOutputType = {
    id: string
    nome: string
    cpf: string
    regcrc: string
    telefone: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContadorCountAggregateOutputType | null
    _min: ContadorMinAggregateOutputType | null
    _max: ContadorMaxAggregateOutputType | null
  }

  type GetContadorGroupByPayload<T extends ContadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContadorGroupByOutputType[P]>
            : GetScalarType<T[P], ContadorGroupByOutputType[P]>
        }
      >
    >


  export type ContadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    regcrc?: boolean
    telefone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarios?: boolean | Contador$usuariosArgs<ExtArgs>
    Empresa?: boolean | Contador$EmpresaArgs<ExtArgs>
    _count?: boolean | ContadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contador"]>


  export type ContadorSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    regcrc?: boolean
    telefone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Contador$usuariosArgs<ExtArgs>
    Empresa?: boolean | Contador$EmpresaArgs<ExtArgs>
    _count?: boolean | ContadorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contador"
    objects: {
      usuarios: Prisma.$UserContadorPayload<ExtArgs>[]
      Empresa: Prisma.$EmpresaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cpf: string
      regcrc: string
      telefone: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contador"]>
    composites: {}
  }

  type ContadorGetPayload<S extends boolean | null | undefined | ContadorDefaultArgs> = $Result.GetResult<Prisma.$ContadorPayload, S>

  type ContadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContadorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContadorCountAggregateInputType | true
    }

  export interface ContadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contador'], meta: { name: 'Contador' } }
    /**
     * Find zero or one Contador that matches the filter.
     * @param {ContadorFindUniqueArgs} args - Arguments to find a Contador
     * @example
     * // Get one Contador
     * const contador = await prisma.contador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContadorFindUniqueArgs>(args: SelectSubset<T, ContadorFindUniqueArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contador that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContadorFindUniqueOrThrowArgs} args - Arguments to find a Contador
     * @example
     * // Get one Contador
     * const contador = await prisma.contador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContadorFindUniqueOrThrowArgs>(args: SelectSubset<T, ContadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorFindFirstArgs} args - Arguments to find a Contador
     * @example
     * // Get one Contador
     * const contador = await prisma.contador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContadorFindFirstArgs>(args?: SelectSubset<T, ContadorFindFirstArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorFindFirstOrThrowArgs} args - Arguments to find a Contador
     * @example
     * // Get one Contador
     * const contador = await prisma.contador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContadorFindFirstOrThrowArgs>(args?: SelectSubset<T, ContadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contadors
     * const contadors = await prisma.contador.findMany()
     * 
     * // Get first 10 Contadors
     * const contadors = await prisma.contador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contadorWithIdOnly = await prisma.contador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContadorFindManyArgs>(args?: SelectSubset<T, ContadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contador.
     * @param {ContadorCreateArgs} args - Arguments to create a Contador.
     * @example
     * // Create one Contador
     * const Contador = await prisma.contador.create({
     *   data: {
     *     // ... data to create a Contador
     *   }
     * })
     * 
     */
    create<T extends ContadorCreateArgs>(args: SelectSubset<T, ContadorCreateArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contadors.
     * @param {ContadorCreateManyArgs} args - Arguments to create many Contadors.
     * @example
     * // Create many Contadors
     * const contador = await prisma.contador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContadorCreateManyArgs>(args?: SelectSubset<T, ContadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contador.
     * @param {ContadorDeleteArgs} args - Arguments to delete one Contador.
     * @example
     * // Delete one Contador
     * const Contador = await prisma.contador.delete({
     *   where: {
     *     // ... filter to delete one Contador
     *   }
     * })
     * 
     */
    delete<T extends ContadorDeleteArgs>(args: SelectSubset<T, ContadorDeleteArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contador.
     * @param {ContadorUpdateArgs} args - Arguments to update one Contador.
     * @example
     * // Update one Contador
     * const contador = await prisma.contador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContadorUpdateArgs>(args: SelectSubset<T, ContadorUpdateArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contadors.
     * @param {ContadorDeleteManyArgs} args - Arguments to filter Contadors to delete.
     * @example
     * // Delete a few Contadors
     * const { count } = await prisma.contador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContadorDeleteManyArgs>(args?: SelectSubset<T, ContadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contadors
     * const contador = await prisma.contador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContadorUpdateManyArgs>(args: SelectSubset<T, ContadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contador.
     * @param {ContadorUpsertArgs} args - Arguments to update or create a Contador.
     * @example
     * // Update or create a Contador
     * const contador = await prisma.contador.upsert({
     *   create: {
     *     // ... data to create a Contador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contador we want to update
     *   }
     * })
     */
    upsert<T extends ContadorUpsertArgs>(args: SelectSubset<T, ContadorUpsertArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Contadors that matches the filter.
     * @param {ContadorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contador = await prisma.contador.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ContadorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Contador.
     * @param {ContadorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contador = await prisma.contador.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContadorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Contadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorCountArgs} args - Arguments to filter Contadors to count.
     * @example
     * // Count the number of Contadors
     * const count = await prisma.contador.count({
     *   where: {
     *     // ... the filter for the Contadors we want to count
     *   }
     * })
    **/
    count<T extends ContadorCountArgs>(
      args?: Subset<T, ContadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContadorAggregateArgs>(args: Subset<T, ContadorAggregateArgs>): Prisma.PrismaPromise<GetContadorAggregateType<T>>

    /**
     * Group by Contador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorGroupByArgs} args - Group by arguments.
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
      T extends ContadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContadorGroupByArgs['orderBy'] }
        : { orderBy?: ContadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contador model
   */
  readonly fields: ContadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Contador$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Contador$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "findMany"> | Null>
    Empresa<T extends Contador$EmpresaArgs<ExtArgs> = {}>(args?: Subset<T, Contador$EmpresaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Contador model
   */ 
  interface ContadorFieldRefs {
    readonly id: FieldRef<"Contador", 'String'>
    readonly nome: FieldRef<"Contador", 'String'>
    readonly cpf: FieldRef<"Contador", 'String'>
    readonly regcrc: FieldRef<"Contador", 'String'>
    readonly telefone: FieldRef<"Contador", 'String'>
    readonly email: FieldRef<"Contador", 'String'>
    readonly createdAt: FieldRef<"Contador", 'DateTime'>
    readonly updatedAt: FieldRef<"Contador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contador findUnique
   */
  export type ContadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    /**
     * Filter, which Contador to fetch.
     */
    where: ContadorWhereUniqueInput
  }

  /**
   * Contador findUniqueOrThrow
   */
  export type ContadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    /**
     * Filter, which Contador to fetch.
     */
    where: ContadorWhereUniqueInput
  }

  /**
   * Contador findFirst
   */
  export type ContadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    /**
     * Filter, which Contador to fetch.
     */
    where?: ContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contadors to fetch.
     */
    orderBy?: ContadorOrderByWithRelationInput | ContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contadors.
     */
    cursor?: ContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contadors.
     */
    distinct?: ContadorScalarFieldEnum | ContadorScalarFieldEnum[]
  }

  /**
   * Contador findFirstOrThrow
   */
  export type ContadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    /**
     * Filter, which Contador to fetch.
     */
    where?: ContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contadors to fetch.
     */
    orderBy?: ContadorOrderByWithRelationInput | ContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contadors.
     */
    cursor?: ContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contadors.
     */
    distinct?: ContadorScalarFieldEnum | ContadorScalarFieldEnum[]
  }

  /**
   * Contador findMany
   */
  export type ContadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    /**
     * Filter, which Contadors to fetch.
     */
    where?: ContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contadors to fetch.
     */
    orderBy?: ContadorOrderByWithRelationInput | ContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contadors.
     */
    cursor?: ContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contadors.
     */
    skip?: number
    distinct?: ContadorScalarFieldEnum | ContadorScalarFieldEnum[]
  }

  /**
   * Contador create
   */
  export type ContadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Contador.
     */
    data: XOR<ContadorCreateInput, ContadorUncheckedCreateInput>
  }

  /**
   * Contador createMany
   */
  export type ContadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contadors.
     */
    data: ContadorCreateManyInput | ContadorCreateManyInput[]
  }

  /**
   * Contador update
   */
  export type ContadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Contador.
     */
    data: XOR<ContadorUpdateInput, ContadorUncheckedUpdateInput>
    /**
     * Choose, which Contador to update.
     */
    where: ContadorWhereUniqueInput
  }

  /**
   * Contador updateMany
   */
  export type ContadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contadors.
     */
    data: XOR<ContadorUpdateManyMutationInput, ContadorUncheckedUpdateManyInput>
    /**
     * Filter which Contadors to update
     */
    where?: ContadorWhereInput
  }

  /**
   * Contador upsert
   */
  export type ContadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Contador to update in case it exists.
     */
    where: ContadorWhereUniqueInput
    /**
     * In case the Contador found by the `where` argument doesn't exist, create a new Contador with this data.
     */
    create: XOR<ContadorCreateInput, ContadorUncheckedCreateInput>
    /**
     * In case the Contador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContadorUpdateInput, ContadorUncheckedUpdateInput>
  }

  /**
   * Contador delete
   */
  export type ContadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    /**
     * Filter which Contador to delete.
     */
    where: ContadorWhereUniqueInput
  }

  /**
   * Contador deleteMany
   */
  export type ContadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contadors to delete
     */
    where?: ContadorWhereInput
  }

  /**
   * Contador findRaw
   */
  export type ContadorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contador aggregateRaw
   */
  export type ContadorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contador.usuarios
   */
  export type Contador$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    where?: UserContadorWhereInput
    orderBy?: UserContadorOrderByWithRelationInput | UserContadorOrderByWithRelationInput[]
    cursor?: UserContadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserContadorScalarFieldEnum | UserContadorScalarFieldEnum[]
  }

  /**
   * Contador.Empresa
   */
  export type Contador$EmpresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    cursor?: EmpresaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Contador without action
   */
  export type ContadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
  }


  /**
   * Model UserContador
   */

  export type AggregateUserContador = {
    _count: UserContadorCountAggregateOutputType | null
    _min: UserContadorMinAggregateOutputType | null
    _max: UserContadorMaxAggregateOutputType | null
  }

  export type UserContadorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contadorId: string | null
  }

  export type UserContadorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contadorId: string | null
  }

  export type UserContadorCountAggregateOutputType = {
    id: number
    userId: number
    contadorId: number
    _all: number
  }


  export type UserContadorMinAggregateInputType = {
    id?: true
    userId?: true
    contadorId?: true
  }

  export type UserContadorMaxAggregateInputType = {
    id?: true
    userId?: true
    contadorId?: true
  }

  export type UserContadorCountAggregateInputType = {
    id?: true
    userId?: true
    contadorId?: true
    _all?: true
  }

  export type UserContadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContador to aggregate.
     */
    where?: UserContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContadors to fetch.
     */
    orderBy?: UserContadorOrderByWithRelationInput | UserContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserContadors
    **/
    _count?: true | UserContadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserContadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserContadorMaxAggregateInputType
  }

  export type GetUserContadorAggregateType<T extends UserContadorAggregateArgs> = {
        [P in keyof T & keyof AggregateUserContador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserContador[P]>
      : GetScalarType<T[P], AggregateUserContador[P]>
  }




  export type UserContadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContadorWhereInput
    orderBy?: UserContadorOrderByWithAggregationInput | UserContadorOrderByWithAggregationInput[]
    by: UserContadorScalarFieldEnum[] | UserContadorScalarFieldEnum
    having?: UserContadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserContadorCountAggregateInputType | true
    _min?: UserContadorMinAggregateInputType
    _max?: UserContadorMaxAggregateInputType
  }

  export type UserContadorGroupByOutputType = {
    id: string
    userId: string
    contadorId: string
    _count: UserContadorCountAggregateOutputType | null
    _min: UserContadorMinAggregateOutputType | null
    _max: UserContadorMaxAggregateOutputType | null
  }

  type GetUserContadorGroupByPayload<T extends UserContadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserContadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserContadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserContadorGroupByOutputType[P]>
            : GetScalarType<T[P], UserContadorGroupByOutputType[P]>
        }
      >
    >


  export type UserContadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contadorId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contador?: boolean | ContadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userContador"]>


  export type UserContadorSelectScalar = {
    id?: boolean
    userId?: boolean
    contadorId?: boolean
  }

  export type UserContadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contador?: boolean | ContadorDefaultArgs<ExtArgs>
  }

  export type $UserContadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserContador"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contador: Prisma.$ContadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contadorId: string
    }, ExtArgs["result"]["userContador"]>
    composites: {}
  }

  type UserContadorGetPayload<S extends boolean | null | undefined | UserContadorDefaultArgs> = $Result.GetResult<Prisma.$UserContadorPayload, S>

  type UserContadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserContadorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserContadorCountAggregateInputType | true
    }

  export interface UserContadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserContador'], meta: { name: 'UserContador' } }
    /**
     * Find zero or one UserContador that matches the filter.
     * @param {UserContadorFindUniqueArgs} args - Arguments to find a UserContador
     * @example
     * // Get one UserContador
     * const userContador = await prisma.userContador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserContadorFindUniqueArgs>(args: SelectSubset<T, UserContadorFindUniqueArgs<ExtArgs>>): Prisma__UserContadorClient<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserContador that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserContadorFindUniqueOrThrowArgs} args - Arguments to find a UserContador
     * @example
     * // Get one UserContador
     * const userContador = await prisma.userContador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserContadorFindUniqueOrThrowArgs>(args: SelectSubset<T, UserContadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserContadorClient<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserContador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContadorFindFirstArgs} args - Arguments to find a UserContador
     * @example
     * // Get one UserContador
     * const userContador = await prisma.userContador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserContadorFindFirstArgs>(args?: SelectSubset<T, UserContadorFindFirstArgs<ExtArgs>>): Prisma__UserContadorClient<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserContador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContadorFindFirstOrThrowArgs} args - Arguments to find a UserContador
     * @example
     * // Get one UserContador
     * const userContador = await prisma.userContador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserContadorFindFirstOrThrowArgs>(args?: SelectSubset<T, UserContadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserContadorClient<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserContadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserContadors
     * const userContadors = await prisma.userContador.findMany()
     * 
     * // Get first 10 UserContadors
     * const userContadors = await prisma.userContador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userContadorWithIdOnly = await prisma.userContador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserContadorFindManyArgs>(args?: SelectSubset<T, UserContadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserContador.
     * @param {UserContadorCreateArgs} args - Arguments to create a UserContador.
     * @example
     * // Create one UserContador
     * const UserContador = await prisma.userContador.create({
     *   data: {
     *     // ... data to create a UserContador
     *   }
     * })
     * 
     */
    create<T extends UserContadorCreateArgs>(args: SelectSubset<T, UserContadorCreateArgs<ExtArgs>>): Prisma__UserContadorClient<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserContadors.
     * @param {UserContadorCreateManyArgs} args - Arguments to create many UserContadors.
     * @example
     * // Create many UserContadors
     * const userContador = await prisma.userContador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserContadorCreateManyArgs>(args?: SelectSubset<T, UserContadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserContador.
     * @param {UserContadorDeleteArgs} args - Arguments to delete one UserContador.
     * @example
     * // Delete one UserContador
     * const UserContador = await prisma.userContador.delete({
     *   where: {
     *     // ... filter to delete one UserContador
     *   }
     * })
     * 
     */
    delete<T extends UserContadorDeleteArgs>(args: SelectSubset<T, UserContadorDeleteArgs<ExtArgs>>): Prisma__UserContadorClient<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserContador.
     * @param {UserContadorUpdateArgs} args - Arguments to update one UserContador.
     * @example
     * // Update one UserContador
     * const userContador = await prisma.userContador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserContadorUpdateArgs>(args: SelectSubset<T, UserContadorUpdateArgs<ExtArgs>>): Prisma__UserContadorClient<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserContadors.
     * @param {UserContadorDeleteManyArgs} args - Arguments to filter UserContadors to delete.
     * @example
     * // Delete a few UserContadors
     * const { count } = await prisma.userContador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserContadorDeleteManyArgs>(args?: SelectSubset<T, UserContadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserContadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserContadors
     * const userContador = await prisma.userContador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserContadorUpdateManyArgs>(args: SelectSubset<T, UserContadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserContador.
     * @param {UserContadorUpsertArgs} args - Arguments to update or create a UserContador.
     * @example
     * // Update or create a UserContador
     * const userContador = await prisma.userContador.upsert({
     *   create: {
     *     // ... data to create a UserContador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserContador we want to update
     *   }
     * })
     */
    upsert<T extends UserContadorUpsertArgs>(args: SelectSubset<T, UserContadorUpsertArgs<ExtArgs>>): Prisma__UserContadorClient<$Result.GetResult<Prisma.$UserContadorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more UserContadors that matches the filter.
     * @param {UserContadorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userContador = await prisma.userContador.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserContadorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserContador.
     * @param {UserContadorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userContador = await prisma.userContador.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserContadorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserContadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContadorCountArgs} args - Arguments to filter UserContadors to count.
     * @example
     * // Count the number of UserContadors
     * const count = await prisma.userContador.count({
     *   where: {
     *     // ... the filter for the UserContadors we want to count
     *   }
     * })
    **/
    count<T extends UserContadorCountArgs>(
      args?: Subset<T, UserContadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserContadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserContador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserContadorAggregateArgs>(args: Subset<T, UserContadorAggregateArgs>): Prisma.PrismaPromise<GetUserContadorAggregateType<T>>

    /**
     * Group by UserContador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContadorGroupByArgs} args - Group by arguments.
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
      T extends UserContadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserContadorGroupByArgs['orderBy'] }
        : { orderBy?: UserContadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserContadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserContadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserContador model
   */
  readonly fields: UserContadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserContador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserContadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    contador<T extends ContadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContadorDefaultArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserContador model
   */ 
  interface UserContadorFieldRefs {
    readonly id: FieldRef<"UserContador", 'String'>
    readonly userId: FieldRef<"UserContador", 'String'>
    readonly contadorId: FieldRef<"UserContador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserContador findUnique
   */
  export type UserContadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    /**
     * Filter, which UserContador to fetch.
     */
    where: UserContadorWhereUniqueInput
  }

  /**
   * UserContador findUniqueOrThrow
   */
  export type UserContadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    /**
     * Filter, which UserContador to fetch.
     */
    where: UserContadorWhereUniqueInput
  }

  /**
   * UserContador findFirst
   */
  export type UserContadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    /**
     * Filter, which UserContador to fetch.
     */
    where?: UserContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContadors to fetch.
     */
    orderBy?: UserContadorOrderByWithRelationInput | UserContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContadors.
     */
    cursor?: UserContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContadors.
     */
    distinct?: UserContadorScalarFieldEnum | UserContadorScalarFieldEnum[]
  }

  /**
   * UserContador findFirstOrThrow
   */
  export type UserContadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    /**
     * Filter, which UserContador to fetch.
     */
    where?: UserContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContadors to fetch.
     */
    orderBy?: UserContadorOrderByWithRelationInput | UserContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContadors.
     */
    cursor?: UserContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContadors.
     */
    distinct?: UserContadorScalarFieldEnum | UserContadorScalarFieldEnum[]
  }

  /**
   * UserContador findMany
   */
  export type UserContadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    /**
     * Filter, which UserContadors to fetch.
     */
    where?: UserContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContadors to fetch.
     */
    orderBy?: UserContadorOrderByWithRelationInput | UserContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserContadors.
     */
    cursor?: UserContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContadors.
     */
    skip?: number
    distinct?: UserContadorScalarFieldEnum | UserContadorScalarFieldEnum[]
  }

  /**
   * UserContador create
   */
  export type UserContadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    /**
     * The data needed to create a UserContador.
     */
    data: XOR<UserContadorCreateInput, UserContadorUncheckedCreateInput>
  }

  /**
   * UserContador createMany
   */
  export type UserContadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserContadors.
     */
    data: UserContadorCreateManyInput | UserContadorCreateManyInput[]
  }

  /**
   * UserContador update
   */
  export type UserContadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    /**
     * The data needed to update a UserContador.
     */
    data: XOR<UserContadorUpdateInput, UserContadorUncheckedUpdateInput>
    /**
     * Choose, which UserContador to update.
     */
    where: UserContadorWhereUniqueInput
  }

  /**
   * UserContador updateMany
   */
  export type UserContadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserContadors.
     */
    data: XOR<UserContadorUpdateManyMutationInput, UserContadorUncheckedUpdateManyInput>
    /**
     * Filter which UserContadors to update
     */
    where?: UserContadorWhereInput
  }

  /**
   * UserContador upsert
   */
  export type UserContadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    /**
     * The filter to search for the UserContador to update in case it exists.
     */
    where: UserContadorWhereUniqueInput
    /**
     * In case the UserContador found by the `where` argument doesn't exist, create a new UserContador with this data.
     */
    create: XOR<UserContadorCreateInput, UserContadorUncheckedCreateInput>
    /**
     * In case the UserContador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserContadorUpdateInput, UserContadorUncheckedUpdateInput>
  }

  /**
   * UserContador delete
   */
  export type UserContadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
    /**
     * Filter which UserContador to delete.
     */
    where: UserContadorWhereUniqueInput
  }

  /**
   * UserContador deleteMany
   */
  export type UserContadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContadors to delete
     */
    where?: UserContadorWhereInput
  }

  /**
   * UserContador findRaw
   */
  export type UserContadorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserContador aggregateRaw
   */
  export type UserContadorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserContador without action
   */
  export type UserContadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContador
     */
    select?: UserContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContadorInclude<ExtArgs> | null
  }


  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: string | null
    cod_dominio: string | null
    nome: string | null
    razao_social: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    contadorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: string | null
    cod_dominio: string | null
    nome: string | null
    razao_social: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    contadorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    cod_dominio: number
    nome: number
    razao_social: number
    cnpj: number
    telefone: number
    email: number
    contadorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmpresaMinAggregateInputType = {
    id?: true
    cod_dominio?: true
    nome?: true
    razao_social?: true
    cnpj?: true
    telefone?: true
    email?: true
    contadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    cod_dominio?: true
    nome?: true
    razao_social?: true
    cnpj?: true
    telefone?: true
    email?: true
    contadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    cod_dominio?: true
    nome?: true
    razao_social?: true
    cnpj?: true
    telefone?: true
    email?: true
    contadorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: string
    cod_dominio: string | null
    nome: string
    razao_social: string
    cnpj: string
    telefone: string | null
    email: string | null
    contadorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cod_dominio?: boolean
    nome?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    contadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contador?: boolean | Empresa$contadorArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>


  export type EmpresaSelectScalar = {
    id?: boolean
    cod_dominio?: boolean
    nome?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    contadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contador?: boolean | Empresa$contadorArgs<ExtArgs>
  }

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      contador: Prisma.$ContadorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cod_dominio: string | null
      nome: string
      razao_social: string
      cnpj: string
      telefone: string | null
      email: string | null
      contadorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Empresas that matches the filter.
     * @param {EmpresaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const empresa = await prisma.empresa.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: EmpresaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Empresa.
     * @param {EmpresaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const empresa = await prisma.empresa.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EmpresaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contador<T extends Empresa$contadorArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$contadorArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Empresa model
   */ 
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'String'>
    readonly cod_dominio: FieldRef<"Empresa", 'String'>
    readonly nome: FieldRef<"Empresa", 'String'>
    readonly razao_social: FieldRef<"Empresa", 'String'>
    readonly cnpj: FieldRef<"Empresa", 'String'>
    readonly telefone: FieldRef<"Empresa", 'String'>
    readonly email: FieldRef<"Empresa", 'String'>
    readonly contadorId: FieldRef<"Empresa", 'String'>
    readonly createdAt: FieldRef<"Empresa", 'DateTime'>
    readonly updatedAt: FieldRef<"Empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
  }

  /**
   * Empresa findRaw
   */
  export type EmpresaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Empresa aggregateRaw
   */
  export type EmpresaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Empresa.contador
   */
  export type Empresa$contadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorInclude<ExtArgs> | null
    where?: ContadorWhereInput
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContadorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    regcrc: 'regcrc',
    telefone: 'telefone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContadorScalarFieldEnum = (typeof ContadorScalarFieldEnum)[keyof typeof ContadorScalarFieldEnum]


  export const UserContadorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contadorId: 'contadorId'
  };

  export type UserContadorScalarFieldEnum = (typeof UserContadorScalarFieldEnum)[keyof typeof UserContadorScalarFieldEnum]


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    cod_dominio: 'cod_dominio',
    nome: 'nome',
    razao_social: 'razao_social',
    cnpj: 'cnpj',
    telefone: 'telefone',
    email: 'email',
    contadorId: 'contadorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    contadores?: UserContadorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contadores?: UserContadorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    contadores?: UserContadorListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ContadorWhereInput = {
    AND?: ContadorWhereInput | ContadorWhereInput[]
    OR?: ContadorWhereInput[]
    NOT?: ContadorWhereInput | ContadorWhereInput[]
    id?: StringFilter<"Contador"> | string
    nome?: StringFilter<"Contador"> | string
    cpf?: StringFilter<"Contador"> | string
    regcrc?: StringFilter<"Contador"> | string
    telefone?: StringNullableFilter<"Contador"> | string | null
    email?: StringNullableFilter<"Contador"> | string | null
    createdAt?: DateTimeFilter<"Contador"> | Date | string
    updatedAt?: DateTimeFilter<"Contador"> | Date | string
    usuarios?: UserContadorListRelationFilter
    Empresa?: EmpresaListRelationFilter
  }

  export type ContadorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    regcrc?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarios?: UserContadorOrderByRelationAggregateInput
    Empresa?: EmpresaOrderByRelationAggregateInput
  }

  export type ContadorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    regcrc?: string
    AND?: ContadorWhereInput | ContadorWhereInput[]
    OR?: ContadorWhereInput[]
    NOT?: ContadorWhereInput | ContadorWhereInput[]
    nome?: StringFilter<"Contador"> | string
    telefone?: StringNullableFilter<"Contador"> | string | null
    email?: StringNullableFilter<"Contador"> | string | null
    createdAt?: DateTimeFilter<"Contador"> | Date | string
    updatedAt?: DateTimeFilter<"Contador"> | Date | string
    usuarios?: UserContadorListRelationFilter
    Empresa?: EmpresaListRelationFilter
  }, "id" | "cpf" | "regcrc">

  export type ContadorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    regcrc?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContadorCountOrderByAggregateInput
    _max?: ContadorMaxOrderByAggregateInput
    _min?: ContadorMinOrderByAggregateInput
  }

  export type ContadorScalarWhereWithAggregatesInput = {
    AND?: ContadorScalarWhereWithAggregatesInput | ContadorScalarWhereWithAggregatesInput[]
    OR?: ContadorScalarWhereWithAggregatesInput[]
    NOT?: ContadorScalarWhereWithAggregatesInput | ContadorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contador"> | string
    nome?: StringWithAggregatesFilter<"Contador"> | string
    cpf?: StringWithAggregatesFilter<"Contador"> | string
    regcrc?: StringWithAggregatesFilter<"Contador"> | string
    telefone?: StringNullableWithAggregatesFilter<"Contador"> | string | null
    email?: StringNullableWithAggregatesFilter<"Contador"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contador"> | Date | string
  }

  export type UserContadorWhereInput = {
    AND?: UserContadorWhereInput | UserContadorWhereInput[]
    OR?: UserContadorWhereInput[]
    NOT?: UserContadorWhereInput | UserContadorWhereInput[]
    id?: StringFilter<"UserContador"> | string
    userId?: StringFilter<"UserContador"> | string
    contadorId?: StringFilter<"UserContador"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    contador?: XOR<ContadorRelationFilter, ContadorWhereInput>
  }

  export type UserContadorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contadorId?: SortOrder
    user?: UserOrderByWithRelationInput
    contador?: ContadorOrderByWithRelationInput
  }

  export type UserContadorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_contadorId?: UserContadorUserIdContadorIdCompoundUniqueInput
    AND?: UserContadorWhereInput | UserContadorWhereInput[]
    OR?: UserContadorWhereInput[]
    NOT?: UserContadorWhereInput | UserContadorWhereInput[]
    userId?: StringFilter<"UserContador"> | string
    contadorId?: StringFilter<"UserContador"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    contador?: XOR<ContadorRelationFilter, ContadorWhereInput>
  }, "id" | "userId_contadorId">

  export type UserContadorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contadorId?: SortOrder
    _count?: UserContadorCountOrderByAggregateInput
    _max?: UserContadorMaxOrderByAggregateInput
    _min?: UserContadorMinOrderByAggregateInput
  }

  export type UserContadorScalarWhereWithAggregatesInput = {
    AND?: UserContadorScalarWhereWithAggregatesInput | UserContadorScalarWhereWithAggregatesInput[]
    OR?: UserContadorScalarWhereWithAggregatesInput[]
    NOT?: UserContadorScalarWhereWithAggregatesInput | UserContadorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserContador"> | string
    userId?: StringWithAggregatesFilter<"UserContador"> | string
    contadorId?: StringWithAggregatesFilter<"UserContador"> | string
  }

  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: StringFilter<"Empresa"> | string
    cod_dominio?: StringNullableFilter<"Empresa"> | string | null
    nome?: StringFilter<"Empresa"> | string
    razao_social?: StringFilter<"Empresa"> | string
    cnpj?: StringFilter<"Empresa"> | string
    telefone?: StringNullableFilter<"Empresa"> | string | null
    email?: StringNullableFilter<"Empresa"> | string | null
    contadorId?: StringNullableFilter<"Empresa"> | string | null
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeFilter<"Empresa"> | Date | string
    contador?: XOR<ContadorNullableRelationFilter, ContadorWhereInput> | null
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contador?: ContadorOrderByWithRelationInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    cod_dominio?: StringNullableFilter<"Empresa"> | string | null
    nome?: StringFilter<"Empresa"> | string
    razao_social?: StringFilter<"Empresa"> | string
    telefone?: StringNullableFilter<"Empresa"> | string | null
    email?: StringNullableFilter<"Empresa"> | string | null
    contadorId?: StringNullableFilter<"Empresa"> | string | null
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeFilter<"Empresa"> | Date | string
    contador?: XOR<ContadorNullableRelationFilter, ContadorWhereInput> | null
  }, "id" | "cnpj">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Empresa"> | string
    cod_dominio?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    nome?: StringWithAggregatesFilter<"Empresa"> | string
    razao_social?: StringWithAggregatesFilter<"Empresa"> | string
    cnpj?: StringWithAggregatesFilter<"Empresa"> | string
    telefone?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    email?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    contadorId?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    contadores?: UserContadorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    contadores?: UserContadorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contadores?: UserContadorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contadores?: UserContadorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContadorCreateInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorCreateNestedManyWithoutContadorInput
    Empresa?: EmpresaCreateNestedManyWithoutContadorInput
  }

  export type ContadorUncheckedCreateInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorUncheckedCreateNestedManyWithoutContadorInput
    Empresa?: EmpresaUncheckedCreateNestedManyWithoutContadorInput
  }

  export type ContadorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUpdateManyWithoutContadorNestedInput
    Empresa?: EmpresaUpdateManyWithoutContadorNestedInput
  }

  export type ContadorUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUncheckedUpdateManyWithoutContadorNestedInput
    Empresa?: EmpresaUncheckedUpdateManyWithoutContadorNestedInput
  }

  export type ContadorCreateManyInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContadorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContadorUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContadorCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutContadoresInput
    contador: ContadorCreateNestedOneWithoutUsuariosInput
  }

  export type UserContadorUncheckedCreateInput = {
    id?: string
    userId: string
    contadorId: string
  }

  export type UserContadorUpdateInput = {
    user?: UserUpdateOneRequiredWithoutContadoresNestedInput
    contador?: ContadorUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UserContadorUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type UserContadorCreateManyInput = {
    id?: string
    userId: string
    contadorId: string
  }

  export type UserContadorUpdateManyMutationInput = {

  }

  export type UserContadorUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresaCreateInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contador?: ContadorCreateNestedOneWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    contadorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpresaUpdateInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: ContadorUpdateOneWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaCreateManyInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    contadorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpresaUpdateManyMutationInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserContadorListRelationFilter = {
    every?: UserContadorWhereInput
    some?: UserContadorWhereInput
    none?: UserContadorWhereInput
  }

  export type UserContadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type EmpresaListRelationFilter = {
    every?: EmpresaWhereInput
    some?: EmpresaWhereInput
    none?: EmpresaWhereInput
  }

  export type EmpresaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContadorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    regcrc?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    regcrc?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContadorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    regcrc?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ContadorRelationFilter = {
    is?: ContadorWhereInput
    isNot?: ContadorWhereInput
  }

  export type UserContadorUserIdContadorIdCompoundUniqueInput = {
    userId: string
    contadorId: string
  }

  export type UserContadorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contadorId?: SortOrder
  }

  export type UserContadorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contadorId?: SortOrder
  }

  export type UserContadorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contadorId?: SortOrder
  }

  export type ContadorNullableRelationFilter = {
    is?: ContadorWhereInput | null
    isNot?: ContadorWhereInput | null
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserContadorCreateNestedManyWithoutUserInput = {
    create?: XOR<UserContadorCreateWithoutUserInput, UserContadorUncheckedCreateWithoutUserInput> | UserContadorCreateWithoutUserInput[] | UserContadorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContadorCreateOrConnectWithoutUserInput | UserContadorCreateOrConnectWithoutUserInput[]
    createMany?: UserContadorCreateManyUserInputEnvelope
    connect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
  }

  export type UserContadorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserContadorCreateWithoutUserInput, UserContadorUncheckedCreateWithoutUserInput> | UserContadorCreateWithoutUserInput[] | UserContadorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContadorCreateOrConnectWithoutUserInput | UserContadorCreateOrConnectWithoutUserInput[]
    createMany?: UserContadorCreateManyUserInputEnvelope
    connect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserContadorUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserContadorCreateWithoutUserInput, UserContadorUncheckedCreateWithoutUserInput> | UserContadorCreateWithoutUserInput[] | UserContadorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContadorCreateOrConnectWithoutUserInput | UserContadorCreateOrConnectWithoutUserInput[]
    upsert?: UserContadorUpsertWithWhereUniqueWithoutUserInput | UserContadorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserContadorCreateManyUserInputEnvelope
    set?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    disconnect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    delete?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    connect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    update?: UserContadorUpdateWithWhereUniqueWithoutUserInput | UserContadorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserContadorUpdateManyWithWhereWithoutUserInput | UserContadorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserContadorScalarWhereInput | UserContadorScalarWhereInput[]
  }

  export type UserContadorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserContadorCreateWithoutUserInput, UserContadorUncheckedCreateWithoutUserInput> | UserContadorCreateWithoutUserInput[] | UserContadorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContadorCreateOrConnectWithoutUserInput | UserContadorCreateOrConnectWithoutUserInput[]
    upsert?: UserContadorUpsertWithWhereUniqueWithoutUserInput | UserContadorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserContadorCreateManyUserInputEnvelope
    set?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    disconnect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    delete?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    connect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    update?: UserContadorUpdateWithWhereUniqueWithoutUserInput | UserContadorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserContadorUpdateManyWithWhereWithoutUserInput | UserContadorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserContadorScalarWhereInput | UserContadorScalarWhereInput[]
  }

  export type UserContadorCreateNestedManyWithoutContadorInput = {
    create?: XOR<UserContadorCreateWithoutContadorInput, UserContadorUncheckedCreateWithoutContadorInput> | UserContadorCreateWithoutContadorInput[] | UserContadorUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: UserContadorCreateOrConnectWithoutContadorInput | UserContadorCreateOrConnectWithoutContadorInput[]
    createMany?: UserContadorCreateManyContadorInputEnvelope
    connect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
  }

  export type EmpresaCreateNestedManyWithoutContadorInput = {
    create?: XOR<EmpresaCreateWithoutContadorInput, EmpresaUncheckedCreateWithoutContadorInput> | EmpresaCreateWithoutContadorInput[] | EmpresaUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: EmpresaCreateOrConnectWithoutContadorInput | EmpresaCreateOrConnectWithoutContadorInput[]
    createMany?: EmpresaCreateManyContadorInputEnvelope
    connect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
  }

  export type UserContadorUncheckedCreateNestedManyWithoutContadorInput = {
    create?: XOR<UserContadorCreateWithoutContadorInput, UserContadorUncheckedCreateWithoutContadorInput> | UserContadorCreateWithoutContadorInput[] | UserContadorUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: UserContadorCreateOrConnectWithoutContadorInput | UserContadorCreateOrConnectWithoutContadorInput[]
    createMany?: UserContadorCreateManyContadorInputEnvelope
    connect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
  }

  export type EmpresaUncheckedCreateNestedManyWithoutContadorInput = {
    create?: XOR<EmpresaCreateWithoutContadorInput, EmpresaUncheckedCreateWithoutContadorInput> | EmpresaCreateWithoutContadorInput[] | EmpresaUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: EmpresaCreateOrConnectWithoutContadorInput | EmpresaCreateOrConnectWithoutContadorInput[]
    createMany?: EmpresaCreateManyContadorInputEnvelope
    connect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserContadorUpdateManyWithoutContadorNestedInput = {
    create?: XOR<UserContadorCreateWithoutContadorInput, UserContadorUncheckedCreateWithoutContadorInput> | UserContadorCreateWithoutContadorInput[] | UserContadorUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: UserContadorCreateOrConnectWithoutContadorInput | UserContadorCreateOrConnectWithoutContadorInput[]
    upsert?: UserContadorUpsertWithWhereUniqueWithoutContadorInput | UserContadorUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: UserContadorCreateManyContadorInputEnvelope
    set?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    disconnect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    delete?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    connect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    update?: UserContadorUpdateWithWhereUniqueWithoutContadorInput | UserContadorUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: UserContadorUpdateManyWithWhereWithoutContadorInput | UserContadorUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: UserContadorScalarWhereInput | UserContadorScalarWhereInput[]
  }

  export type EmpresaUpdateManyWithoutContadorNestedInput = {
    create?: XOR<EmpresaCreateWithoutContadorInput, EmpresaUncheckedCreateWithoutContadorInput> | EmpresaCreateWithoutContadorInput[] | EmpresaUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: EmpresaCreateOrConnectWithoutContadorInput | EmpresaCreateOrConnectWithoutContadorInput[]
    upsert?: EmpresaUpsertWithWhereUniqueWithoutContadorInput | EmpresaUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: EmpresaCreateManyContadorInputEnvelope
    set?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    disconnect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    delete?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    connect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    update?: EmpresaUpdateWithWhereUniqueWithoutContadorInput | EmpresaUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: EmpresaUpdateManyWithWhereWithoutContadorInput | EmpresaUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: EmpresaScalarWhereInput | EmpresaScalarWhereInput[]
  }

  export type UserContadorUncheckedUpdateManyWithoutContadorNestedInput = {
    create?: XOR<UserContadorCreateWithoutContadorInput, UserContadorUncheckedCreateWithoutContadorInput> | UserContadorCreateWithoutContadorInput[] | UserContadorUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: UserContadorCreateOrConnectWithoutContadorInput | UserContadorCreateOrConnectWithoutContadorInput[]
    upsert?: UserContadorUpsertWithWhereUniqueWithoutContadorInput | UserContadorUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: UserContadorCreateManyContadorInputEnvelope
    set?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    disconnect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    delete?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    connect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
    update?: UserContadorUpdateWithWhereUniqueWithoutContadorInput | UserContadorUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: UserContadorUpdateManyWithWhereWithoutContadorInput | UserContadorUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: UserContadorScalarWhereInput | UserContadorScalarWhereInput[]
  }

  export type EmpresaUncheckedUpdateManyWithoutContadorNestedInput = {
    create?: XOR<EmpresaCreateWithoutContadorInput, EmpresaUncheckedCreateWithoutContadorInput> | EmpresaCreateWithoutContadorInput[] | EmpresaUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: EmpresaCreateOrConnectWithoutContadorInput | EmpresaCreateOrConnectWithoutContadorInput[]
    upsert?: EmpresaUpsertWithWhereUniqueWithoutContadorInput | EmpresaUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: EmpresaCreateManyContadorInputEnvelope
    set?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    disconnect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    delete?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    connect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    update?: EmpresaUpdateWithWhereUniqueWithoutContadorInput | EmpresaUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: EmpresaUpdateManyWithWhereWithoutContadorInput | EmpresaUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: EmpresaScalarWhereInput | EmpresaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContadoresInput = {
    create?: XOR<UserCreateWithoutContadoresInput, UserUncheckedCreateWithoutContadoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutContadoresInput
    connect?: UserWhereUniqueInput
  }

  export type ContadorCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<ContadorCreateWithoutUsuariosInput, ContadorUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutUsuariosInput
    connect?: ContadorWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContadoresNestedInput = {
    create?: XOR<UserCreateWithoutContadoresInput, UserUncheckedCreateWithoutContadoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutContadoresInput
    upsert?: UserUpsertWithoutContadoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContadoresInput, UserUpdateWithoutContadoresInput>, UserUncheckedUpdateWithoutContadoresInput>
  }

  export type ContadorUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<ContadorCreateWithoutUsuariosInput, ContadorUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutUsuariosInput
    upsert?: ContadorUpsertWithoutUsuariosInput
    connect?: ContadorWhereUniqueInput
    update?: XOR<XOR<ContadorUpdateToOneWithWhereWithoutUsuariosInput, ContadorUpdateWithoutUsuariosInput>, ContadorUncheckedUpdateWithoutUsuariosInput>
  }

  export type ContadorCreateNestedOneWithoutEmpresaInput = {
    create?: XOR<ContadorCreateWithoutEmpresaInput, ContadorUncheckedCreateWithoutEmpresaInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutEmpresaInput
    connect?: ContadorWhereUniqueInput
  }

  export type ContadorUpdateOneWithoutEmpresaNestedInput = {
    create?: XOR<ContadorCreateWithoutEmpresaInput, ContadorUncheckedCreateWithoutEmpresaInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutEmpresaInput
    upsert?: ContadorUpsertWithoutEmpresaInput
    disconnect?: boolean
    delete?: ContadorWhereInput | boolean
    connect?: ContadorWhereUniqueInput
    update?: XOR<XOR<ContadorUpdateToOneWithWhereWithoutEmpresaInput, ContadorUpdateWithoutEmpresaInput>, ContadorUncheckedUpdateWithoutEmpresaInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type UserContadorCreateWithoutUserInput = {
    id?: string
    contador: ContadorCreateNestedOneWithoutUsuariosInput
  }

  export type UserContadorUncheckedCreateWithoutUserInput = {
    id?: string
    contadorId: string
  }

  export type UserContadorCreateOrConnectWithoutUserInput = {
    where: UserContadorWhereUniqueInput
    create: XOR<UserContadorCreateWithoutUserInput, UserContadorUncheckedCreateWithoutUserInput>
  }

  export type UserContadorCreateManyUserInputEnvelope = {
    data: UserContadorCreateManyUserInput | UserContadorCreateManyUserInput[]
  }

  export type UserContadorUpsertWithWhereUniqueWithoutUserInput = {
    where: UserContadorWhereUniqueInput
    update: XOR<UserContadorUpdateWithoutUserInput, UserContadorUncheckedUpdateWithoutUserInput>
    create: XOR<UserContadorCreateWithoutUserInput, UserContadorUncheckedCreateWithoutUserInput>
  }

  export type UserContadorUpdateWithWhereUniqueWithoutUserInput = {
    where: UserContadorWhereUniqueInput
    data: XOR<UserContadorUpdateWithoutUserInput, UserContadorUncheckedUpdateWithoutUserInput>
  }

  export type UserContadorUpdateManyWithWhereWithoutUserInput = {
    where: UserContadorScalarWhereInput
    data: XOR<UserContadorUpdateManyMutationInput, UserContadorUncheckedUpdateManyWithoutUserInput>
  }

  export type UserContadorScalarWhereInput = {
    AND?: UserContadorScalarWhereInput | UserContadorScalarWhereInput[]
    OR?: UserContadorScalarWhereInput[]
    NOT?: UserContadorScalarWhereInput | UserContadorScalarWhereInput[]
    id?: StringFilter<"UserContador"> | string
    userId?: StringFilter<"UserContador"> | string
    contadorId?: StringFilter<"UserContador"> | string
  }

  export type UserContadorCreateWithoutContadorInput = {
    id?: string
    user: UserCreateNestedOneWithoutContadoresInput
  }

  export type UserContadorUncheckedCreateWithoutContadorInput = {
    id?: string
    userId: string
  }

  export type UserContadorCreateOrConnectWithoutContadorInput = {
    where: UserContadorWhereUniqueInput
    create: XOR<UserContadorCreateWithoutContadorInput, UserContadorUncheckedCreateWithoutContadorInput>
  }

  export type UserContadorCreateManyContadorInputEnvelope = {
    data: UserContadorCreateManyContadorInput | UserContadorCreateManyContadorInput[]
  }

  export type EmpresaCreateWithoutContadorInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpresaUncheckedCreateWithoutContadorInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpresaCreateOrConnectWithoutContadorInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutContadorInput, EmpresaUncheckedCreateWithoutContadorInput>
  }

  export type EmpresaCreateManyContadorInputEnvelope = {
    data: EmpresaCreateManyContadorInput | EmpresaCreateManyContadorInput[]
  }

  export type UserContadorUpsertWithWhereUniqueWithoutContadorInput = {
    where: UserContadorWhereUniqueInput
    update: XOR<UserContadorUpdateWithoutContadorInput, UserContadorUncheckedUpdateWithoutContadorInput>
    create: XOR<UserContadorCreateWithoutContadorInput, UserContadorUncheckedCreateWithoutContadorInput>
  }

  export type UserContadorUpdateWithWhereUniqueWithoutContadorInput = {
    where: UserContadorWhereUniqueInput
    data: XOR<UserContadorUpdateWithoutContadorInput, UserContadorUncheckedUpdateWithoutContadorInput>
  }

  export type UserContadorUpdateManyWithWhereWithoutContadorInput = {
    where: UserContadorScalarWhereInput
    data: XOR<UserContadorUpdateManyMutationInput, UserContadorUncheckedUpdateManyWithoutContadorInput>
  }

  export type EmpresaUpsertWithWhereUniqueWithoutContadorInput = {
    where: EmpresaWhereUniqueInput
    update: XOR<EmpresaUpdateWithoutContadorInput, EmpresaUncheckedUpdateWithoutContadorInput>
    create: XOR<EmpresaCreateWithoutContadorInput, EmpresaUncheckedCreateWithoutContadorInput>
  }

  export type EmpresaUpdateWithWhereUniqueWithoutContadorInput = {
    where: EmpresaWhereUniqueInput
    data: XOR<EmpresaUpdateWithoutContadorInput, EmpresaUncheckedUpdateWithoutContadorInput>
  }

  export type EmpresaUpdateManyWithWhereWithoutContadorInput = {
    where: EmpresaScalarWhereInput
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyWithoutContadorInput>
  }

  export type EmpresaScalarWhereInput = {
    AND?: EmpresaScalarWhereInput | EmpresaScalarWhereInput[]
    OR?: EmpresaScalarWhereInput[]
    NOT?: EmpresaScalarWhereInput | EmpresaScalarWhereInput[]
    id?: StringFilter<"Empresa"> | string
    cod_dominio?: StringNullableFilter<"Empresa"> | string | null
    nome?: StringFilter<"Empresa"> | string
    razao_social?: StringFilter<"Empresa"> | string
    cnpj?: StringFilter<"Empresa"> | string
    telefone?: StringNullableFilter<"Empresa"> | string | null
    email?: StringNullableFilter<"Empresa"> | string | null
    contadorId?: StringNullableFilter<"Empresa"> | string | null
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeFilter<"Empresa"> | Date | string
  }

  export type UserCreateWithoutContadoresInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutContadoresInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutContadoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContadoresInput, UserUncheckedCreateWithoutContadoresInput>
  }

  export type ContadorCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Empresa?: EmpresaCreateNestedManyWithoutContadorInput
  }

  export type ContadorUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Empresa?: EmpresaUncheckedCreateNestedManyWithoutContadorInput
  }

  export type ContadorCreateOrConnectWithoutUsuariosInput = {
    where: ContadorWhereUniqueInput
    create: XOR<ContadorCreateWithoutUsuariosInput, ContadorUncheckedCreateWithoutUsuariosInput>
  }

  export type UserUpsertWithoutContadoresInput = {
    update: XOR<UserUpdateWithoutContadoresInput, UserUncheckedUpdateWithoutContadoresInput>
    create: XOR<UserCreateWithoutContadoresInput, UserUncheckedCreateWithoutContadoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContadoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContadoresInput, UserUncheckedUpdateWithoutContadoresInput>
  }

  export type UserUpdateWithoutContadoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutContadoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContadorUpsertWithoutUsuariosInput = {
    update: XOR<ContadorUpdateWithoutUsuariosInput, ContadorUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ContadorCreateWithoutUsuariosInput, ContadorUncheckedCreateWithoutUsuariosInput>
    where?: ContadorWhereInput
  }

  export type ContadorUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: ContadorWhereInput
    data: XOR<ContadorUpdateWithoutUsuariosInput, ContadorUncheckedUpdateWithoutUsuariosInput>
  }

  export type ContadorUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Empresa?: EmpresaUpdateManyWithoutContadorNestedInput
  }

  export type ContadorUncheckedUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Empresa?: EmpresaUncheckedUpdateManyWithoutContadorNestedInput
  }

  export type ContadorCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorCreateNestedManyWithoutContadorInput
  }

  export type ContadorUncheckedCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorUncheckedCreateNestedManyWithoutContadorInput
  }

  export type ContadorCreateOrConnectWithoutEmpresaInput = {
    where: ContadorWhereUniqueInput
    create: XOR<ContadorCreateWithoutEmpresaInput, ContadorUncheckedCreateWithoutEmpresaInput>
  }

  export type ContadorUpsertWithoutEmpresaInput = {
    update: XOR<ContadorUpdateWithoutEmpresaInput, ContadorUncheckedUpdateWithoutEmpresaInput>
    create: XOR<ContadorCreateWithoutEmpresaInput, ContadorUncheckedCreateWithoutEmpresaInput>
    where?: ContadorWhereInput
  }

  export type ContadorUpdateToOneWithWhereWithoutEmpresaInput = {
    where?: ContadorWhereInput
    data: XOR<ContadorUpdateWithoutEmpresaInput, ContadorUncheckedUpdateWithoutEmpresaInput>
  }

  export type ContadorUpdateWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUpdateManyWithoutContadorNestedInput
  }

  export type ContadorUncheckedUpdateWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUncheckedUpdateManyWithoutContadorNestedInput
  }

  export type UserContadorCreateManyUserInput = {
    id?: string
    contadorId: string
  }

  export type UserContadorUpdateWithoutUserInput = {
    contador?: ContadorUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UserContadorUncheckedUpdateWithoutUserInput = {
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type UserContadorUncheckedUpdateManyWithoutUserInput = {
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type UserContadorCreateManyContadorInput = {
    id?: string
    userId: string
  }

  export type EmpresaCreateManyContadorInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserContadorUpdateWithoutContadorInput = {
    user?: UserUpdateOneRequiredWithoutContadoresNestedInput
  }

  export type UserContadorUncheckedUpdateWithoutContadorInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserContadorUncheckedUpdateManyWithoutContadorInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresaUpdateWithoutContadorInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateWithoutContadorInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyWithoutContadorInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContadorCountOutputTypeDefaultArgs instead
     */
    export type ContadorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContadorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContadorDefaultArgs instead
     */
    export type ContadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContadorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserContadorDefaultArgs instead
     */
    export type UserContadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserContadorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmpresaDefaultArgs instead
     */
    export type EmpresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpresaDefaultArgs<ExtArgs>

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