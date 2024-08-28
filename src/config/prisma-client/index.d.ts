
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
 * Model Emitente
 * 
 */
export type Emitente = $Result.DefaultSelection<Prisma.$EmitentePayload>
/**
 * Model Certificado
 * 
 */
export type Certificado = $Result.DefaultSelection<Prisma.$CertificadoPayload>
/**
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>

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
   * `prisma.emitente`: Exposes CRUD operations for the **Emitente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emitentes
    * const emitentes = await prisma.emitente.findMany()
    * ```
    */
  get emitente(): Prisma.EmitenteDelegate<ExtArgs>;

  /**
   * `prisma.certificado`: Exposes CRUD operations for the **Certificado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificados
    * const certificados = await prisma.certificado.findMany()
    * ```
    */
  get certificado(): Prisma.CertificadoDelegate<ExtArgs>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<ExtArgs>;
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
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
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
    Emitente: 'Emitente',
    Certificado: 'Certificado',
    Endereco: 'Endereco'
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
      modelProps: "user" | "contador" | "userContador" | "emitente" | "certificado" | "endereco"
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
      Emitente: {
        payload: Prisma.$EmitentePayload<ExtArgs>
        fields: Prisma.EmitenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmitenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmitenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitentePayload>
          }
          findFirst: {
            args: Prisma.EmitenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmitenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitentePayload>
          }
          findMany: {
            args: Prisma.EmitenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitentePayload>[]
          }
          create: {
            args: Prisma.EmitenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitentePayload>
          }
          createMany: {
            args: Prisma.EmitenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmitenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitentePayload>
          }
          update: {
            args: Prisma.EmitenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitentePayload>
          }
          deleteMany: {
            args: Prisma.EmitenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmitenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmitenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitentePayload>
          }
          aggregate: {
            args: Prisma.EmitenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmitente>
          }
          groupBy: {
            args: Prisma.EmitenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmitenteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EmitenteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EmitenteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EmitenteCountArgs<ExtArgs>
            result: $Utils.Optional<EmitenteCountAggregateOutputType> | number
          }
        }
      }
      Certificado: {
        payload: Prisma.$CertificadoPayload<ExtArgs>
        fields: Prisma.CertificadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          findFirst: {
            args: Prisma.CertificadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          findMany: {
            args: Prisma.CertificadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>[]
          }
          create: {
            args: Prisma.CertificadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          createMany: {
            args: Prisma.CertificadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CertificadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          update: {
            args: Prisma.CertificadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          deleteMany: {
            args: Prisma.CertificadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CertificadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          aggregate: {
            args: Prisma.CertificadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificado>
          }
          groupBy: {
            args: Prisma.CertificadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificadoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CertificadoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CertificadoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CertificadoCountArgs<ExtArgs>
            result: $Utils.Optional<CertificadoCountAggregateOutputType> | number
          }
        }
      }
      Endereco: {
        payload: Prisma.$EnderecoPayload<ExtArgs>
        fields: Prisma.EnderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findMany: {
            args: Prisma.EnderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          create: {
            args: Prisma.EnderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          createMany: {
            args: Prisma.EnderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          update: {
            args: Prisma.EnderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.EnderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EnderecoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EnderecoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EnderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
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
    Emitentes: number
    certificados: number
  }

  export type ContadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ContadorCountOutputTypeCountUsuariosArgs
    Emitentes?: boolean | ContadorCountOutputTypeCountEmitentesArgs
    certificados?: boolean | ContadorCountOutputTypeCountCertificadosArgs
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
  export type ContadorCountOutputTypeCountEmitentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmitenteWhereInput
  }

  /**
   * ContadorCountOutputType without action
   */
  export type ContadorCountOutputTypeCountCertificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
  }


  /**
   * Count Type EmitenteCountOutputType
   */

  export type EmitenteCountOutputType = {
    enderecos: number
  }

  export type EmitenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | EmitenteCountOutputTypeCountEnderecosArgs
  }

  // Custom InputTypes
  /**
   * EmitenteCountOutputType without action
   */
  export type EmitenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmitenteCountOutputType
     */
    select?: EmitenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmitenteCountOutputType without action
   */
  export type EmitenteCountOutputTypeCountEnderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
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
    Emitentes?: boolean | Contador$EmitentesArgs<ExtArgs>
    endereco?: boolean | Contador$enderecoArgs<ExtArgs>
    certificados?: boolean | Contador$certificadosArgs<ExtArgs>
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
    Emitentes?: boolean | Contador$EmitentesArgs<ExtArgs>
    endereco?: boolean | Contador$enderecoArgs<ExtArgs>
    certificados?: boolean | Contador$certificadosArgs<ExtArgs>
    _count?: boolean | ContadorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contador"
    objects: {
      usuarios: Prisma.$UserContadorPayload<ExtArgs>[]
      Emitentes: Prisma.$EmitentePayload<ExtArgs>[]
      endereco: Prisma.$EnderecoPayload<ExtArgs> | null
      certificados: Prisma.$CertificadoPayload<ExtArgs>[]
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
    Emitentes<T extends Contador$EmitentesArgs<ExtArgs> = {}>(args?: Subset<T, Contador$EmitentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "findMany"> | Null>
    endereco<T extends Contador$enderecoArgs<ExtArgs> = {}>(args?: Subset<T, Contador$enderecoArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    certificados<T extends Contador$certificadosArgs<ExtArgs> = {}>(args?: Subset<T, Contador$certificadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Contador.Emitentes
   */
  export type Contador$EmitentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    where?: EmitenteWhereInput
    orderBy?: EmitenteOrderByWithRelationInput | EmitenteOrderByWithRelationInput[]
    cursor?: EmitenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmitenteScalarFieldEnum | EmitenteScalarFieldEnum[]
  }

  /**
   * Contador.endereco
   */
  export type Contador$enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
  }

  /**
   * Contador.certificados
   */
  export type Contador$certificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    cursor?: CertificadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
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
   * Model Emitente
   */

  export type AggregateEmitente = {
    _count: EmitenteCountAggregateOutputType | null
    _min: EmitenteMinAggregateOutputType | null
    _max: EmitenteMaxAggregateOutputType | null
  }

  export type EmitenteMinAggregateOutputType = {
    id: string | null
    cod_dominio: string | null
    nome: string | null
    razao_social: string | null
    cnpj: string | null
    cpf: string | null
    IE: string | null
    contadorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmitenteMaxAggregateOutputType = {
    id: string | null
    cod_dominio: string | null
    nome: string | null
    razao_social: string | null
    cnpj: string | null
    cpf: string | null
    IE: string | null
    contadorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmitenteCountAggregateOutputType = {
    id: number
    cod_dominio: number
    nome: number
    razao_social: number
    cnpj: number
    cpf: number
    IE: number
    contadorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmitenteMinAggregateInputType = {
    id?: true
    cod_dominio?: true
    nome?: true
    razao_social?: true
    cnpj?: true
    cpf?: true
    IE?: true
    contadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmitenteMaxAggregateInputType = {
    id?: true
    cod_dominio?: true
    nome?: true
    razao_social?: true
    cnpj?: true
    cpf?: true
    IE?: true
    contadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmitenteCountAggregateInputType = {
    id?: true
    cod_dominio?: true
    nome?: true
    razao_social?: true
    cnpj?: true
    cpf?: true
    IE?: true
    contadorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmitenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emitente to aggregate.
     */
    where?: EmitenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emitentes to fetch.
     */
    orderBy?: EmitenteOrderByWithRelationInput | EmitenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmitenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emitentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emitentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emitentes
    **/
    _count?: true | EmitenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmitenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmitenteMaxAggregateInputType
  }

  export type GetEmitenteAggregateType<T extends EmitenteAggregateArgs> = {
        [P in keyof T & keyof AggregateEmitente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmitente[P]>
      : GetScalarType<T[P], AggregateEmitente[P]>
  }




  export type EmitenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmitenteWhereInput
    orderBy?: EmitenteOrderByWithAggregationInput | EmitenteOrderByWithAggregationInput[]
    by: EmitenteScalarFieldEnum[] | EmitenteScalarFieldEnum
    having?: EmitenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmitenteCountAggregateInputType | true
    _min?: EmitenteMinAggregateInputType
    _max?: EmitenteMaxAggregateInputType
  }

  export type EmitenteGroupByOutputType = {
    id: string
    cod_dominio: string | null
    nome: string
    razao_social: string
    cnpj: string | null
    cpf: string | null
    IE: string
    contadorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmitenteCountAggregateOutputType | null
    _min: EmitenteMinAggregateOutputType | null
    _max: EmitenteMaxAggregateOutputType | null
  }

  type GetEmitenteGroupByPayload<T extends EmitenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmitenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmitenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmitenteGroupByOutputType[P]>
            : GetScalarType<T[P], EmitenteGroupByOutputType[P]>
        }
      >
    >


  export type EmitenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cod_dominio?: boolean
    nome?: boolean
    razao_social?: boolean
    cnpj?: boolean
    cpf?: boolean
    IE?: boolean
    contadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enderecos?: boolean | Emitente$enderecosArgs<ExtArgs>
    contador?: boolean | Emitente$contadorArgs<ExtArgs>
    _count?: boolean | EmitenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emitente"]>


  export type EmitenteSelectScalar = {
    id?: boolean
    cod_dominio?: boolean
    nome?: boolean
    razao_social?: boolean
    cnpj?: boolean
    cpf?: boolean
    IE?: boolean
    contadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmitenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | Emitente$enderecosArgs<ExtArgs>
    contador?: boolean | Emitente$contadorArgs<ExtArgs>
    _count?: boolean | EmitenteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmitentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emitente"
    objects: {
      enderecos: Prisma.$EnderecoPayload<ExtArgs>[]
      contador: Prisma.$ContadorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cod_dominio: string | null
      nome: string
      razao_social: string
      cnpj: string | null
      cpf: string | null
      IE: string
      contadorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emitente"]>
    composites: {}
  }

  type EmitenteGetPayload<S extends boolean | null | undefined | EmitenteDefaultArgs> = $Result.GetResult<Prisma.$EmitentePayload, S>

  type EmitenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmitenteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmitenteCountAggregateInputType | true
    }

  export interface EmitenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emitente'], meta: { name: 'Emitente' } }
    /**
     * Find zero or one Emitente that matches the filter.
     * @param {EmitenteFindUniqueArgs} args - Arguments to find a Emitente
     * @example
     * // Get one Emitente
     * const emitente = await prisma.emitente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmitenteFindUniqueArgs>(args: SelectSubset<T, EmitenteFindUniqueArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Emitente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmitenteFindUniqueOrThrowArgs} args - Arguments to find a Emitente
     * @example
     * // Get one Emitente
     * const emitente = await prisma.emitente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmitenteFindUniqueOrThrowArgs>(args: SelectSubset<T, EmitenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Emitente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitenteFindFirstArgs} args - Arguments to find a Emitente
     * @example
     * // Get one Emitente
     * const emitente = await prisma.emitente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmitenteFindFirstArgs>(args?: SelectSubset<T, EmitenteFindFirstArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Emitente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitenteFindFirstOrThrowArgs} args - Arguments to find a Emitente
     * @example
     * // Get one Emitente
     * const emitente = await prisma.emitente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmitenteFindFirstOrThrowArgs>(args?: SelectSubset<T, EmitenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Emitentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emitentes
     * const emitentes = await prisma.emitente.findMany()
     * 
     * // Get first 10 Emitentes
     * const emitentes = await prisma.emitente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emitenteWithIdOnly = await prisma.emitente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmitenteFindManyArgs>(args?: SelectSubset<T, EmitenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Emitente.
     * @param {EmitenteCreateArgs} args - Arguments to create a Emitente.
     * @example
     * // Create one Emitente
     * const Emitente = await prisma.emitente.create({
     *   data: {
     *     // ... data to create a Emitente
     *   }
     * })
     * 
     */
    create<T extends EmitenteCreateArgs>(args: SelectSubset<T, EmitenteCreateArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Emitentes.
     * @param {EmitenteCreateManyArgs} args - Arguments to create many Emitentes.
     * @example
     * // Create many Emitentes
     * const emitente = await prisma.emitente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmitenteCreateManyArgs>(args?: SelectSubset<T, EmitenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Emitente.
     * @param {EmitenteDeleteArgs} args - Arguments to delete one Emitente.
     * @example
     * // Delete one Emitente
     * const Emitente = await prisma.emitente.delete({
     *   where: {
     *     // ... filter to delete one Emitente
     *   }
     * })
     * 
     */
    delete<T extends EmitenteDeleteArgs>(args: SelectSubset<T, EmitenteDeleteArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Emitente.
     * @param {EmitenteUpdateArgs} args - Arguments to update one Emitente.
     * @example
     * // Update one Emitente
     * const emitente = await prisma.emitente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmitenteUpdateArgs>(args: SelectSubset<T, EmitenteUpdateArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Emitentes.
     * @param {EmitenteDeleteManyArgs} args - Arguments to filter Emitentes to delete.
     * @example
     * // Delete a few Emitentes
     * const { count } = await prisma.emitente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmitenteDeleteManyArgs>(args?: SelectSubset<T, EmitenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emitentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emitentes
     * const emitente = await prisma.emitente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmitenteUpdateManyArgs>(args: SelectSubset<T, EmitenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Emitente.
     * @param {EmitenteUpsertArgs} args - Arguments to update or create a Emitente.
     * @example
     * // Update or create a Emitente
     * const emitente = await prisma.emitente.upsert({
     *   create: {
     *     // ... data to create a Emitente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emitente we want to update
     *   }
     * })
     */
    upsert<T extends EmitenteUpsertArgs>(args: SelectSubset<T, EmitenteUpsertArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Emitentes that matches the filter.
     * @param {EmitenteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const emitente = await prisma.emitente.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: EmitenteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Emitente.
     * @param {EmitenteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const emitente = await prisma.emitente.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EmitenteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Emitentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitenteCountArgs} args - Arguments to filter Emitentes to count.
     * @example
     * // Count the number of Emitentes
     * const count = await prisma.emitente.count({
     *   where: {
     *     // ... the filter for the Emitentes we want to count
     *   }
     * })
    **/
    count<T extends EmitenteCountArgs>(
      args?: Subset<T, EmitenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmitenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emitente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmitenteAggregateArgs>(args: Subset<T, EmitenteAggregateArgs>): Prisma.PrismaPromise<GetEmitenteAggregateType<T>>

    /**
     * Group by Emitente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitenteGroupByArgs} args - Group by arguments.
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
      T extends EmitenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmitenteGroupByArgs['orderBy'] }
        : { orderBy?: EmitenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmitenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmitenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emitente model
   */
  readonly fields: EmitenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emitente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmitenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enderecos<T extends Emitente$enderecosArgs<ExtArgs> = {}>(args?: Subset<T, Emitente$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany"> | Null>
    contador<T extends Emitente$contadorArgs<ExtArgs> = {}>(args?: Subset<T, Emitente$contadorArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Emitente model
   */ 
  interface EmitenteFieldRefs {
    readonly id: FieldRef<"Emitente", 'String'>
    readonly cod_dominio: FieldRef<"Emitente", 'String'>
    readonly nome: FieldRef<"Emitente", 'String'>
    readonly razao_social: FieldRef<"Emitente", 'String'>
    readonly cnpj: FieldRef<"Emitente", 'String'>
    readonly cpf: FieldRef<"Emitente", 'String'>
    readonly IE: FieldRef<"Emitente", 'String'>
    readonly contadorId: FieldRef<"Emitente", 'String'>
    readonly createdAt: FieldRef<"Emitente", 'DateTime'>
    readonly updatedAt: FieldRef<"Emitente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Emitente findUnique
   */
  export type EmitenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    /**
     * Filter, which Emitente to fetch.
     */
    where: EmitenteWhereUniqueInput
  }

  /**
   * Emitente findUniqueOrThrow
   */
  export type EmitenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    /**
     * Filter, which Emitente to fetch.
     */
    where: EmitenteWhereUniqueInput
  }

  /**
   * Emitente findFirst
   */
  export type EmitenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    /**
     * Filter, which Emitente to fetch.
     */
    where?: EmitenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emitentes to fetch.
     */
    orderBy?: EmitenteOrderByWithRelationInput | EmitenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emitentes.
     */
    cursor?: EmitenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emitentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emitentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emitentes.
     */
    distinct?: EmitenteScalarFieldEnum | EmitenteScalarFieldEnum[]
  }

  /**
   * Emitente findFirstOrThrow
   */
  export type EmitenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    /**
     * Filter, which Emitente to fetch.
     */
    where?: EmitenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emitentes to fetch.
     */
    orderBy?: EmitenteOrderByWithRelationInput | EmitenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emitentes.
     */
    cursor?: EmitenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emitentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emitentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emitentes.
     */
    distinct?: EmitenteScalarFieldEnum | EmitenteScalarFieldEnum[]
  }

  /**
   * Emitente findMany
   */
  export type EmitenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    /**
     * Filter, which Emitentes to fetch.
     */
    where?: EmitenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emitentes to fetch.
     */
    orderBy?: EmitenteOrderByWithRelationInput | EmitenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emitentes.
     */
    cursor?: EmitenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emitentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emitentes.
     */
    skip?: number
    distinct?: EmitenteScalarFieldEnum | EmitenteScalarFieldEnum[]
  }

  /**
   * Emitente create
   */
  export type EmitenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Emitente.
     */
    data: XOR<EmitenteCreateInput, EmitenteUncheckedCreateInput>
  }

  /**
   * Emitente createMany
   */
  export type EmitenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emitentes.
     */
    data: EmitenteCreateManyInput | EmitenteCreateManyInput[]
  }

  /**
   * Emitente update
   */
  export type EmitenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Emitente.
     */
    data: XOR<EmitenteUpdateInput, EmitenteUncheckedUpdateInput>
    /**
     * Choose, which Emitente to update.
     */
    where: EmitenteWhereUniqueInput
  }

  /**
   * Emitente updateMany
   */
  export type EmitenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emitentes.
     */
    data: XOR<EmitenteUpdateManyMutationInput, EmitenteUncheckedUpdateManyInput>
    /**
     * Filter which Emitentes to update
     */
    where?: EmitenteWhereInput
  }

  /**
   * Emitente upsert
   */
  export type EmitenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Emitente to update in case it exists.
     */
    where: EmitenteWhereUniqueInput
    /**
     * In case the Emitente found by the `where` argument doesn't exist, create a new Emitente with this data.
     */
    create: XOR<EmitenteCreateInput, EmitenteUncheckedCreateInput>
    /**
     * In case the Emitente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmitenteUpdateInput, EmitenteUncheckedUpdateInput>
  }

  /**
   * Emitente delete
   */
  export type EmitenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    /**
     * Filter which Emitente to delete.
     */
    where: EmitenteWhereUniqueInput
  }

  /**
   * Emitente deleteMany
   */
  export type EmitenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emitentes to delete
     */
    where?: EmitenteWhereInput
  }

  /**
   * Emitente findRaw
   */
  export type EmitenteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Emitente aggregateRaw
   */
  export type EmitenteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Emitente.enderecos
   */
  export type Emitente$enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    cursor?: EnderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Emitente.contador
   */
  export type Emitente$contadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Emitente without action
   */
  export type EmitenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
  }


  /**
   * Model Certificado
   */

  export type AggregateCertificado = {
    _count: CertificadoCountAggregateOutputType | null
    _min: CertificadoMinAggregateOutputType | null
    _max: CertificadoMaxAggregateOutputType | null
  }

  export type CertificadoMinAggregateOutputType = {
    id: string | null
    requerente: string | null
    validade: Date | null
    fileBase64: string | null
    contadorId: string | null
    createdAt: Date | null
  }

  export type CertificadoMaxAggregateOutputType = {
    id: string | null
    requerente: string | null
    validade: Date | null
    fileBase64: string | null
    contadorId: string | null
    createdAt: Date | null
  }

  export type CertificadoCountAggregateOutputType = {
    id: number
    requerente: number
    validade: number
    fileBase64: number
    contadorId: number
    createdAt: number
    _all: number
  }


  export type CertificadoMinAggregateInputType = {
    id?: true
    requerente?: true
    validade?: true
    fileBase64?: true
    contadorId?: true
    createdAt?: true
  }

  export type CertificadoMaxAggregateInputType = {
    id?: true
    requerente?: true
    validade?: true
    fileBase64?: true
    contadorId?: true
    createdAt?: true
  }

  export type CertificadoCountAggregateInputType = {
    id?: true
    requerente?: true
    validade?: true
    fileBase64?: true
    contadorId?: true
    createdAt?: true
    _all?: true
  }

  export type CertificadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificado to aggregate.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificados
    **/
    _count?: true | CertificadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificadoMaxAggregateInputType
  }

  export type GetCertificadoAggregateType<T extends CertificadoAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificado[P]>
      : GetScalarType<T[P], AggregateCertificado[P]>
  }




  export type CertificadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithAggregationInput | CertificadoOrderByWithAggregationInput[]
    by: CertificadoScalarFieldEnum[] | CertificadoScalarFieldEnum
    having?: CertificadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificadoCountAggregateInputType | true
    _min?: CertificadoMinAggregateInputType
    _max?: CertificadoMaxAggregateInputType
  }

  export type CertificadoGroupByOutputType = {
    id: string
    requerente: string | null
    validade: Date | null
    fileBase64: string | null
    contadorId: string | null
    createdAt: Date
    _count: CertificadoCountAggregateOutputType | null
    _min: CertificadoMinAggregateOutputType | null
    _max: CertificadoMaxAggregateOutputType | null
  }

  type GetCertificadoGroupByPayload<T extends CertificadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificadoGroupByOutputType[P]>
            : GetScalarType<T[P], CertificadoGroupByOutputType[P]>
        }
      >
    >


  export type CertificadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requerente?: boolean
    validade?: boolean
    fileBase64?: boolean
    contadorId?: boolean
    createdAt?: boolean
    contador?: boolean | Certificado$contadorArgs<ExtArgs>
  }, ExtArgs["result"]["certificado"]>


  export type CertificadoSelectScalar = {
    id?: boolean
    requerente?: boolean
    validade?: boolean
    fileBase64?: boolean
    contadorId?: boolean
    createdAt?: boolean
  }

  export type CertificadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contador?: boolean | Certificado$contadorArgs<ExtArgs>
  }

  export type $CertificadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificado"
    objects: {
      contador: Prisma.$ContadorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requerente: string | null
      validade: Date | null
      fileBase64: string | null
      contadorId: string | null
      createdAt: Date
    }, ExtArgs["result"]["certificado"]>
    composites: {}
  }

  type CertificadoGetPayload<S extends boolean | null | undefined | CertificadoDefaultArgs> = $Result.GetResult<Prisma.$CertificadoPayload, S>

  type CertificadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CertificadoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CertificadoCountAggregateInputType | true
    }

  export interface CertificadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificado'], meta: { name: 'Certificado' } }
    /**
     * Find zero or one Certificado that matches the filter.
     * @param {CertificadoFindUniqueArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificadoFindUniqueArgs>(args: SelectSubset<T, CertificadoFindUniqueArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Certificado that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CertificadoFindUniqueOrThrowArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificadoFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Certificado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindFirstArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificadoFindFirstArgs>(args?: SelectSubset<T, CertificadoFindFirstArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Certificado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindFirstOrThrowArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificadoFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Certificados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificados
     * const certificados = await prisma.certificado.findMany()
     * 
     * // Get first 10 Certificados
     * const certificados = await prisma.certificado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificadoWithIdOnly = await prisma.certificado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificadoFindManyArgs>(args?: SelectSubset<T, CertificadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Certificado.
     * @param {CertificadoCreateArgs} args - Arguments to create a Certificado.
     * @example
     * // Create one Certificado
     * const Certificado = await prisma.certificado.create({
     *   data: {
     *     // ... data to create a Certificado
     *   }
     * })
     * 
     */
    create<T extends CertificadoCreateArgs>(args: SelectSubset<T, CertificadoCreateArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Certificados.
     * @param {CertificadoCreateManyArgs} args - Arguments to create many Certificados.
     * @example
     * // Create many Certificados
     * const certificado = await prisma.certificado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificadoCreateManyArgs>(args?: SelectSubset<T, CertificadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Certificado.
     * @param {CertificadoDeleteArgs} args - Arguments to delete one Certificado.
     * @example
     * // Delete one Certificado
     * const Certificado = await prisma.certificado.delete({
     *   where: {
     *     // ... filter to delete one Certificado
     *   }
     * })
     * 
     */
    delete<T extends CertificadoDeleteArgs>(args: SelectSubset<T, CertificadoDeleteArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Certificado.
     * @param {CertificadoUpdateArgs} args - Arguments to update one Certificado.
     * @example
     * // Update one Certificado
     * const certificado = await prisma.certificado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificadoUpdateArgs>(args: SelectSubset<T, CertificadoUpdateArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Certificados.
     * @param {CertificadoDeleteManyArgs} args - Arguments to filter Certificados to delete.
     * @example
     * // Delete a few Certificados
     * const { count } = await prisma.certificado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificadoDeleteManyArgs>(args?: SelectSubset<T, CertificadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificados
     * const certificado = await prisma.certificado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificadoUpdateManyArgs>(args: SelectSubset<T, CertificadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certificado.
     * @param {CertificadoUpsertArgs} args - Arguments to update or create a Certificado.
     * @example
     * // Update or create a Certificado
     * const certificado = await prisma.certificado.upsert({
     *   create: {
     *     // ... data to create a Certificado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificado we want to update
     *   }
     * })
     */
    upsert<T extends CertificadoUpsertArgs>(args: SelectSubset<T, CertificadoUpsertArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Certificados that matches the filter.
     * @param {CertificadoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const certificado = await prisma.certificado.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: CertificadoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Certificado.
     * @param {CertificadoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const certificado = await prisma.certificado.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CertificadoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoCountArgs} args - Arguments to filter Certificados to count.
     * @example
     * // Count the number of Certificados
     * const count = await prisma.certificado.count({
     *   where: {
     *     // ... the filter for the Certificados we want to count
     *   }
     * })
    **/
    count<T extends CertificadoCountArgs>(
      args?: Subset<T, CertificadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificadoAggregateArgs>(args: Subset<T, CertificadoAggregateArgs>): Prisma.PrismaPromise<GetCertificadoAggregateType<T>>

    /**
     * Group by Certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoGroupByArgs} args - Group by arguments.
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
      T extends CertificadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificadoGroupByArgs['orderBy'] }
        : { orderBy?: CertificadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificado model
   */
  readonly fields: CertificadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contador<T extends Certificado$contadorArgs<ExtArgs> = {}>(args?: Subset<T, Certificado$contadorArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Certificado model
   */ 
  interface CertificadoFieldRefs {
    readonly id: FieldRef<"Certificado", 'String'>
    readonly requerente: FieldRef<"Certificado", 'String'>
    readonly validade: FieldRef<"Certificado", 'DateTime'>
    readonly fileBase64: FieldRef<"Certificado", 'String'>
    readonly contadorId: FieldRef<"Certificado", 'String'>
    readonly createdAt: FieldRef<"Certificado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificado findUnique
   */
  export type CertificadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado findUniqueOrThrow
   */
  export type CertificadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado findFirst
   */
  export type CertificadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificados.
     */
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado findFirstOrThrow
   */
  export type CertificadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificados.
     */
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado findMany
   */
  export type CertificadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificados to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado create
   */
  export type CertificadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificado.
     */
    data?: XOR<CertificadoCreateInput, CertificadoUncheckedCreateInput>
  }

  /**
   * Certificado createMany
   */
  export type CertificadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificados.
     */
    data: CertificadoCreateManyInput | CertificadoCreateManyInput[]
  }

  /**
   * Certificado update
   */
  export type CertificadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificado.
     */
    data: XOR<CertificadoUpdateInput, CertificadoUncheckedUpdateInput>
    /**
     * Choose, which Certificado to update.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado updateMany
   */
  export type CertificadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificados.
     */
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyInput>
    /**
     * Filter which Certificados to update
     */
    where?: CertificadoWhereInput
  }

  /**
   * Certificado upsert
   */
  export type CertificadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificado to update in case it exists.
     */
    where: CertificadoWhereUniqueInput
    /**
     * In case the Certificado found by the `where` argument doesn't exist, create a new Certificado with this data.
     */
    create: XOR<CertificadoCreateInput, CertificadoUncheckedCreateInput>
    /**
     * In case the Certificado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificadoUpdateInput, CertificadoUncheckedUpdateInput>
  }

  /**
   * Certificado delete
   */
  export type CertificadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter which Certificado to delete.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado deleteMany
   */
  export type CertificadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificados to delete
     */
    where?: CertificadoWhereInput
  }

  /**
   * Certificado findRaw
   */
  export type CertificadoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Certificado aggregateRaw
   */
  export type CertificadoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Certificado.contador
   */
  export type Certificado$contadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Certificado without action
   */
  export type CertificadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
  }


  /**
   * Model Endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    logradouro: string | null
    nro: string | null
    complemento: string | null
    bairro: string | null
    cep: string | null
    nome_cidade: string | null
    codigoIBGEcidade: string | null
    nome_estado: string | null
    uf: string | null
    codigoIBGEestado: string | null
    contadorId: string | null
    emitenteId: string | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    logradouro: string | null
    nro: string | null
    complemento: string | null
    bairro: string | null
    cep: string | null
    nome_cidade: string | null
    codigoIBGEcidade: string | null
    nome_estado: string | null
    uf: string | null
    codigoIBGEestado: string | null
    contadorId: string | null
    emitenteId: string | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    tipo: number
    logradouro: number
    nro: number
    complemento: number
    bairro: number
    cep: number
    nome_cidade: number
    codigoIBGEcidade: number
    nome_estado: number
    uf: number
    codigoIBGEestado: number
    contadorId: number
    emitenteId: number
    _all: number
  }


  export type EnderecoMinAggregateInputType = {
    id?: true
    tipo?: true
    logradouro?: true
    nro?: true
    complemento?: true
    bairro?: true
    cep?: true
    nome_cidade?: true
    codigoIBGEcidade?: true
    nome_estado?: true
    uf?: true
    codigoIBGEestado?: true
    contadorId?: true
    emitenteId?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    tipo?: true
    logradouro?: true
    nro?: true
    complemento?: true
    bairro?: true
    cep?: true
    nome_cidade?: true
    codigoIBGEcidade?: true
    nome_estado?: true
    uf?: true
    codigoIBGEestado?: true
    contadorId?: true
    emitenteId?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    tipo?: true
    logradouro?: true
    nro?: true
    complemento?: true
    bairro?: true
    cep?: true
    nome_cidade?: true
    codigoIBGEcidade?: true
    nome_estado?: true
    uf?: true
    codigoIBGEestado?: true
    contadorId?: true
    emitenteId?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endereco to aggregate.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithAggregationInput | EnderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: string
    tipo: string
    logradouro: string
    nro: string
    complemento: string | null
    bairro: string
    cep: string
    nome_cidade: string
    codigoIBGEcidade: string
    nome_estado: string
    uf: string
    codigoIBGEestado: string
    contadorId: string | null
    emitenteId: string | null
    _count: EnderecoCountAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    logradouro?: boolean
    nro?: boolean
    complemento?: boolean
    bairro?: boolean
    cep?: boolean
    nome_cidade?: boolean
    codigoIBGEcidade?: boolean
    nome_estado?: boolean
    uf?: boolean
    codigoIBGEestado?: boolean
    contadorId?: boolean
    emitenteId?: boolean
    contador?: boolean | Endereco$contadorArgs<ExtArgs>
    emitente?: boolean | Endereco$emitenteArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>


  export type EnderecoSelectScalar = {
    id?: boolean
    tipo?: boolean
    logradouro?: boolean
    nro?: boolean
    complemento?: boolean
    bairro?: boolean
    cep?: boolean
    nome_cidade?: boolean
    codigoIBGEcidade?: boolean
    nome_estado?: boolean
    uf?: boolean
    codigoIBGEestado?: boolean
    contadorId?: boolean
    emitenteId?: boolean
  }

  export type EnderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contador?: boolean | Endereco$contadorArgs<ExtArgs>
    emitente?: boolean | Endereco$emitenteArgs<ExtArgs>
  }

  export type $EnderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endereco"
    objects: {
      contador: Prisma.$ContadorPayload<ExtArgs> | null
      emitente: Prisma.$EmitentePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      logradouro: string
      nro: string
      complemento: string | null
      bairro: string
      cep: string
      nome_cidade: string
      codigoIBGEcidade: string
      nome_estado: string
      uf: string
      codigoIBGEestado: string
      contadorId: string | null
      emitenteId: string | null
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>

  type EnderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnderecoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface EnderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endereco'], meta: { name: 'Endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoFindUniqueArgs>(args: SelectSubset<T, EnderecoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EnderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoFindFirstArgs>(args?: SelectSubset<T, EnderecoFindFirstArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoFindManyArgs>(args?: SelectSubset<T, EnderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends EnderecoCreateArgs>(args: SelectSubset<T, EnderecoCreateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Enderecos.
     * @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoCreateManyArgs>(args?: SelectSubset<T, EnderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoDeleteArgs>(args: SelectSubset<T, EnderecoDeleteArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUpdateArgs>(args: SelectSubset<T, EnderecoUpdateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoDeleteManyArgs>(args?: SelectSubset<T, EnderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUpdateManyArgs>(args: SelectSubset<T, EnderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUpsertArgs>(args: SelectSubset<T, EnderecoUpsertArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Enderecos that matches the filter.
     * @param {EnderecoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const endereco = await prisma.endereco.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: EnderecoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Endereco.
     * @param {EnderecoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const endereco = await prisma.endereco.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EnderecoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
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
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endereco model
   */
  readonly fields: EnderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contador<T extends Endereco$contadorArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$contadorArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    emitente<T extends Endereco$emitenteArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$emitenteArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Endereco model
   */ 
  interface EnderecoFieldRefs {
    readonly id: FieldRef<"Endereco", 'String'>
    readonly tipo: FieldRef<"Endereco", 'String'>
    readonly logradouro: FieldRef<"Endereco", 'String'>
    readonly nro: FieldRef<"Endereco", 'String'>
    readonly complemento: FieldRef<"Endereco", 'String'>
    readonly bairro: FieldRef<"Endereco", 'String'>
    readonly cep: FieldRef<"Endereco", 'String'>
    readonly nome_cidade: FieldRef<"Endereco", 'String'>
    readonly codigoIBGEcidade: FieldRef<"Endereco", 'String'>
    readonly nome_estado: FieldRef<"Endereco", 'String'>
    readonly uf: FieldRef<"Endereco", 'String'>
    readonly codigoIBGEestado: FieldRef<"Endereco", 'String'>
    readonly contadorId: FieldRef<"Endereco", 'String'>
    readonly emitenteId: FieldRef<"Endereco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findUniqueOrThrow
   */
  export type EnderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findFirstOrThrow
   */
  export type EnderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Enderecos to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco create
   */
  export type EnderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Endereco.
     */
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }

  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
  }

  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Endereco.
     */
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
  }

  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     */
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     */
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }

  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter which Endereco to delete.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enderecos to delete
     */
    where?: EnderecoWhereInput
  }

  /**
   * Endereco findRaw
   */
  export type EnderecoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Endereco aggregateRaw
   */
  export type EnderecoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Endereco.contador
   */
  export type Endereco$contadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Endereco.emitente
   */
  export type Endereco$emitenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitente
     */
    select?: EmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitenteInclude<ExtArgs> | null
    where?: EmitenteWhereInput
  }

  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
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


  export const EmitenteScalarFieldEnum: {
    id: 'id',
    cod_dominio: 'cod_dominio',
    nome: 'nome',
    razao_social: 'razao_social',
    cnpj: 'cnpj',
    cpf: 'cpf',
    IE: 'IE',
    contadorId: 'contadorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmitenteScalarFieldEnum = (typeof EmitenteScalarFieldEnum)[keyof typeof EmitenteScalarFieldEnum]


  export const CertificadoScalarFieldEnum: {
    id: 'id',
    requerente: 'requerente',
    validade: 'validade',
    fileBase64: 'fileBase64',
    contadorId: 'contadorId',
    createdAt: 'createdAt'
  };

  export type CertificadoScalarFieldEnum = (typeof CertificadoScalarFieldEnum)[keyof typeof CertificadoScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    logradouro: 'logradouro',
    nro: 'nro',
    complemento: 'complemento',
    bairro: 'bairro',
    cep: 'cep',
    nome_cidade: 'nome_cidade',
    codigoIBGEcidade: 'codigoIBGEcidade',
    nome_estado: 'nome_estado',
    uf: 'uf',
    codigoIBGEestado: 'codigoIBGEestado',
    contadorId: 'contadorId',
    emitenteId: 'emitenteId'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


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
    Emitentes?: EmitenteListRelationFilter
    endereco?: XOR<EnderecoNullableRelationFilter, EnderecoWhereInput> | null
    certificados?: CertificadoListRelationFilter
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
    Emitentes?: EmitenteOrderByRelationAggregateInput
    endereco?: EnderecoOrderByWithRelationInput
    certificados?: CertificadoOrderByRelationAggregateInput
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
    Emitentes?: EmitenteListRelationFilter
    endereco?: XOR<EnderecoNullableRelationFilter, EnderecoWhereInput> | null
    certificados?: CertificadoListRelationFilter
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

  export type EmitenteWhereInput = {
    AND?: EmitenteWhereInput | EmitenteWhereInput[]
    OR?: EmitenteWhereInput[]
    NOT?: EmitenteWhereInput | EmitenteWhereInput[]
    id?: StringFilter<"Emitente"> | string
    cod_dominio?: StringNullableFilter<"Emitente"> | string | null
    nome?: StringFilter<"Emitente"> | string
    razao_social?: StringFilter<"Emitente"> | string
    cnpj?: StringNullableFilter<"Emitente"> | string | null
    cpf?: StringNullableFilter<"Emitente"> | string | null
    IE?: StringFilter<"Emitente"> | string
    contadorId?: StringNullableFilter<"Emitente"> | string | null
    createdAt?: DateTimeFilter<"Emitente"> | Date | string
    updatedAt?: DateTimeFilter<"Emitente"> | Date | string
    enderecos?: EnderecoListRelationFilter
    contador?: XOR<ContadorNullableRelationFilter, ContadorWhereInput> | null
  }

  export type EmitenteOrderByWithRelationInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    cpf?: SortOrder
    IE?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enderecos?: EnderecoOrderByRelationAggregateInput
    contador?: ContadorOrderByWithRelationInput
  }

  export type EmitenteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj_IE?: EmitenteCnpjIECompoundUniqueInput
    cpf_IE?: EmitenteCpfIECompoundUniqueInput
    AND?: EmitenteWhereInput | EmitenteWhereInput[]
    OR?: EmitenteWhereInput[]
    NOT?: EmitenteWhereInput | EmitenteWhereInput[]
    cod_dominio?: StringNullableFilter<"Emitente"> | string | null
    nome?: StringFilter<"Emitente"> | string
    razao_social?: StringFilter<"Emitente"> | string
    cnpj?: StringNullableFilter<"Emitente"> | string | null
    cpf?: StringNullableFilter<"Emitente"> | string | null
    IE?: StringFilter<"Emitente"> | string
    contadorId?: StringNullableFilter<"Emitente"> | string | null
    createdAt?: DateTimeFilter<"Emitente"> | Date | string
    updatedAt?: DateTimeFilter<"Emitente"> | Date | string
    enderecos?: EnderecoListRelationFilter
    contador?: XOR<ContadorNullableRelationFilter, ContadorWhereInput> | null
  }, "id" | "cnpj_IE" | "cpf_IE">

  export type EmitenteOrderByWithAggregationInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    cpf?: SortOrder
    IE?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmitenteCountOrderByAggregateInput
    _max?: EmitenteMaxOrderByAggregateInput
    _min?: EmitenteMinOrderByAggregateInput
  }

  export type EmitenteScalarWhereWithAggregatesInput = {
    AND?: EmitenteScalarWhereWithAggregatesInput | EmitenteScalarWhereWithAggregatesInput[]
    OR?: EmitenteScalarWhereWithAggregatesInput[]
    NOT?: EmitenteScalarWhereWithAggregatesInput | EmitenteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Emitente"> | string
    cod_dominio?: StringNullableWithAggregatesFilter<"Emitente"> | string | null
    nome?: StringWithAggregatesFilter<"Emitente"> | string
    razao_social?: StringWithAggregatesFilter<"Emitente"> | string
    cnpj?: StringNullableWithAggregatesFilter<"Emitente"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"Emitente"> | string | null
    IE?: StringWithAggregatesFilter<"Emitente"> | string
    contadorId?: StringNullableWithAggregatesFilter<"Emitente"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Emitente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Emitente"> | Date | string
  }

  export type CertificadoWhereInput = {
    AND?: CertificadoWhereInput | CertificadoWhereInput[]
    OR?: CertificadoWhereInput[]
    NOT?: CertificadoWhereInput | CertificadoWhereInput[]
    id?: StringFilter<"Certificado"> | string
    requerente?: StringNullableFilter<"Certificado"> | string | null
    validade?: DateTimeNullableFilter<"Certificado"> | Date | string | null
    fileBase64?: StringNullableFilter<"Certificado"> | string | null
    contadorId?: StringNullableFilter<"Certificado"> | string | null
    createdAt?: DateTimeFilter<"Certificado"> | Date | string
    contador?: XOR<ContadorNullableRelationFilter, ContadorWhereInput> | null
  }

  export type CertificadoOrderByWithRelationInput = {
    id?: SortOrder
    requerente?: SortOrder
    validade?: SortOrder
    fileBase64?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    contador?: ContadorOrderByWithRelationInput
  }

  export type CertificadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificadoWhereInput | CertificadoWhereInput[]
    OR?: CertificadoWhereInput[]
    NOT?: CertificadoWhereInput | CertificadoWhereInput[]
    requerente?: StringNullableFilter<"Certificado"> | string | null
    validade?: DateTimeNullableFilter<"Certificado"> | Date | string | null
    fileBase64?: StringNullableFilter<"Certificado"> | string | null
    contadorId?: StringNullableFilter<"Certificado"> | string | null
    createdAt?: DateTimeFilter<"Certificado"> | Date | string
    contador?: XOR<ContadorNullableRelationFilter, ContadorWhereInput> | null
  }, "id">

  export type CertificadoOrderByWithAggregationInput = {
    id?: SortOrder
    requerente?: SortOrder
    validade?: SortOrder
    fileBase64?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    _count?: CertificadoCountOrderByAggregateInput
    _max?: CertificadoMaxOrderByAggregateInput
    _min?: CertificadoMinOrderByAggregateInput
  }

  export type CertificadoScalarWhereWithAggregatesInput = {
    AND?: CertificadoScalarWhereWithAggregatesInput | CertificadoScalarWhereWithAggregatesInput[]
    OR?: CertificadoScalarWhereWithAggregatesInput[]
    NOT?: CertificadoScalarWhereWithAggregatesInput | CertificadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificado"> | string
    requerente?: StringNullableWithAggregatesFilter<"Certificado"> | string | null
    validade?: DateTimeNullableWithAggregatesFilter<"Certificado"> | Date | string | null
    fileBase64?: StringNullableWithAggregatesFilter<"Certificado"> | string | null
    contadorId?: StringNullableWithAggregatesFilter<"Certificado"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Certificado"> | Date | string
  }

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    id?: StringFilter<"Endereco"> | string
    tipo?: StringFilter<"Endereco"> | string
    logradouro?: StringFilter<"Endereco"> | string
    nro?: StringFilter<"Endereco"> | string
    complemento?: StringNullableFilter<"Endereco"> | string | null
    bairro?: StringFilter<"Endereco"> | string
    cep?: StringFilter<"Endereco"> | string
    nome_cidade?: StringFilter<"Endereco"> | string
    codigoIBGEcidade?: StringFilter<"Endereco"> | string
    nome_estado?: StringFilter<"Endereco"> | string
    uf?: StringFilter<"Endereco"> | string
    codigoIBGEestado?: StringFilter<"Endereco"> | string
    contadorId?: StringNullableFilter<"Endereco"> | string | null
    emitenteId?: StringNullableFilter<"Endereco"> | string | null
    contador?: XOR<ContadorNullableRelationFilter, ContadorWhereInput> | null
    emitente?: XOR<EmitenteNullableRelationFilter, EmitenteWhereInput> | null
  }

  export type EnderecoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    logradouro?: SortOrder
    nro?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    nome_cidade?: SortOrder
    codigoIBGEcidade?: SortOrder
    nome_estado?: SortOrder
    uf?: SortOrder
    codigoIBGEestado?: SortOrder
    contadorId?: SortOrder
    emitenteId?: SortOrder
    contador?: ContadorOrderByWithRelationInput
    emitente?: EmitenteOrderByWithRelationInput
  }

  export type EnderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contadorId?: string
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    tipo?: StringFilter<"Endereco"> | string
    logradouro?: StringFilter<"Endereco"> | string
    nro?: StringFilter<"Endereco"> | string
    complemento?: StringNullableFilter<"Endereco"> | string | null
    bairro?: StringFilter<"Endereco"> | string
    cep?: StringFilter<"Endereco"> | string
    nome_cidade?: StringFilter<"Endereco"> | string
    codigoIBGEcidade?: StringFilter<"Endereco"> | string
    nome_estado?: StringFilter<"Endereco"> | string
    uf?: StringFilter<"Endereco"> | string
    codigoIBGEestado?: StringFilter<"Endereco"> | string
    emitenteId?: StringNullableFilter<"Endereco"> | string | null
    contador?: XOR<ContadorNullableRelationFilter, ContadorWhereInput> | null
    emitente?: XOR<EmitenteNullableRelationFilter, EmitenteWhereInput> | null
  }, "id" | "contadorId">

  export type EnderecoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    logradouro?: SortOrder
    nro?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    nome_cidade?: SortOrder
    codigoIBGEcidade?: SortOrder
    nome_estado?: SortOrder
    uf?: SortOrder
    codigoIBGEestado?: SortOrder
    contadorId?: SortOrder
    emitenteId?: SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    OR?: EnderecoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Endereco"> | string
    tipo?: StringWithAggregatesFilter<"Endereco"> | string
    logradouro?: StringWithAggregatesFilter<"Endereco"> | string
    nro?: StringWithAggregatesFilter<"Endereco"> | string
    complemento?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    bairro?: StringWithAggregatesFilter<"Endereco"> | string
    cep?: StringWithAggregatesFilter<"Endereco"> | string
    nome_cidade?: StringWithAggregatesFilter<"Endereco"> | string
    codigoIBGEcidade?: StringWithAggregatesFilter<"Endereco"> | string
    nome_estado?: StringWithAggregatesFilter<"Endereco"> | string
    uf?: StringWithAggregatesFilter<"Endereco"> | string
    codigoIBGEestado?: StringWithAggregatesFilter<"Endereco"> | string
    contadorId?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    emitenteId?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
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
    Emitentes?: EmitenteCreateNestedManyWithoutContadorInput
    endereco?: EnderecoCreateNestedOneWithoutContadorInput
    certificados?: CertificadoCreateNestedManyWithoutContadorInput
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
    Emitentes?: EmitenteUncheckedCreateNestedManyWithoutContadorInput
    endereco?: EnderecoUncheckedCreateNestedOneWithoutContadorInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutContadorInput
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
    Emitentes?: EmitenteUpdateManyWithoutContadorNestedInput
    endereco?: EnderecoUpdateOneWithoutContadorNestedInput
    certificados?: CertificadoUpdateManyWithoutContadorNestedInput
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
    Emitentes?: EmitenteUncheckedUpdateManyWithoutContadorNestedInput
    endereco?: EnderecoUncheckedUpdateOneWithoutContadorNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutContadorNestedInput
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

  export type EmitenteCreateInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    IE: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: EnderecoCreateNestedManyWithoutEmitenteInput
    contador?: ContadorCreateNestedOneWithoutEmitentesInput
  }

  export type EmitenteUncheckedCreateInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    IE: string
    contadorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutEmitenteInput
  }

  export type EmitenteUpdateInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUpdateManyWithoutEmitenteNestedInput
    contador?: ContadorUpdateOneWithoutEmitentesNestedInput
  }

  export type EmitenteUncheckedUpdateInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: StringFieldUpdateOperationsInput | string
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUncheckedUpdateManyWithoutEmitenteNestedInput
  }

  export type EmitenteCreateManyInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    IE: string
    contadorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmitenteUpdateManyMutationInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmitenteUncheckedUpdateManyInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: StringFieldUpdateOperationsInput | string
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoCreateInput = {
    id?: string
    requerente?: string | null
    validade?: Date | string | null
    fileBase64?: string | null
    createdAt?: Date | string
    contador?: ContadorCreateNestedOneWithoutCertificadosInput
  }

  export type CertificadoUncheckedCreateInput = {
    id?: string
    requerente?: string | null
    validade?: Date | string | null
    fileBase64?: string | null
    contadorId?: string | null
    createdAt?: Date | string
  }

  export type CertificadoUpdateInput = {
    requerente?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileBase64?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: ContadorUpdateOneWithoutCertificadosNestedInput
  }

  export type CertificadoUncheckedUpdateInput = {
    requerente?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileBase64?: NullableStringFieldUpdateOperationsInput | string | null
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoCreateManyInput = {
    id?: string
    requerente?: string | null
    validade?: Date | string | null
    fileBase64?: string | null
    contadorId?: string | null
    createdAt?: Date | string
  }

  export type CertificadoUpdateManyMutationInput = {
    requerente?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileBase64?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyInput = {
    requerente?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileBase64?: NullableStringFieldUpdateOperationsInput | string | null
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoCreateInput = {
    id?: string
    tipo?: string
    logradouro: string
    nro: string
    complemento?: string | null
    bairro: string
    cep: string
    nome_cidade: string
    codigoIBGEcidade: string
    nome_estado: string
    uf: string
    codigoIBGEestado: string
    contador?: ContadorCreateNestedOneWithoutEnderecoInput
    emitente?: EmitenteCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoUncheckedCreateInput = {
    id?: string
    tipo?: string
    logradouro: string
    nro: string
    complemento?: string | null
    bairro: string
    cep: string
    nome_cidade: string
    codigoIBGEcidade: string
    nome_estado: string
    uf: string
    codigoIBGEestado: string
    contadorId?: string | null
    emitenteId?: string | null
  }

  export type EnderecoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    nome_cidade?: StringFieldUpdateOperationsInput | string
    codigoIBGEcidade?: StringFieldUpdateOperationsInput | string
    nome_estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    codigoIBGEestado?: StringFieldUpdateOperationsInput | string
    contador?: ContadorUpdateOneWithoutEnderecoNestedInput
    emitente?: EmitenteUpdateOneWithoutEnderecosNestedInput
  }

  export type EnderecoUncheckedUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    nome_cidade?: StringFieldUpdateOperationsInput | string
    codigoIBGEcidade?: StringFieldUpdateOperationsInput | string
    nome_estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    codigoIBGEestado?: StringFieldUpdateOperationsInput | string
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
    emitenteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoCreateManyInput = {
    id?: string
    tipo?: string
    logradouro: string
    nro: string
    complemento?: string | null
    bairro: string
    cep: string
    nome_cidade: string
    codigoIBGEcidade: string
    nome_estado: string
    uf: string
    codigoIBGEestado: string
    contadorId?: string | null
    emitenteId?: string | null
  }

  export type EnderecoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    nome_cidade?: StringFieldUpdateOperationsInput | string
    codigoIBGEcidade?: StringFieldUpdateOperationsInput | string
    nome_estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    codigoIBGEestado?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUncheckedUpdateManyInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    nome_cidade?: StringFieldUpdateOperationsInput | string
    codigoIBGEcidade?: StringFieldUpdateOperationsInput | string
    nome_estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    codigoIBGEestado?: StringFieldUpdateOperationsInput | string
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
    emitenteId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EmitenteListRelationFilter = {
    every?: EmitenteWhereInput
    some?: EmitenteWhereInput
    none?: EmitenteWhereInput
  }

  export type EnderecoNullableRelationFilter = {
    is?: EnderecoWhereInput | null
    isNot?: EnderecoWhereInput | null
  }

  export type CertificadoListRelationFilter = {
    every?: CertificadoWhereInput
    some?: CertificadoWhereInput
    none?: CertificadoWhereInput
  }

  export type EmitenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificadoOrderByRelationAggregateInput = {
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

  export type EnderecoListRelationFilter = {
    every?: EnderecoWhereInput
    some?: EnderecoWhereInput
    none?: EnderecoWhereInput
  }

  export type ContadorNullableRelationFilter = {
    is?: ContadorWhereInput | null
    isNot?: ContadorWhereInput | null
  }

  export type EnderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmitenteCnpjIECompoundUniqueInput = {
    cnpj: string
    IE: string
  }

  export type EmitenteCpfIECompoundUniqueInput = {
    cpf: string
    IE: string
  }

  export type EmitenteCountOrderByAggregateInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    cpf?: SortOrder
    IE?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmitenteMaxOrderByAggregateInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    cpf?: SortOrder
    IE?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmitenteMinOrderByAggregateInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    cpf?: SortOrder
    IE?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type CertificadoCountOrderByAggregateInput = {
    id?: SortOrder
    requerente?: SortOrder
    validade?: SortOrder
    fileBase64?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
  }

  export type CertificadoMaxOrderByAggregateInput = {
    id?: SortOrder
    requerente?: SortOrder
    validade?: SortOrder
    fileBase64?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
  }

  export type CertificadoMinOrderByAggregateInput = {
    id?: SortOrder
    requerente?: SortOrder
    validade?: SortOrder
    fileBase64?: SortOrder
    contadorId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EmitenteNullableRelationFilter = {
    is?: EmitenteWhereInput | null
    isNot?: EmitenteWhereInput | null
  }

  export type EnderecoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    logradouro?: SortOrder
    nro?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    nome_cidade?: SortOrder
    codigoIBGEcidade?: SortOrder
    nome_estado?: SortOrder
    uf?: SortOrder
    codigoIBGEestado?: SortOrder
    contadorId?: SortOrder
    emitenteId?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    logradouro?: SortOrder
    nro?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    nome_cidade?: SortOrder
    codigoIBGEcidade?: SortOrder
    nome_estado?: SortOrder
    uf?: SortOrder
    codigoIBGEestado?: SortOrder
    contadorId?: SortOrder
    emitenteId?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    logradouro?: SortOrder
    nro?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    nome_cidade?: SortOrder
    codigoIBGEcidade?: SortOrder
    nome_estado?: SortOrder
    uf?: SortOrder
    codigoIBGEestado?: SortOrder
    contadorId?: SortOrder
    emitenteId?: SortOrder
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

  export type EmitenteCreateNestedManyWithoutContadorInput = {
    create?: XOR<EmitenteCreateWithoutContadorInput, EmitenteUncheckedCreateWithoutContadorInput> | EmitenteCreateWithoutContadorInput[] | EmitenteUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: EmitenteCreateOrConnectWithoutContadorInput | EmitenteCreateOrConnectWithoutContadorInput[]
    createMany?: EmitenteCreateManyContadorInputEnvelope
    connect?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
  }

  export type EnderecoCreateNestedOneWithoutContadorInput = {
    create?: XOR<EnderecoCreateWithoutContadorInput, EnderecoUncheckedCreateWithoutContadorInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutContadorInput
    connect?: EnderecoWhereUniqueInput
  }

  export type CertificadoCreateNestedManyWithoutContadorInput = {
    create?: XOR<CertificadoCreateWithoutContadorInput, CertificadoUncheckedCreateWithoutContadorInput> | CertificadoCreateWithoutContadorInput[] | CertificadoUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutContadorInput | CertificadoCreateOrConnectWithoutContadorInput[]
    createMany?: CertificadoCreateManyContadorInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type UserContadorUncheckedCreateNestedManyWithoutContadorInput = {
    create?: XOR<UserContadorCreateWithoutContadorInput, UserContadorUncheckedCreateWithoutContadorInput> | UserContadorCreateWithoutContadorInput[] | UserContadorUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: UserContadorCreateOrConnectWithoutContadorInput | UserContadorCreateOrConnectWithoutContadorInput[]
    createMany?: UserContadorCreateManyContadorInputEnvelope
    connect?: UserContadorWhereUniqueInput | UserContadorWhereUniqueInput[]
  }

  export type EmitenteUncheckedCreateNestedManyWithoutContadorInput = {
    create?: XOR<EmitenteCreateWithoutContadorInput, EmitenteUncheckedCreateWithoutContadorInput> | EmitenteCreateWithoutContadorInput[] | EmitenteUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: EmitenteCreateOrConnectWithoutContadorInput | EmitenteCreateOrConnectWithoutContadorInput[]
    createMany?: EmitenteCreateManyContadorInputEnvelope
    connect?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
  }

  export type EnderecoUncheckedCreateNestedOneWithoutContadorInput = {
    create?: XOR<EnderecoCreateWithoutContadorInput, EnderecoUncheckedCreateWithoutContadorInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutContadorInput
    connect?: EnderecoWhereUniqueInput
  }

  export type CertificadoUncheckedCreateNestedManyWithoutContadorInput = {
    create?: XOR<CertificadoCreateWithoutContadorInput, CertificadoUncheckedCreateWithoutContadorInput> | CertificadoCreateWithoutContadorInput[] | CertificadoUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutContadorInput | CertificadoCreateOrConnectWithoutContadorInput[]
    createMany?: CertificadoCreateManyContadorInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
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

  export type EmitenteUpdateManyWithoutContadorNestedInput = {
    create?: XOR<EmitenteCreateWithoutContadorInput, EmitenteUncheckedCreateWithoutContadorInput> | EmitenteCreateWithoutContadorInput[] | EmitenteUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: EmitenteCreateOrConnectWithoutContadorInput | EmitenteCreateOrConnectWithoutContadorInput[]
    upsert?: EmitenteUpsertWithWhereUniqueWithoutContadorInput | EmitenteUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: EmitenteCreateManyContadorInputEnvelope
    set?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
    disconnect?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
    delete?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
    connect?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
    update?: EmitenteUpdateWithWhereUniqueWithoutContadorInput | EmitenteUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: EmitenteUpdateManyWithWhereWithoutContadorInput | EmitenteUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: EmitenteScalarWhereInput | EmitenteScalarWhereInput[]
  }

  export type EnderecoUpdateOneWithoutContadorNestedInput = {
    create?: XOR<EnderecoCreateWithoutContadorInput, EnderecoUncheckedCreateWithoutContadorInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutContadorInput
    upsert?: EnderecoUpsertWithoutContadorInput
    disconnect?: EnderecoWhereInput | boolean
    delete?: EnderecoWhereInput | boolean
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutContadorInput, EnderecoUpdateWithoutContadorInput>, EnderecoUncheckedUpdateWithoutContadorInput>
  }

  export type CertificadoUpdateManyWithoutContadorNestedInput = {
    create?: XOR<CertificadoCreateWithoutContadorInput, CertificadoUncheckedCreateWithoutContadorInput> | CertificadoCreateWithoutContadorInput[] | CertificadoUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutContadorInput | CertificadoCreateOrConnectWithoutContadorInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutContadorInput | CertificadoUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: CertificadoCreateManyContadorInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutContadorInput | CertificadoUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutContadorInput | CertificadoUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
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

  export type EmitenteUncheckedUpdateManyWithoutContadorNestedInput = {
    create?: XOR<EmitenteCreateWithoutContadorInput, EmitenteUncheckedCreateWithoutContadorInput> | EmitenteCreateWithoutContadorInput[] | EmitenteUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: EmitenteCreateOrConnectWithoutContadorInput | EmitenteCreateOrConnectWithoutContadorInput[]
    upsert?: EmitenteUpsertWithWhereUniqueWithoutContadorInput | EmitenteUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: EmitenteCreateManyContadorInputEnvelope
    set?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
    disconnect?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
    delete?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
    connect?: EmitenteWhereUniqueInput | EmitenteWhereUniqueInput[]
    update?: EmitenteUpdateWithWhereUniqueWithoutContadorInput | EmitenteUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: EmitenteUpdateManyWithWhereWithoutContadorInput | EmitenteUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: EmitenteScalarWhereInput | EmitenteScalarWhereInput[]
  }

  export type EnderecoUncheckedUpdateOneWithoutContadorNestedInput = {
    create?: XOR<EnderecoCreateWithoutContadorInput, EnderecoUncheckedCreateWithoutContadorInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutContadorInput
    upsert?: EnderecoUpsertWithoutContadorInput
    disconnect?: EnderecoWhereInput | boolean
    delete?: EnderecoWhereInput | boolean
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutContadorInput, EnderecoUpdateWithoutContadorInput>, EnderecoUncheckedUpdateWithoutContadorInput>
  }

  export type CertificadoUncheckedUpdateManyWithoutContadorNestedInput = {
    create?: XOR<CertificadoCreateWithoutContadorInput, CertificadoUncheckedCreateWithoutContadorInput> | CertificadoCreateWithoutContadorInput[] | CertificadoUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutContadorInput | CertificadoCreateOrConnectWithoutContadorInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutContadorInput | CertificadoUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: CertificadoCreateManyContadorInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutContadorInput | CertificadoUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutContadorInput | CertificadoUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
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

  export type EnderecoCreateNestedManyWithoutEmitenteInput = {
    create?: XOR<EnderecoCreateWithoutEmitenteInput, EnderecoUncheckedCreateWithoutEmitenteInput> | EnderecoCreateWithoutEmitenteInput[] | EnderecoUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutEmitenteInput | EnderecoCreateOrConnectWithoutEmitenteInput[]
    createMany?: EnderecoCreateManyEmitenteInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type ContadorCreateNestedOneWithoutEmitentesInput = {
    create?: XOR<ContadorCreateWithoutEmitentesInput, ContadorUncheckedCreateWithoutEmitentesInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutEmitentesInput
    connect?: ContadorWhereUniqueInput
  }

  export type EnderecoUncheckedCreateNestedManyWithoutEmitenteInput = {
    create?: XOR<EnderecoCreateWithoutEmitenteInput, EnderecoUncheckedCreateWithoutEmitenteInput> | EnderecoCreateWithoutEmitenteInput[] | EnderecoUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutEmitenteInput | EnderecoCreateOrConnectWithoutEmitenteInput[]
    createMany?: EnderecoCreateManyEmitenteInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type EnderecoUpdateManyWithoutEmitenteNestedInput = {
    create?: XOR<EnderecoCreateWithoutEmitenteInput, EnderecoUncheckedCreateWithoutEmitenteInput> | EnderecoCreateWithoutEmitenteInput[] | EnderecoUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutEmitenteInput | EnderecoCreateOrConnectWithoutEmitenteInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutEmitenteInput | EnderecoUpsertWithWhereUniqueWithoutEmitenteInput[]
    createMany?: EnderecoCreateManyEmitenteInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutEmitenteInput | EnderecoUpdateWithWhereUniqueWithoutEmitenteInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutEmitenteInput | EnderecoUpdateManyWithWhereWithoutEmitenteInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type ContadorUpdateOneWithoutEmitentesNestedInput = {
    create?: XOR<ContadorCreateWithoutEmitentesInput, ContadorUncheckedCreateWithoutEmitentesInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutEmitentesInput
    upsert?: ContadorUpsertWithoutEmitentesInput
    disconnect?: boolean
    delete?: ContadorWhereInput | boolean
    connect?: ContadorWhereUniqueInput
    update?: XOR<XOR<ContadorUpdateToOneWithWhereWithoutEmitentesInput, ContadorUpdateWithoutEmitentesInput>, ContadorUncheckedUpdateWithoutEmitentesInput>
  }

  export type EnderecoUncheckedUpdateManyWithoutEmitenteNestedInput = {
    create?: XOR<EnderecoCreateWithoutEmitenteInput, EnderecoUncheckedCreateWithoutEmitenteInput> | EnderecoCreateWithoutEmitenteInput[] | EnderecoUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutEmitenteInput | EnderecoCreateOrConnectWithoutEmitenteInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutEmitenteInput | EnderecoUpsertWithWhereUniqueWithoutEmitenteInput[]
    createMany?: EnderecoCreateManyEmitenteInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutEmitenteInput | EnderecoUpdateWithWhereUniqueWithoutEmitenteInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutEmitenteInput | EnderecoUpdateManyWithWhereWithoutEmitenteInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type ContadorCreateNestedOneWithoutCertificadosInput = {
    create?: XOR<ContadorCreateWithoutCertificadosInput, ContadorUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutCertificadosInput
    connect?: ContadorWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type ContadorUpdateOneWithoutCertificadosNestedInput = {
    create?: XOR<ContadorCreateWithoutCertificadosInput, ContadorUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutCertificadosInput
    upsert?: ContadorUpsertWithoutCertificadosInput
    disconnect?: boolean
    delete?: ContadorWhereInput | boolean
    connect?: ContadorWhereUniqueInput
    update?: XOR<XOR<ContadorUpdateToOneWithWhereWithoutCertificadosInput, ContadorUpdateWithoutCertificadosInput>, ContadorUncheckedUpdateWithoutCertificadosInput>
  }

  export type ContadorCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<ContadorCreateWithoutEnderecoInput, ContadorUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutEnderecoInput
    connect?: ContadorWhereUniqueInput
  }

  export type EmitenteCreateNestedOneWithoutEnderecosInput = {
    create?: XOR<EmitenteCreateWithoutEnderecosInput, EmitenteUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: EmitenteCreateOrConnectWithoutEnderecosInput
    connect?: EmitenteWhereUniqueInput
  }

  export type ContadorUpdateOneWithoutEnderecoNestedInput = {
    create?: XOR<ContadorCreateWithoutEnderecoInput, ContadorUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutEnderecoInput
    upsert?: ContadorUpsertWithoutEnderecoInput
    disconnect?: boolean
    delete?: ContadorWhereInput | boolean
    connect?: ContadorWhereUniqueInput
    update?: XOR<XOR<ContadorUpdateToOneWithWhereWithoutEnderecoInput, ContadorUpdateWithoutEnderecoInput>, ContadorUncheckedUpdateWithoutEnderecoInput>
  }

  export type EmitenteUpdateOneWithoutEnderecosNestedInput = {
    create?: XOR<EmitenteCreateWithoutEnderecosInput, EmitenteUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: EmitenteCreateOrConnectWithoutEnderecosInput
    upsert?: EmitenteUpsertWithoutEnderecosInput
    disconnect?: boolean
    delete?: EmitenteWhereInput | boolean
    connect?: EmitenteWhereUniqueInput
    update?: XOR<XOR<EmitenteUpdateToOneWithWhereWithoutEnderecosInput, EmitenteUpdateWithoutEnderecosInput>, EmitenteUncheckedUpdateWithoutEnderecosInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EmitenteCreateWithoutContadorInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    IE: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: EnderecoCreateNestedManyWithoutEmitenteInput
  }

  export type EmitenteUncheckedCreateWithoutContadorInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    IE: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutEmitenteInput
  }

  export type EmitenteCreateOrConnectWithoutContadorInput = {
    where: EmitenteWhereUniqueInput
    create: XOR<EmitenteCreateWithoutContadorInput, EmitenteUncheckedCreateWithoutContadorInput>
  }

  export type EmitenteCreateManyContadorInputEnvelope = {
    data: EmitenteCreateManyContadorInput | EmitenteCreateManyContadorInput[]
  }

  export type EnderecoCreateWithoutContadorInput = {
    id?: string
    tipo?: string
    logradouro: string
    nro: string
    complemento?: string | null
    bairro: string
    cep: string
    nome_cidade: string
    codigoIBGEcidade: string
    nome_estado: string
    uf: string
    codigoIBGEestado: string
    emitente?: EmitenteCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoUncheckedCreateWithoutContadorInput = {
    id?: string
    tipo?: string
    logradouro: string
    nro: string
    complemento?: string | null
    bairro: string
    cep: string
    nome_cidade: string
    codigoIBGEcidade: string
    nome_estado: string
    uf: string
    codigoIBGEestado: string
    emitenteId?: string | null
  }

  export type EnderecoCreateOrConnectWithoutContadorInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutContadorInput, EnderecoUncheckedCreateWithoutContadorInput>
  }

  export type CertificadoCreateWithoutContadorInput = {
    id?: string
    requerente?: string | null
    validade?: Date | string | null
    fileBase64?: string | null
    createdAt?: Date | string
  }

  export type CertificadoUncheckedCreateWithoutContadorInput = {
    id?: string
    requerente?: string | null
    validade?: Date | string | null
    fileBase64?: string | null
    createdAt?: Date | string
  }

  export type CertificadoCreateOrConnectWithoutContadorInput = {
    where: CertificadoWhereUniqueInput
    create: XOR<CertificadoCreateWithoutContadorInput, CertificadoUncheckedCreateWithoutContadorInput>
  }

  export type CertificadoCreateManyContadorInputEnvelope = {
    data: CertificadoCreateManyContadorInput | CertificadoCreateManyContadorInput[]
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

  export type EmitenteUpsertWithWhereUniqueWithoutContadorInput = {
    where: EmitenteWhereUniqueInput
    update: XOR<EmitenteUpdateWithoutContadorInput, EmitenteUncheckedUpdateWithoutContadorInput>
    create: XOR<EmitenteCreateWithoutContadorInput, EmitenteUncheckedCreateWithoutContadorInput>
  }

  export type EmitenteUpdateWithWhereUniqueWithoutContadorInput = {
    where: EmitenteWhereUniqueInput
    data: XOR<EmitenteUpdateWithoutContadorInput, EmitenteUncheckedUpdateWithoutContadorInput>
  }

  export type EmitenteUpdateManyWithWhereWithoutContadorInput = {
    where: EmitenteScalarWhereInput
    data: XOR<EmitenteUpdateManyMutationInput, EmitenteUncheckedUpdateManyWithoutContadorInput>
  }

  export type EmitenteScalarWhereInput = {
    AND?: EmitenteScalarWhereInput | EmitenteScalarWhereInput[]
    OR?: EmitenteScalarWhereInput[]
    NOT?: EmitenteScalarWhereInput | EmitenteScalarWhereInput[]
    id?: StringFilter<"Emitente"> | string
    cod_dominio?: StringNullableFilter<"Emitente"> | string | null
    nome?: StringFilter<"Emitente"> | string
    razao_social?: StringFilter<"Emitente"> | string
    cnpj?: StringNullableFilter<"Emitente"> | string | null
    cpf?: StringNullableFilter<"Emitente"> | string | null
    IE?: StringFilter<"Emitente"> | string
    contadorId?: StringNullableFilter<"Emitente"> | string | null
    createdAt?: DateTimeFilter<"Emitente"> | Date | string
    updatedAt?: DateTimeFilter<"Emitente"> | Date | string
  }

  export type EnderecoUpsertWithoutContadorInput = {
    update: XOR<EnderecoUpdateWithoutContadorInput, EnderecoUncheckedUpdateWithoutContadorInput>
    create: XOR<EnderecoCreateWithoutContadorInput, EnderecoUncheckedCreateWithoutContadorInput>
    where?: EnderecoWhereInput
  }

  export type EnderecoUpdateToOneWithWhereWithoutContadorInput = {
    where?: EnderecoWhereInput
    data: XOR<EnderecoUpdateWithoutContadorInput, EnderecoUncheckedUpdateWithoutContadorInput>
  }

  export type EnderecoUpdateWithoutContadorInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    nome_cidade?: StringFieldUpdateOperationsInput | string
    codigoIBGEcidade?: StringFieldUpdateOperationsInput | string
    nome_estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    codigoIBGEestado?: StringFieldUpdateOperationsInput | string
    emitente?: EmitenteUpdateOneWithoutEnderecosNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutContadorInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    nome_cidade?: StringFieldUpdateOperationsInput | string
    codigoIBGEcidade?: StringFieldUpdateOperationsInput | string
    nome_estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    codigoIBGEestado?: StringFieldUpdateOperationsInput | string
    emitenteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificadoUpsertWithWhereUniqueWithoutContadorInput = {
    where: CertificadoWhereUniqueInput
    update: XOR<CertificadoUpdateWithoutContadorInput, CertificadoUncheckedUpdateWithoutContadorInput>
    create: XOR<CertificadoCreateWithoutContadorInput, CertificadoUncheckedCreateWithoutContadorInput>
  }

  export type CertificadoUpdateWithWhereUniqueWithoutContadorInput = {
    where: CertificadoWhereUniqueInput
    data: XOR<CertificadoUpdateWithoutContadorInput, CertificadoUncheckedUpdateWithoutContadorInput>
  }

  export type CertificadoUpdateManyWithWhereWithoutContadorInput = {
    where: CertificadoScalarWhereInput
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyWithoutContadorInput>
  }

  export type CertificadoScalarWhereInput = {
    AND?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
    OR?: CertificadoScalarWhereInput[]
    NOT?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
    id?: StringFilter<"Certificado"> | string
    requerente?: StringNullableFilter<"Certificado"> | string | null
    validade?: DateTimeNullableFilter<"Certificado"> | Date | string | null
    fileBase64?: StringNullableFilter<"Certificado"> | string | null
    contadorId?: StringNullableFilter<"Certificado"> | string | null
    createdAt?: DateTimeFilter<"Certificado"> | Date | string
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
    Emitentes?: EmitenteCreateNestedManyWithoutContadorInput
    endereco?: EnderecoCreateNestedOneWithoutContadorInput
    certificados?: CertificadoCreateNestedManyWithoutContadorInput
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
    Emitentes?: EmitenteUncheckedCreateNestedManyWithoutContadorInput
    endereco?: EnderecoUncheckedCreateNestedOneWithoutContadorInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutContadorInput
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
    Emitentes?: EmitenteUpdateManyWithoutContadorNestedInput
    endereco?: EnderecoUpdateOneWithoutContadorNestedInput
    certificados?: CertificadoUpdateManyWithoutContadorNestedInput
  }

  export type ContadorUncheckedUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Emitentes?: EmitenteUncheckedUpdateManyWithoutContadorNestedInput
    endereco?: EnderecoUncheckedUpdateOneWithoutContadorNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutContadorNestedInput
  }

  export type EnderecoCreateWithoutEmitenteInput = {
    id?: string
    tipo?: string
    logradouro: string
    nro: string
    complemento?: string | null
    bairro: string
    cep: string
    nome_cidade: string
    codigoIBGEcidade: string
    nome_estado: string
    uf: string
    codigoIBGEestado: string
    contador?: ContadorCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateWithoutEmitenteInput = {
    id?: string
    tipo?: string
    logradouro: string
    nro: string
    complemento?: string | null
    bairro: string
    cep: string
    nome_cidade: string
    codigoIBGEcidade: string
    nome_estado: string
    uf: string
    codigoIBGEestado: string
    contadorId?: string | null
  }

  export type EnderecoCreateOrConnectWithoutEmitenteInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutEmitenteInput, EnderecoUncheckedCreateWithoutEmitenteInput>
  }

  export type EnderecoCreateManyEmitenteInputEnvelope = {
    data: EnderecoCreateManyEmitenteInput | EnderecoCreateManyEmitenteInput[]
  }

  export type ContadorCreateWithoutEmitentesInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorCreateNestedManyWithoutContadorInput
    endereco?: EnderecoCreateNestedOneWithoutContadorInput
    certificados?: CertificadoCreateNestedManyWithoutContadorInput
  }

  export type ContadorUncheckedCreateWithoutEmitentesInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorUncheckedCreateNestedManyWithoutContadorInput
    endereco?: EnderecoUncheckedCreateNestedOneWithoutContadorInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutContadorInput
  }

  export type ContadorCreateOrConnectWithoutEmitentesInput = {
    where: ContadorWhereUniqueInput
    create: XOR<ContadorCreateWithoutEmitentesInput, ContadorUncheckedCreateWithoutEmitentesInput>
  }

  export type EnderecoUpsertWithWhereUniqueWithoutEmitenteInput = {
    where: EnderecoWhereUniqueInput
    update: XOR<EnderecoUpdateWithoutEmitenteInput, EnderecoUncheckedUpdateWithoutEmitenteInput>
    create: XOR<EnderecoCreateWithoutEmitenteInput, EnderecoUncheckedCreateWithoutEmitenteInput>
  }

  export type EnderecoUpdateWithWhereUniqueWithoutEmitenteInput = {
    where: EnderecoWhereUniqueInput
    data: XOR<EnderecoUpdateWithoutEmitenteInput, EnderecoUncheckedUpdateWithoutEmitenteInput>
  }

  export type EnderecoUpdateManyWithWhereWithoutEmitenteInput = {
    where: EnderecoScalarWhereInput
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyWithoutEmitenteInput>
  }

  export type EnderecoScalarWhereInput = {
    AND?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    OR?: EnderecoScalarWhereInput[]
    NOT?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    id?: StringFilter<"Endereco"> | string
    tipo?: StringFilter<"Endereco"> | string
    logradouro?: StringFilter<"Endereco"> | string
    nro?: StringFilter<"Endereco"> | string
    complemento?: StringNullableFilter<"Endereco"> | string | null
    bairro?: StringFilter<"Endereco"> | string
    cep?: StringFilter<"Endereco"> | string
    nome_cidade?: StringFilter<"Endereco"> | string
    codigoIBGEcidade?: StringFilter<"Endereco"> | string
    nome_estado?: StringFilter<"Endereco"> | string
    uf?: StringFilter<"Endereco"> | string
    codigoIBGEestado?: StringFilter<"Endereco"> | string
    contadorId?: StringNullableFilter<"Endereco"> | string | null
    emitenteId?: StringNullableFilter<"Endereco"> | string | null
  }

  export type ContadorUpsertWithoutEmitentesInput = {
    update: XOR<ContadorUpdateWithoutEmitentesInput, ContadorUncheckedUpdateWithoutEmitentesInput>
    create: XOR<ContadorCreateWithoutEmitentesInput, ContadorUncheckedCreateWithoutEmitentesInput>
    where?: ContadorWhereInput
  }

  export type ContadorUpdateToOneWithWhereWithoutEmitentesInput = {
    where?: ContadorWhereInput
    data: XOR<ContadorUpdateWithoutEmitentesInput, ContadorUncheckedUpdateWithoutEmitentesInput>
  }

  export type ContadorUpdateWithoutEmitentesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUpdateManyWithoutContadorNestedInput
    endereco?: EnderecoUpdateOneWithoutContadorNestedInput
    certificados?: CertificadoUpdateManyWithoutContadorNestedInput
  }

  export type ContadorUncheckedUpdateWithoutEmitentesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUncheckedUpdateManyWithoutContadorNestedInput
    endereco?: EnderecoUncheckedUpdateOneWithoutContadorNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutContadorNestedInput
  }

  export type ContadorCreateWithoutCertificadosInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorCreateNestedManyWithoutContadorInput
    Emitentes?: EmitenteCreateNestedManyWithoutContadorInput
    endereco?: EnderecoCreateNestedOneWithoutContadorInput
  }

  export type ContadorUncheckedCreateWithoutCertificadosInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorUncheckedCreateNestedManyWithoutContadorInput
    Emitentes?: EmitenteUncheckedCreateNestedManyWithoutContadorInput
    endereco?: EnderecoUncheckedCreateNestedOneWithoutContadorInput
  }

  export type ContadorCreateOrConnectWithoutCertificadosInput = {
    where: ContadorWhereUniqueInput
    create: XOR<ContadorCreateWithoutCertificadosInput, ContadorUncheckedCreateWithoutCertificadosInput>
  }

  export type ContadorUpsertWithoutCertificadosInput = {
    update: XOR<ContadorUpdateWithoutCertificadosInput, ContadorUncheckedUpdateWithoutCertificadosInput>
    create: XOR<ContadorCreateWithoutCertificadosInput, ContadorUncheckedCreateWithoutCertificadosInput>
    where?: ContadorWhereInput
  }

  export type ContadorUpdateToOneWithWhereWithoutCertificadosInput = {
    where?: ContadorWhereInput
    data: XOR<ContadorUpdateWithoutCertificadosInput, ContadorUncheckedUpdateWithoutCertificadosInput>
  }

  export type ContadorUpdateWithoutCertificadosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUpdateManyWithoutContadorNestedInput
    Emitentes?: EmitenteUpdateManyWithoutContadorNestedInput
    endereco?: EnderecoUpdateOneWithoutContadorNestedInput
  }

  export type ContadorUncheckedUpdateWithoutCertificadosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUncheckedUpdateManyWithoutContadorNestedInput
    Emitentes?: EmitenteUncheckedUpdateManyWithoutContadorNestedInput
    endereco?: EnderecoUncheckedUpdateOneWithoutContadorNestedInput
  }

  export type ContadorCreateWithoutEnderecoInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorCreateNestedManyWithoutContadorInput
    Emitentes?: EmitenteCreateNestedManyWithoutContadorInput
    certificados?: CertificadoCreateNestedManyWithoutContadorInput
  }

  export type ContadorUncheckedCreateWithoutEnderecoInput = {
    id?: string
    nome: string
    cpf: string
    regcrc: string
    telefone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserContadorUncheckedCreateNestedManyWithoutContadorInput
    Emitentes?: EmitenteUncheckedCreateNestedManyWithoutContadorInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutContadorInput
  }

  export type ContadorCreateOrConnectWithoutEnderecoInput = {
    where: ContadorWhereUniqueInput
    create: XOR<ContadorCreateWithoutEnderecoInput, ContadorUncheckedCreateWithoutEnderecoInput>
  }

  export type EmitenteCreateWithoutEnderecosInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    IE: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contador?: ContadorCreateNestedOneWithoutEmitentesInput
  }

  export type EmitenteUncheckedCreateWithoutEnderecosInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    IE: string
    contadorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmitenteCreateOrConnectWithoutEnderecosInput = {
    where: EmitenteWhereUniqueInput
    create: XOR<EmitenteCreateWithoutEnderecosInput, EmitenteUncheckedCreateWithoutEnderecosInput>
  }

  export type ContadorUpsertWithoutEnderecoInput = {
    update: XOR<ContadorUpdateWithoutEnderecoInput, ContadorUncheckedUpdateWithoutEnderecoInput>
    create: XOR<ContadorCreateWithoutEnderecoInput, ContadorUncheckedCreateWithoutEnderecoInput>
    where?: ContadorWhereInput
  }

  export type ContadorUpdateToOneWithWhereWithoutEnderecoInput = {
    where?: ContadorWhereInput
    data: XOR<ContadorUpdateWithoutEnderecoInput, ContadorUncheckedUpdateWithoutEnderecoInput>
  }

  export type ContadorUpdateWithoutEnderecoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUpdateManyWithoutContadorNestedInput
    Emitentes?: EmitenteUpdateManyWithoutContadorNestedInput
    certificados?: CertificadoUpdateManyWithoutContadorNestedInput
  }

  export type ContadorUncheckedUpdateWithoutEnderecoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    regcrc?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserContadorUncheckedUpdateManyWithoutContadorNestedInput
    Emitentes?: EmitenteUncheckedUpdateManyWithoutContadorNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutContadorNestedInput
  }

  export type EmitenteUpsertWithoutEnderecosInput = {
    update: XOR<EmitenteUpdateWithoutEnderecosInput, EmitenteUncheckedUpdateWithoutEnderecosInput>
    create: XOR<EmitenteCreateWithoutEnderecosInput, EmitenteUncheckedCreateWithoutEnderecosInput>
    where?: EmitenteWhereInput
  }

  export type EmitenteUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: EmitenteWhereInput
    data: XOR<EmitenteUpdateWithoutEnderecosInput, EmitenteUncheckedUpdateWithoutEnderecosInput>
  }

  export type EmitenteUpdateWithoutEnderecosInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: ContadorUpdateOneWithoutEmitentesNestedInput
  }

  export type EmitenteUncheckedUpdateWithoutEnderecosInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: StringFieldUpdateOperationsInput | string
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EmitenteCreateManyContadorInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    IE: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificadoCreateManyContadorInput = {
    id?: string
    requerente?: string | null
    validade?: Date | string | null
    fileBase64?: string | null
    createdAt?: Date | string
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

  export type EmitenteUpdateWithoutContadorInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUpdateManyWithoutEmitenteNestedInput
  }

  export type EmitenteUncheckedUpdateWithoutContadorInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUncheckedUpdateManyWithoutEmitenteNestedInput
  }

  export type EmitenteUncheckedUpdateManyWithoutContadorInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUpdateWithoutContadorInput = {
    requerente?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileBase64?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateWithoutContadorInput = {
    requerente?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileBase64?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyWithoutContadorInput = {
    requerente?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileBase64?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoCreateManyEmitenteInput = {
    id?: string
    tipo?: string
    logradouro: string
    nro: string
    complemento?: string | null
    bairro: string
    cep: string
    nome_cidade: string
    codigoIBGEcidade: string
    nome_estado: string
    uf: string
    codigoIBGEestado: string
    contadorId?: string | null
  }

  export type EnderecoUpdateWithoutEmitenteInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    nome_cidade?: StringFieldUpdateOperationsInput | string
    codigoIBGEcidade?: StringFieldUpdateOperationsInput | string
    nome_estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    codigoIBGEestado?: StringFieldUpdateOperationsInput | string
    contador?: ContadorUpdateOneWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutEmitenteInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    nome_cidade?: StringFieldUpdateOperationsInput | string
    codigoIBGEcidade?: StringFieldUpdateOperationsInput | string
    nome_estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    codigoIBGEestado?: StringFieldUpdateOperationsInput | string
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoUncheckedUpdateManyWithoutEmitenteInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    nome_cidade?: StringFieldUpdateOperationsInput | string
    codigoIBGEcidade?: StringFieldUpdateOperationsInput | string
    nome_estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    codigoIBGEestado?: StringFieldUpdateOperationsInput | string
    contadorId?: NullableStringFieldUpdateOperationsInput | string | null
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
     * @deprecated Use EmitenteCountOutputTypeDefaultArgs instead
     */
    export type EmitenteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmitenteCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use EmitenteDefaultArgs instead
     */
    export type EmitenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmitenteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CertificadoDefaultArgs instead
     */
    export type CertificadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CertificadoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnderecoDefaultArgs instead
     */
    export type EnderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnderecoDefaultArgs<ExtArgs>

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