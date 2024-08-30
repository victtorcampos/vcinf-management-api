
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Contador
 * 
 */
export type Contador = $Result.DefaultSelection<Prisma.$ContadorPayload>
/**
 * Model UsuarioContador
 * 
 */
export type UsuarioContador = $Result.DefaultSelection<Prisma.$UsuarioContadorPayload>
/**
 * Model ContadorEmitente
 * 
 */
export type ContadorEmitente = $Result.DefaultSelection<Prisma.$ContadorEmitentePayload>
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
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

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
   * `prisma.usuarioContador`: Exposes CRUD operations for the **UsuarioContador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioContadors
    * const usuarioContadors = await prisma.usuarioContador.findMany()
    * ```
    */
  get usuarioContador(): Prisma.UsuarioContadorDelegate<ExtArgs>;

  /**
   * `prisma.contadorEmitente`: Exposes CRUD operations for the **ContadorEmitente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContadorEmitentes
    * const contadorEmitentes = await prisma.contadorEmitente.findMany()
    * ```
    */
  get contadorEmitente(): Prisma.ContadorEmitenteDelegate<ExtArgs>;

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
   * Prisma Client JS version: 5.19.0
   * Query Engine version: 5fe21811a6ba0b952a3bc71400666511fe3b902f
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
    Usuario: 'Usuario',
    Contador: 'Contador',
    UsuarioContador: 'UsuarioContador',
    ContadorEmitente: 'ContadorEmitente',
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
      modelProps: "usuario" | "contador" | "usuarioContador" | "contadorEmitente" | "emitente" | "certificado" | "endereco"
      txIsolationLevel: never
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsuarioFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsuarioAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
      UsuarioContador: {
        payload: Prisma.$UsuarioContadorPayload<ExtArgs>
        fields: Prisma.UsuarioContadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioContadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioContadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioContadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioContadorPayload>
          }
          findFirst: {
            args: Prisma.UsuarioContadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioContadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioContadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioContadorPayload>
          }
          findMany: {
            args: Prisma.UsuarioContadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioContadorPayload>[]
          }
          create: {
            args: Prisma.UsuarioContadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioContadorPayload>
          }
          createMany: {
            args: Prisma.UsuarioContadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioContadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioContadorPayload>
          }
          update: {
            args: Prisma.UsuarioContadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioContadorPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioContadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioContadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioContadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioContadorPayload>
          }
          aggregate: {
            args: Prisma.UsuarioContadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioContador>
          }
          groupBy: {
            args: Prisma.UsuarioContadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioContadorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsuarioContadorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsuarioContadorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UsuarioContadorCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioContadorCountAggregateOutputType> | number
          }
        }
      }
      ContadorEmitente: {
        payload: Prisma.$ContadorEmitentePayload<ExtArgs>
        fields: Prisma.ContadorEmitenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContadorEmitenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorEmitentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContadorEmitenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorEmitentePayload>
          }
          findFirst: {
            args: Prisma.ContadorEmitenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorEmitentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContadorEmitenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorEmitentePayload>
          }
          findMany: {
            args: Prisma.ContadorEmitenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorEmitentePayload>[]
          }
          create: {
            args: Prisma.ContadorEmitenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorEmitentePayload>
          }
          createMany: {
            args: Prisma.ContadorEmitenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContadorEmitenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorEmitentePayload>
          }
          update: {
            args: Prisma.ContadorEmitenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorEmitentePayload>
          }
          deleteMany: {
            args: Prisma.ContadorEmitenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContadorEmitenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContadorEmitenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorEmitentePayload>
          }
          aggregate: {
            args: Prisma.ContadorEmitenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContadorEmitente>
          }
          groupBy: {
            args: Prisma.ContadorEmitenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContadorEmitenteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContadorEmitenteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContadorEmitenteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContadorEmitenteCountArgs<ExtArgs>
            result: $Utils.Optional<ContadorEmitenteCountAggregateOutputType> | number
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    contadores: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contadores?: boolean | UsuarioCountOutputTypeCountContadoresArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountContadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioContadorWhereInput
  }


  /**
   * Count Type ContadorCountOutputType
   */

  export type ContadorCountOutputType = {
    usuarios: number
    emitentes: number
    certificados: number
  }

  export type ContadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ContadorCountOutputTypeCountUsuariosArgs
    emitentes?: boolean | ContadorCountOutputTypeCountEmitentesArgs
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
    where?: UsuarioContadorWhereInput
  }

  /**
   * ContadorCountOutputType without action
   */
  export type ContadorCountOutputTypeCountEmitentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContadorEmitenteWhereInput
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
    contadores: number
  }

  export type EmitenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | EmitenteCountOutputTypeCountEnderecosArgs
    contadores?: boolean | EmitenteCountOutputTypeCountContadoresArgs
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
   * EmitenteCountOutputType without action
   */
  export type EmitenteCountOutputTypeCountContadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContadorEmitenteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contadores?: boolean | Usuario$contadoresArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>


  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contadores?: boolean | Usuario$contadoresArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      contadores: Prisma.$UsuarioContadorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * @param {UsuarioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const usuario = await prisma.usuario.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UsuarioFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Usuario.
     * @param {UsuarioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const usuario = await prisma.usuario.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UsuarioAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contadores<T extends Usuario$contadoresArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$contadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'Role'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario findRaw
   */
  export type UsuarioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Usuario aggregateRaw
   */
  export type UsuarioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Usuario.contadores
   */
  export type Usuario$contadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    where?: UsuarioContadorWhereInput
    orderBy?: UsuarioContadorOrderByWithRelationInput | UsuarioContadorOrderByWithRelationInput[]
    cursor?: UsuarioContadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioContadorScalarFieldEnum | UsuarioContadorScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
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
    emitentes?: boolean | Contador$emitentesArgs<ExtArgs>
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
    emitentes?: boolean | Contador$emitentesArgs<ExtArgs>
    endereco?: boolean | Contador$enderecoArgs<ExtArgs>
    certificados?: boolean | Contador$certificadosArgs<ExtArgs>
    _count?: boolean | ContadorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contador"
    objects: {
      usuarios: Prisma.$UsuarioContadorPayload<ExtArgs>[]
      emitentes: Prisma.$ContadorEmitentePayload<ExtArgs>[]
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
    usuarios<T extends Contador$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Contador$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "findMany"> | Null>
    emitentes<T extends Contador$emitentesArgs<ExtArgs> = {}>(args?: Subset<T, Contador$emitentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "findMany"> | Null>
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
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    where?: UsuarioContadorWhereInput
    orderBy?: UsuarioContadorOrderByWithRelationInput | UsuarioContadorOrderByWithRelationInput[]
    cursor?: UsuarioContadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioContadorScalarFieldEnum | UsuarioContadorScalarFieldEnum[]
  }

  /**
   * Contador.emitentes
   */
  export type Contador$emitentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    where?: ContadorEmitenteWhereInput
    orderBy?: ContadorEmitenteOrderByWithRelationInput | ContadorEmitenteOrderByWithRelationInput[]
    cursor?: ContadorEmitenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContadorEmitenteScalarFieldEnum | ContadorEmitenteScalarFieldEnum[]
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
   * Model UsuarioContador
   */

  export type AggregateUsuarioContador = {
    _count: UsuarioContadorCountAggregateOutputType | null
    _min: UsuarioContadorMinAggregateOutputType | null
    _max: UsuarioContadorMaxAggregateOutputType | null
  }

  export type UsuarioContadorMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    contadorId: string | null
  }

  export type UsuarioContadorMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    contadorId: string | null
  }

  export type UsuarioContadorCountAggregateOutputType = {
    id: number
    usuarioId: number
    contadorId: number
    _all: number
  }


  export type UsuarioContadorMinAggregateInputType = {
    id?: true
    usuarioId?: true
    contadorId?: true
  }

  export type UsuarioContadorMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    contadorId?: true
  }

  export type UsuarioContadorCountAggregateInputType = {
    id?: true
    usuarioId?: true
    contadorId?: true
    _all?: true
  }

  export type UsuarioContadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioContador to aggregate.
     */
    where?: UsuarioContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioContadors to fetch.
     */
    orderBy?: UsuarioContadorOrderByWithRelationInput | UsuarioContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioContadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioContadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioContadors
    **/
    _count?: true | UsuarioContadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioContadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioContadorMaxAggregateInputType
  }

  export type GetUsuarioContadorAggregateType<T extends UsuarioContadorAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioContador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioContador[P]>
      : GetScalarType<T[P], AggregateUsuarioContador[P]>
  }




  export type UsuarioContadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioContadorWhereInput
    orderBy?: UsuarioContadorOrderByWithAggregationInput | UsuarioContadorOrderByWithAggregationInput[]
    by: UsuarioContadorScalarFieldEnum[] | UsuarioContadorScalarFieldEnum
    having?: UsuarioContadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioContadorCountAggregateInputType | true
    _min?: UsuarioContadorMinAggregateInputType
    _max?: UsuarioContadorMaxAggregateInputType
  }

  export type UsuarioContadorGroupByOutputType = {
    id: string
    usuarioId: string
    contadorId: string
    _count: UsuarioContadorCountAggregateOutputType | null
    _min: UsuarioContadorMinAggregateOutputType | null
    _max: UsuarioContadorMaxAggregateOutputType | null
  }

  type GetUsuarioContadorGroupByPayload<T extends UsuarioContadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioContadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioContadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioContadorGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioContadorGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioContadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    contadorId?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    contador?: boolean | ContadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioContador"]>


  export type UsuarioContadorSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    contadorId?: boolean
  }

  export type UsuarioContadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    contador?: boolean | ContadorDefaultArgs<ExtArgs>
  }

  export type $UsuarioContadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioContador"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
      contador: Prisma.$ContadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      contadorId: string
    }, ExtArgs["result"]["usuarioContador"]>
    composites: {}
  }

  type UsuarioContadorGetPayload<S extends boolean | null | undefined | UsuarioContadorDefaultArgs> = $Result.GetResult<Prisma.$UsuarioContadorPayload, S>

  type UsuarioContadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioContadorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioContadorCountAggregateInputType | true
    }

  export interface UsuarioContadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioContador'], meta: { name: 'UsuarioContador' } }
    /**
     * Find zero or one UsuarioContador that matches the filter.
     * @param {UsuarioContadorFindUniqueArgs} args - Arguments to find a UsuarioContador
     * @example
     * // Get one UsuarioContador
     * const usuarioContador = await prisma.usuarioContador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioContadorFindUniqueArgs>(args: SelectSubset<T, UsuarioContadorFindUniqueArgs<ExtArgs>>): Prisma__UsuarioContadorClient<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UsuarioContador that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioContadorFindUniqueOrThrowArgs} args - Arguments to find a UsuarioContador
     * @example
     * // Get one UsuarioContador
     * const usuarioContador = await prisma.usuarioContador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioContadorFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioContadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioContadorClient<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UsuarioContador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioContadorFindFirstArgs} args - Arguments to find a UsuarioContador
     * @example
     * // Get one UsuarioContador
     * const usuarioContador = await prisma.usuarioContador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioContadorFindFirstArgs>(args?: SelectSubset<T, UsuarioContadorFindFirstArgs<ExtArgs>>): Prisma__UsuarioContadorClient<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UsuarioContador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioContadorFindFirstOrThrowArgs} args - Arguments to find a UsuarioContador
     * @example
     * // Get one UsuarioContador
     * const usuarioContador = await prisma.usuarioContador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioContadorFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioContadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioContadorClient<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UsuarioContadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioContadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioContadors
     * const usuarioContadors = await prisma.usuarioContador.findMany()
     * 
     * // Get first 10 UsuarioContadors
     * const usuarioContadors = await prisma.usuarioContador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioContadorWithIdOnly = await prisma.usuarioContador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioContadorFindManyArgs>(args?: SelectSubset<T, UsuarioContadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UsuarioContador.
     * @param {UsuarioContadorCreateArgs} args - Arguments to create a UsuarioContador.
     * @example
     * // Create one UsuarioContador
     * const UsuarioContador = await prisma.usuarioContador.create({
     *   data: {
     *     // ... data to create a UsuarioContador
     *   }
     * })
     * 
     */
    create<T extends UsuarioContadorCreateArgs>(args: SelectSubset<T, UsuarioContadorCreateArgs<ExtArgs>>): Prisma__UsuarioContadorClient<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UsuarioContadors.
     * @param {UsuarioContadorCreateManyArgs} args - Arguments to create many UsuarioContadors.
     * @example
     * // Create many UsuarioContadors
     * const usuarioContador = await prisma.usuarioContador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioContadorCreateManyArgs>(args?: SelectSubset<T, UsuarioContadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsuarioContador.
     * @param {UsuarioContadorDeleteArgs} args - Arguments to delete one UsuarioContador.
     * @example
     * // Delete one UsuarioContador
     * const UsuarioContador = await prisma.usuarioContador.delete({
     *   where: {
     *     // ... filter to delete one UsuarioContador
     *   }
     * })
     * 
     */
    delete<T extends UsuarioContadorDeleteArgs>(args: SelectSubset<T, UsuarioContadorDeleteArgs<ExtArgs>>): Prisma__UsuarioContadorClient<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UsuarioContador.
     * @param {UsuarioContadorUpdateArgs} args - Arguments to update one UsuarioContador.
     * @example
     * // Update one UsuarioContador
     * const usuarioContador = await prisma.usuarioContador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioContadorUpdateArgs>(args: SelectSubset<T, UsuarioContadorUpdateArgs<ExtArgs>>): Prisma__UsuarioContadorClient<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UsuarioContadors.
     * @param {UsuarioContadorDeleteManyArgs} args - Arguments to filter UsuarioContadors to delete.
     * @example
     * // Delete a few UsuarioContadors
     * const { count } = await prisma.usuarioContador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioContadorDeleteManyArgs>(args?: SelectSubset<T, UsuarioContadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioContadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioContadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioContadors
     * const usuarioContador = await prisma.usuarioContador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioContadorUpdateManyArgs>(args: SelectSubset<T, UsuarioContadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsuarioContador.
     * @param {UsuarioContadorUpsertArgs} args - Arguments to update or create a UsuarioContador.
     * @example
     * // Update or create a UsuarioContador
     * const usuarioContador = await prisma.usuarioContador.upsert({
     *   create: {
     *     // ... data to create a UsuarioContador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioContador we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioContadorUpsertArgs>(args: SelectSubset<T, UsuarioContadorUpsertArgs<ExtArgs>>): Prisma__UsuarioContadorClient<$Result.GetResult<Prisma.$UsuarioContadorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more UsuarioContadors that matches the filter.
     * @param {UsuarioContadorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const usuarioContador = await prisma.usuarioContador.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UsuarioContadorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UsuarioContador.
     * @param {UsuarioContadorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const usuarioContador = await prisma.usuarioContador.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UsuarioContadorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UsuarioContadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioContadorCountArgs} args - Arguments to filter UsuarioContadors to count.
     * @example
     * // Count the number of UsuarioContadors
     * const count = await prisma.usuarioContador.count({
     *   where: {
     *     // ... the filter for the UsuarioContadors we want to count
     *   }
     * })
    **/
    count<T extends UsuarioContadorCountArgs>(
      args?: Subset<T, UsuarioContadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioContadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioContador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioContadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioContadorAggregateArgs>(args: Subset<T, UsuarioContadorAggregateArgs>): Prisma.PrismaPromise<GetUsuarioContadorAggregateType<T>>

    /**
     * Group by UsuarioContador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioContadorGroupByArgs} args - Group by arguments.
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
      T extends UsuarioContadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioContadorGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioContadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioContadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioContadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioContador model
   */
  readonly fields: UsuarioContadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioContador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioContadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UsuarioContador model
   */ 
  interface UsuarioContadorFieldRefs {
    readonly id: FieldRef<"UsuarioContador", 'String'>
    readonly usuarioId: FieldRef<"UsuarioContador", 'String'>
    readonly contadorId: FieldRef<"UsuarioContador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioContador findUnique
   */
  export type UsuarioContadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioContador to fetch.
     */
    where: UsuarioContadorWhereUniqueInput
  }

  /**
   * UsuarioContador findUniqueOrThrow
   */
  export type UsuarioContadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioContador to fetch.
     */
    where: UsuarioContadorWhereUniqueInput
  }

  /**
   * UsuarioContador findFirst
   */
  export type UsuarioContadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioContador to fetch.
     */
    where?: UsuarioContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioContadors to fetch.
     */
    orderBy?: UsuarioContadorOrderByWithRelationInput | UsuarioContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioContadors.
     */
    cursor?: UsuarioContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioContadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioContadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioContadors.
     */
    distinct?: UsuarioContadorScalarFieldEnum | UsuarioContadorScalarFieldEnum[]
  }

  /**
   * UsuarioContador findFirstOrThrow
   */
  export type UsuarioContadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioContador to fetch.
     */
    where?: UsuarioContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioContadors to fetch.
     */
    orderBy?: UsuarioContadorOrderByWithRelationInput | UsuarioContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioContadors.
     */
    cursor?: UsuarioContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioContadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioContadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioContadors.
     */
    distinct?: UsuarioContadorScalarFieldEnum | UsuarioContadorScalarFieldEnum[]
  }

  /**
   * UsuarioContador findMany
   */
  export type UsuarioContadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioContadors to fetch.
     */
    where?: UsuarioContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioContadors to fetch.
     */
    orderBy?: UsuarioContadorOrderByWithRelationInput | UsuarioContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioContadors.
     */
    cursor?: UsuarioContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioContadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioContadors.
     */
    skip?: number
    distinct?: UsuarioContadorScalarFieldEnum | UsuarioContadorScalarFieldEnum[]
  }

  /**
   * UsuarioContador create
   */
  export type UsuarioContadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioContador.
     */
    data: XOR<UsuarioContadorCreateInput, UsuarioContadorUncheckedCreateInput>
  }

  /**
   * UsuarioContador createMany
   */
  export type UsuarioContadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioContadors.
     */
    data: UsuarioContadorCreateManyInput | UsuarioContadorCreateManyInput[]
  }

  /**
   * UsuarioContador update
   */
  export type UsuarioContadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioContador.
     */
    data: XOR<UsuarioContadorUpdateInput, UsuarioContadorUncheckedUpdateInput>
    /**
     * Choose, which UsuarioContador to update.
     */
    where: UsuarioContadorWhereUniqueInput
  }

  /**
   * UsuarioContador updateMany
   */
  export type UsuarioContadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioContadors.
     */
    data: XOR<UsuarioContadorUpdateManyMutationInput, UsuarioContadorUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioContadors to update
     */
    where?: UsuarioContadorWhereInput
  }

  /**
   * UsuarioContador upsert
   */
  export type UsuarioContadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioContador to update in case it exists.
     */
    where: UsuarioContadorWhereUniqueInput
    /**
     * In case the UsuarioContador found by the `where` argument doesn't exist, create a new UsuarioContador with this data.
     */
    create: XOR<UsuarioContadorCreateInput, UsuarioContadorUncheckedCreateInput>
    /**
     * In case the UsuarioContador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioContadorUpdateInput, UsuarioContadorUncheckedUpdateInput>
  }

  /**
   * UsuarioContador delete
   */
  export type UsuarioContadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
    /**
     * Filter which UsuarioContador to delete.
     */
    where: UsuarioContadorWhereUniqueInput
  }

  /**
   * UsuarioContador deleteMany
   */
  export type UsuarioContadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioContadors to delete
     */
    where?: UsuarioContadorWhereInput
  }

  /**
   * UsuarioContador findRaw
   */
  export type UsuarioContadorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * UsuarioContador aggregateRaw
   */
  export type UsuarioContadorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * UsuarioContador without action
   */
  export type UsuarioContadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioContador
     */
    select?: UsuarioContadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioContadorInclude<ExtArgs> | null
  }


  /**
   * Model ContadorEmitente
   */

  export type AggregateContadorEmitente = {
    _count: ContadorEmitenteCountAggregateOutputType | null
    _min: ContadorEmitenteMinAggregateOutputType | null
    _max: ContadorEmitenteMaxAggregateOutputType | null
  }

  export type ContadorEmitenteMinAggregateOutputType = {
    id: string | null
    emitenteId: string | null
    contadorId: string | null
  }

  export type ContadorEmitenteMaxAggregateOutputType = {
    id: string | null
    emitenteId: string | null
    contadorId: string | null
  }

  export type ContadorEmitenteCountAggregateOutputType = {
    id: number
    emitenteId: number
    contadorId: number
    _all: number
  }


  export type ContadorEmitenteMinAggregateInputType = {
    id?: true
    emitenteId?: true
    contadorId?: true
  }

  export type ContadorEmitenteMaxAggregateInputType = {
    id?: true
    emitenteId?: true
    contadorId?: true
  }

  export type ContadorEmitenteCountAggregateInputType = {
    id?: true
    emitenteId?: true
    contadorId?: true
    _all?: true
  }

  export type ContadorEmitenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContadorEmitente to aggregate.
     */
    where?: ContadorEmitenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContadorEmitentes to fetch.
     */
    orderBy?: ContadorEmitenteOrderByWithRelationInput | ContadorEmitenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContadorEmitenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContadorEmitentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContadorEmitentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContadorEmitentes
    **/
    _count?: true | ContadorEmitenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContadorEmitenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContadorEmitenteMaxAggregateInputType
  }

  export type GetContadorEmitenteAggregateType<T extends ContadorEmitenteAggregateArgs> = {
        [P in keyof T & keyof AggregateContadorEmitente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContadorEmitente[P]>
      : GetScalarType<T[P], AggregateContadorEmitente[P]>
  }




  export type ContadorEmitenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContadorEmitenteWhereInput
    orderBy?: ContadorEmitenteOrderByWithAggregationInput | ContadorEmitenteOrderByWithAggregationInput[]
    by: ContadorEmitenteScalarFieldEnum[] | ContadorEmitenteScalarFieldEnum
    having?: ContadorEmitenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContadorEmitenteCountAggregateInputType | true
    _min?: ContadorEmitenteMinAggregateInputType
    _max?: ContadorEmitenteMaxAggregateInputType
  }

  export type ContadorEmitenteGroupByOutputType = {
    id: string
    emitenteId: string
    contadorId: string
    _count: ContadorEmitenteCountAggregateOutputType | null
    _min: ContadorEmitenteMinAggregateOutputType | null
    _max: ContadorEmitenteMaxAggregateOutputType | null
  }

  type GetContadorEmitenteGroupByPayload<T extends ContadorEmitenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContadorEmitenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContadorEmitenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContadorEmitenteGroupByOutputType[P]>
            : GetScalarType<T[P], ContadorEmitenteGroupByOutputType[P]>
        }
      >
    >


  export type ContadorEmitenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emitenteId?: boolean
    contadorId?: boolean
    emitente?: boolean | EmitenteDefaultArgs<ExtArgs>
    contador?: boolean | ContadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contadorEmitente"]>


  export type ContadorEmitenteSelectScalar = {
    id?: boolean
    emitenteId?: boolean
    contadorId?: boolean
  }

  export type ContadorEmitenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emitente?: boolean | EmitenteDefaultArgs<ExtArgs>
    contador?: boolean | ContadorDefaultArgs<ExtArgs>
  }

  export type $ContadorEmitentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContadorEmitente"
    objects: {
      emitente: Prisma.$EmitentePayload<ExtArgs>
      contador: Prisma.$ContadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emitenteId: string
      contadorId: string
    }, ExtArgs["result"]["contadorEmitente"]>
    composites: {}
  }

  type ContadorEmitenteGetPayload<S extends boolean | null | undefined | ContadorEmitenteDefaultArgs> = $Result.GetResult<Prisma.$ContadorEmitentePayload, S>

  type ContadorEmitenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContadorEmitenteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContadorEmitenteCountAggregateInputType | true
    }

  export interface ContadorEmitenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContadorEmitente'], meta: { name: 'ContadorEmitente' } }
    /**
     * Find zero or one ContadorEmitente that matches the filter.
     * @param {ContadorEmitenteFindUniqueArgs} args - Arguments to find a ContadorEmitente
     * @example
     * // Get one ContadorEmitente
     * const contadorEmitente = await prisma.contadorEmitente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContadorEmitenteFindUniqueArgs>(args: SelectSubset<T, ContadorEmitenteFindUniqueArgs<ExtArgs>>): Prisma__ContadorEmitenteClient<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContadorEmitente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContadorEmitenteFindUniqueOrThrowArgs} args - Arguments to find a ContadorEmitente
     * @example
     * // Get one ContadorEmitente
     * const contadorEmitente = await prisma.contadorEmitente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContadorEmitenteFindUniqueOrThrowArgs>(args: SelectSubset<T, ContadorEmitenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContadorEmitenteClient<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContadorEmitente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorEmitenteFindFirstArgs} args - Arguments to find a ContadorEmitente
     * @example
     * // Get one ContadorEmitente
     * const contadorEmitente = await prisma.contadorEmitente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContadorEmitenteFindFirstArgs>(args?: SelectSubset<T, ContadorEmitenteFindFirstArgs<ExtArgs>>): Prisma__ContadorEmitenteClient<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContadorEmitente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorEmitenteFindFirstOrThrowArgs} args - Arguments to find a ContadorEmitente
     * @example
     * // Get one ContadorEmitente
     * const contadorEmitente = await prisma.contadorEmitente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContadorEmitenteFindFirstOrThrowArgs>(args?: SelectSubset<T, ContadorEmitenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContadorEmitenteClient<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContadorEmitentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorEmitenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContadorEmitentes
     * const contadorEmitentes = await prisma.contadorEmitente.findMany()
     * 
     * // Get first 10 ContadorEmitentes
     * const contadorEmitentes = await prisma.contadorEmitente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contadorEmitenteWithIdOnly = await prisma.contadorEmitente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContadorEmitenteFindManyArgs>(args?: SelectSubset<T, ContadorEmitenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContadorEmitente.
     * @param {ContadorEmitenteCreateArgs} args - Arguments to create a ContadorEmitente.
     * @example
     * // Create one ContadorEmitente
     * const ContadorEmitente = await prisma.contadorEmitente.create({
     *   data: {
     *     // ... data to create a ContadorEmitente
     *   }
     * })
     * 
     */
    create<T extends ContadorEmitenteCreateArgs>(args: SelectSubset<T, ContadorEmitenteCreateArgs<ExtArgs>>): Prisma__ContadorEmitenteClient<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContadorEmitentes.
     * @param {ContadorEmitenteCreateManyArgs} args - Arguments to create many ContadorEmitentes.
     * @example
     * // Create many ContadorEmitentes
     * const contadorEmitente = await prisma.contadorEmitente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContadorEmitenteCreateManyArgs>(args?: SelectSubset<T, ContadorEmitenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContadorEmitente.
     * @param {ContadorEmitenteDeleteArgs} args - Arguments to delete one ContadorEmitente.
     * @example
     * // Delete one ContadorEmitente
     * const ContadorEmitente = await prisma.contadorEmitente.delete({
     *   where: {
     *     // ... filter to delete one ContadorEmitente
     *   }
     * })
     * 
     */
    delete<T extends ContadorEmitenteDeleteArgs>(args: SelectSubset<T, ContadorEmitenteDeleteArgs<ExtArgs>>): Prisma__ContadorEmitenteClient<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContadorEmitente.
     * @param {ContadorEmitenteUpdateArgs} args - Arguments to update one ContadorEmitente.
     * @example
     * // Update one ContadorEmitente
     * const contadorEmitente = await prisma.contadorEmitente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContadorEmitenteUpdateArgs>(args: SelectSubset<T, ContadorEmitenteUpdateArgs<ExtArgs>>): Prisma__ContadorEmitenteClient<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContadorEmitentes.
     * @param {ContadorEmitenteDeleteManyArgs} args - Arguments to filter ContadorEmitentes to delete.
     * @example
     * // Delete a few ContadorEmitentes
     * const { count } = await prisma.contadorEmitente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContadorEmitenteDeleteManyArgs>(args?: SelectSubset<T, ContadorEmitenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContadorEmitentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorEmitenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContadorEmitentes
     * const contadorEmitente = await prisma.contadorEmitente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContadorEmitenteUpdateManyArgs>(args: SelectSubset<T, ContadorEmitenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContadorEmitente.
     * @param {ContadorEmitenteUpsertArgs} args - Arguments to update or create a ContadorEmitente.
     * @example
     * // Update or create a ContadorEmitente
     * const contadorEmitente = await prisma.contadorEmitente.upsert({
     *   create: {
     *     // ... data to create a ContadorEmitente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContadorEmitente we want to update
     *   }
     * })
     */
    upsert<T extends ContadorEmitenteUpsertArgs>(args: SelectSubset<T, ContadorEmitenteUpsertArgs<ExtArgs>>): Prisma__ContadorEmitenteClient<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more ContadorEmitentes that matches the filter.
     * @param {ContadorEmitenteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contadorEmitente = await prisma.contadorEmitente.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ContadorEmitenteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ContadorEmitente.
     * @param {ContadorEmitenteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contadorEmitente = await prisma.contadorEmitente.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContadorEmitenteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ContadorEmitentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorEmitenteCountArgs} args - Arguments to filter ContadorEmitentes to count.
     * @example
     * // Count the number of ContadorEmitentes
     * const count = await prisma.contadorEmitente.count({
     *   where: {
     *     // ... the filter for the ContadorEmitentes we want to count
     *   }
     * })
    **/
    count<T extends ContadorEmitenteCountArgs>(
      args?: Subset<T, ContadorEmitenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContadorEmitenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContadorEmitente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorEmitenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContadorEmitenteAggregateArgs>(args: Subset<T, ContadorEmitenteAggregateArgs>): Prisma.PrismaPromise<GetContadorEmitenteAggregateType<T>>

    /**
     * Group by ContadorEmitente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorEmitenteGroupByArgs} args - Group by arguments.
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
      T extends ContadorEmitenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContadorEmitenteGroupByArgs['orderBy'] }
        : { orderBy?: ContadorEmitenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContadorEmitenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContadorEmitenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContadorEmitente model
   */
  readonly fields: ContadorEmitenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContadorEmitente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContadorEmitenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emitente<T extends EmitenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmitenteDefaultArgs<ExtArgs>>): Prisma__EmitenteClient<$Result.GetResult<Prisma.$EmitentePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ContadorEmitente model
   */ 
  interface ContadorEmitenteFieldRefs {
    readonly id: FieldRef<"ContadorEmitente", 'String'>
    readonly emitenteId: FieldRef<"ContadorEmitente", 'String'>
    readonly contadorId: FieldRef<"ContadorEmitente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContadorEmitente findUnique
   */
  export type ContadorEmitenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    /**
     * Filter, which ContadorEmitente to fetch.
     */
    where: ContadorEmitenteWhereUniqueInput
  }

  /**
   * ContadorEmitente findUniqueOrThrow
   */
  export type ContadorEmitenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    /**
     * Filter, which ContadorEmitente to fetch.
     */
    where: ContadorEmitenteWhereUniqueInput
  }

  /**
   * ContadorEmitente findFirst
   */
  export type ContadorEmitenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    /**
     * Filter, which ContadorEmitente to fetch.
     */
    where?: ContadorEmitenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContadorEmitentes to fetch.
     */
    orderBy?: ContadorEmitenteOrderByWithRelationInput | ContadorEmitenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContadorEmitentes.
     */
    cursor?: ContadorEmitenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContadorEmitentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContadorEmitentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContadorEmitentes.
     */
    distinct?: ContadorEmitenteScalarFieldEnum | ContadorEmitenteScalarFieldEnum[]
  }

  /**
   * ContadorEmitente findFirstOrThrow
   */
  export type ContadorEmitenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    /**
     * Filter, which ContadorEmitente to fetch.
     */
    where?: ContadorEmitenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContadorEmitentes to fetch.
     */
    orderBy?: ContadorEmitenteOrderByWithRelationInput | ContadorEmitenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContadorEmitentes.
     */
    cursor?: ContadorEmitenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContadorEmitentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContadorEmitentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContadorEmitentes.
     */
    distinct?: ContadorEmitenteScalarFieldEnum | ContadorEmitenteScalarFieldEnum[]
  }

  /**
   * ContadorEmitente findMany
   */
  export type ContadorEmitenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    /**
     * Filter, which ContadorEmitentes to fetch.
     */
    where?: ContadorEmitenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContadorEmitentes to fetch.
     */
    orderBy?: ContadorEmitenteOrderByWithRelationInput | ContadorEmitenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContadorEmitentes.
     */
    cursor?: ContadorEmitenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContadorEmitentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContadorEmitentes.
     */
    skip?: number
    distinct?: ContadorEmitenteScalarFieldEnum | ContadorEmitenteScalarFieldEnum[]
  }

  /**
   * ContadorEmitente create
   */
  export type ContadorEmitenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    /**
     * The data needed to create a ContadorEmitente.
     */
    data: XOR<ContadorEmitenteCreateInput, ContadorEmitenteUncheckedCreateInput>
  }

  /**
   * ContadorEmitente createMany
   */
  export type ContadorEmitenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContadorEmitentes.
     */
    data: ContadorEmitenteCreateManyInput | ContadorEmitenteCreateManyInput[]
  }

  /**
   * ContadorEmitente update
   */
  export type ContadorEmitenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    /**
     * The data needed to update a ContadorEmitente.
     */
    data: XOR<ContadorEmitenteUpdateInput, ContadorEmitenteUncheckedUpdateInput>
    /**
     * Choose, which ContadorEmitente to update.
     */
    where: ContadorEmitenteWhereUniqueInput
  }

  /**
   * ContadorEmitente updateMany
   */
  export type ContadorEmitenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContadorEmitentes.
     */
    data: XOR<ContadorEmitenteUpdateManyMutationInput, ContadorEmitenteUncheckedUpdateManyInput>
    /**
     * Filter which ContadorEmitentes to update
     */
    where?: ContadorEmitenteWhereInput
  }

  /**
   * ContadorEmitente upsert
   */
  export type ContadorEmitenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    /**
     * The filter to search for the ContadorEmitente to update in case it exists.
     */
    where: ContadorEmitenteWhereUniqueInput
    /**
     * In case the ContadorEmitente found by the `where` argument doesn't exist, create a new ContadorEmitente with this data.
     */
    create: XOR<ContadorEmitenteCreateInput, ContadorEmitenteUncheckedCreateInput>
    /**
     * In case the ContadorEmitente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContadorEmitenteUpdateInput, ContadorEmitenteUncheckedUpdateInput>
  }

  /**
   * ContadorEmitente delete
   */
  export type ContadorEmitenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    /**
     * Filter which ContadorEmitente to delete.
     */
    where: ContadorEmitenteWhereUniqueInput
  }

  /**
   * ContadorEmitente deleteMany
   */
  export type ContadorEmitenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContadorEmitentes to delete
     */
    where?: ContadorEmitenteWhereInput
  }

  /**
   * ContadorEmitente findRaw
   */
  export type ContadorEmitenteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ContadorEmitente aggregateRaw
   */
  export type ContadorEmitenteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ContadorEmitente without action
   */
  export type ContadorEmitenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
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
    ie: string | null
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
    ie: string | null
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
    ie: number
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
    ie?: true
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
    ie?: true
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
    ie?: true
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
    ie: string
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
    ie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enderecos?: boolean | Emitente$enderecosArgs<ExtArgs>
    contadores?: boolean | Emitente$contadoresArgs<ExtArgs>
    _count?: boolean | EmitenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emitente"]>


  export type EmitenteSelectScalar = {
    id?: boolean
    cod_dominio?: boolean
    nome?: boolean
    razao_social?: boolean
    cnpj?: boolean
    cpf?: boolean
    ie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmitenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | Emitente$enderecosArgs<ExtArgs>
    contadores?: boolean | Emitente$contadoresArgs<ExtArgs>
    _count?: boolean | EmitenteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmitentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emitente"
    objects: {
      enderecos: Prisma.$EnderecoPayload<ExtArgs>[]
      contadores: Prisma.$ContadorEmitentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cod_dominio: string | null
      nome: string
      razao_social: string
      cnpj: string | null
      cpf: string | null
      ie: string
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
    contadores<T extends Emitente$contadoresArgs<ExtArgs> = {}>(args?: Subset<T, Emitente$contadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorEmitentePayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly ie: FieldRef<"Emitente", 'String'>
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
   * Emitente.contadores
   */
  export type Emitente$contadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorEmitente
     */
    select?: ContadorEmitenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorEmitenteInclude<ExtArgs> | null
    where?: ContadorEmitenteWhereInput
    orderBy?: ContadorEmitenteOrderByWithRelationInput | ContadorEmitenteOrderByWithRelationInput[]
    cursor?: ContadorEmitenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContadorEmitenteScalarFieldEnum | ContadorEmitenteScalarFieldEnum[]
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

  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


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


  export const UsuarioContadorScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    contadorId: 'contadorId'
  };

  export type UsuarioContadorScalarFieldEnum = (typeof UsuarioContadorScalarFieldEnum)[keyof typeof UsuarioContadorScalarFieldEnum]


  export const ContadorEmitenteScalarFieldEnum: {
    id: 'id',
    emitenteId: 'emitenteId',
    contadorId: 'contadorId'
  };

  export type ContadorEmitenteScalarFieldEnum = (typeof ContadorEmitenteScalarFieldEnum)[keyof typeof ContadorEmitenteScalarFieldEnum]


  export const EmitenteScalarFieldEnum: {
    id: 'id',
    cod_dominio: 'cod_dominio',
    nome: 'nome',
    razao_social: 'razao_social',
    cnpj: 'cnpj',
    cpf: 'cpf',
    ie: 'ie',
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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    contadores?: UsuarioContadorListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contadores?: UsuarioContadorOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    contadores?: UsuarioContadorListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
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
    usuarios?: UsuarioContadorListRelationFilter
    emitentes?: ContadorEmitenteListRelationFilter
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
    usuarios?: UsuarioContadorOrderByRelationAggregateInput
    emitentes?: ContadorEmitenteOrderByRelationAggregateInput
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
    usuarios?: UsuarioContadorListRelationFilter
    emitentes?: ContadorEmitenteListRelationFilter
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

  export type UsuarioContadorWhereInput = {
    AND?: UsuarioContadorWhereInput | UsuarioContadorWhereInput[]
    OR?: UsuarioContadorWhereInput[]
    NOT?: UsuarioContadorWhereInput | UsuarioContadorWhereInput[]
    id?: StringFilter<"UsuarioContador"> | string
    usuarioId?: StringFilter<"UsuarioContador"> | string
    contadorId?: StringFilter<"UsuarioContador"> | string
    Usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    contador?: XOR<ContadorRelationFilter, ContadorWhereInput>
  }

  export type UsuarioContadorOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    contadorId?: SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
    contador?: ContadorOrderByWithRelationInput
  }

  export type UsuarioContadorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId_contadorId?: UsuarioContadorUsuarioIdContadorIdCompoundUniqueInput
    AND?: UsuarioContadorWhereInput | UsuarioContadorWhereInput[]
    OR?: UsuarioContadorWhereInput[]
    NOT?: UsuarioContadorWhereInput | UsuarioContadorWhereInput[]
    usuarioId?: StringFilter<"UsuarioContador"> | string
    contadorId?: StringFilter<"UsuarioContador"> | string
    Usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    contador?: XOR<ContadorRelationFilter, ContadorWhereInput>
  }, "id" | "usuarioId_contadorId">

  export type UsuarioContadorOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    contadorId?: SortOrder
    _count?: UsuarioContadorCountOrderByAggregateInput
    _max?: UsuarioContadorMaxOrderByAggregateInput
    _min?: UsuarioContadorMinOrderByAggregateInput
  }

  export type UsuarioContadorScalarWhereWithAggregatesInput = {
    AND?: UsuarioContadorScalarWhereWithAggregatesInput | UsuarioContadorScalarWhereWithAggregatesInput[]
    OR?: UsuarioContadorScalarWhereWithAggregatesInput[]
    NOT?: UsuarioContadorScalarWhereWithAggregatesInput | UsuarioContadorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsuarioContador"> | string
    usuarioId?: StringWithAggregatesFilter<"UsuarioContador"> | string
    contadorId?: StringWithAggregatesFilter<"UsuarioContador"> | string
  }

  export type ContadorEmitenteWhereInput = {
    AND?: ContadorEmitenteWhereInput | ContadorEmitenteWhereInput[]
    OR?: ContadorEmitenteWhereInput[]
    NOT?: ContadorEmitenteWhereInput | ContadorEmitenteWhereInput[]
    id?: StringFilter<"ContadorEmitente"> | string
    emitenteId?: StringFilter<"ContadorEmitente"> | string
    contadorId?: StringFilter<"ContadorEmitente"> | string
    emitente?: XOR<EmitenteRelationFilter, EmitenteWhereInput>
    contador?: XOR<ContadorRelationFilter, ContadorWhereInput>
  }

  export type ContadorEmitenteOrderByWithRelationInput = {
    id?: SortOrder
    emitenteId?: SortOrder
    contadorId?: SortOrder
    emitente?: EmitenteOrderByWithRelationInput
    contador?: ContadorOrderByWithRelationInput
  }

  export type ContadorEmitenteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    emitenteId_contadorId?: ContadorEmitenteEmitenteIdContadorIdCompoundUniqueInput
    AND?: ContadorEmitenteWhereInput | ContadorEmitenteWhereInput[]
    OR?: ContadorEmitenteWhereInput[]
    NOT?: ContadorEmitenteWhereInput | ContadorEmitenteWhereInput[]
    emitenteId?: StringFilter<"ContadorEmitente"> | string
    contadorId?: StringFilter<"ContadorEmitente"> | string
    emitente?: XOR<EmitenteRelationFilter, EmitenteWhereInput>
    contador?: XOR<ContadorRelationFilter, ContadorWhereInput>
  }, "id" | "emitenteId_contadorId">

  export type ContadorEmitenteOrderByWithAggregationInput = {
    id?: SortOrder
    emitenteId?: SortOrder
    contadorId?: SortOrder
    _count?: ContadorEmitenteCountOrderByAggregateInput
    _max?: ContadorEmitenteMaxOrderByAggregateInput
    _min?: ContadorEmitenteMinOrderByAggregateInput
  }

  export type ContadorEmitenteScalarWhereWithAggregatesInput = {
    AND?: ContadorEmitenteScalarWhereWithAggregatesInput | ContadorEmitenteScalarWhereWithAggregatesInput[]
    OR?: ContadorEmitenteScalarWhereWithAggregatesInput[]
    NOT?: ContadorEmitenteScalarWhereWithAggregatesInput | ContadorEmitenteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContadorEmitente"> | string
    emitenteId?: StringWithAggregatesFilter<"ContadorEmitente"> | string
    contadorId?: StringWithAggregatesFilter<"ContadorEmitente"> | string
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
    ie?: StringFilter<"Emitente"> | string
    createdAt?: DateTimeFilter<"Emitente"> | Date | string
    updatedAt?: DateTimeFilter<"Emitente"> | Date | string
    enderecos?: EnderecoListRelationFilter
    contadores?: ContadorEmitenteListRelationFilter
  }

  export type EmitenteOrderByWithRelationInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    cpf?: SortOrder
    ie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enderecos?: EnderecoOrderByRelationAggregateInput
    contadores?: ContadorEmitenteOrderByRelationAggregateInput
  }

  export type EmitenteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj_ie?: EmitenteCnpjIeCompoundUniqueInput
    cpf_ie?: EmitenteCpfIeCompoundUniqueInput
    AND?: EmitenteWhereInput | EmitenteWhereInput[]
    OR?: EmitenteWhereInput[]
    NOT?: EmitenteWhereInput | EmitenteWhereInput[]
    cod_dominio?: StringNullableFilter<"Emitente"> | string | null
    nome?: StringFilter<"Emitente"> | string
    razao_social?: StringFilter<"Emitente"> | string
    cnpj?: StringNullableFilter<"Emitente"> | string | null
    cpf?: StringNullableFilter<"Emitente"> | string | null
    ie?: StringFilter<"Emitente"> | string
    createdAt?: DateTimeFilter<"Emitente"> | Date | string
    updatedAt?: DateTimeFilter<"Emitente"> | Date | string
    enderecos?: EnderecoListRelationFilter
    contadores?: ContadorEmitenteListRelationFilter
  }, "id" | "cnpj_ie" | "cpf_ie">

  export type EmitenteOrderByWithAggregationInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    cpf?: SortOrder
    ie?: SortOrder
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
    ie?: StringWithAggregatesFilter<"Emitente"> | string
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

  export type UsuarioCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    contadores?: UsuarioContadorCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    contadores?: UsuarioContadorUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contadores?: UsuarioContadorUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contadores?: UsuarioContadorUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
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
    usuarios?: UsuarioContadorCreateNestedManyWithoutContadorInput
    emitentes?: ContadorEmitenteCreateNestedManyWithoutContadorInput
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
    usuarios?: UsuarioContadorUncheckedCreateNestedManyWithoutContadorInput
    emitentes?: ContadorEmitenteUncheckedCreateNestedManyWithoutContadorInput
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
    usuarios?: UsuarioContadorUpdateManyWithoutContadorNestedInput
    emitentes?: ContadorEmitenteUpdateManyWithoutContadorNestedInput
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
    usuarios?: UsuarioContadorUncheckedUpdateManyWithoutContadorNestedInput
    emitentes?: ContadorEmitenteUncheckedUpdateManyWithoutContadorNestedInput
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

  export type UsuarioContadorCreateInput = {
    id?: string
    Usuario: UsuarioCreateNestedOneWithoutContadoresInput
    contador: ContadorCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioContadorUncheckedCreateInput = {
    id?: string
    usuarioId: string
    contadorId: string
  }

  export type UsuarioContadorUpdateInput = {
    Usuario?: UsuarioUpdateOneRequiredWithoutContadoresNestedInput
    contador?: ContadorUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioContadorUncheckedUpdateInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioContadorCreateManyInput = {
    id?: string
    usuarioId: string
    contadorId: string
  }

  export type UsuarioContadorUpdateManyMutationInput = {

  }

  export type UsuarioContadorUncheckedUpdateManyInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type ContadorEmitenteCreateInput = {
    id?: string
    emitente: EmitenteCreateNestedOneWithoutContadoresInput
    contador: ContadorCreateNestedOneWithoutEmitentesInput
  }

  export type ContadorEmitenteUncheckedCreateInput = {
    id?: string
    emitenteId: string
    contadorId: string
  }

  export type ContadorEmitenteUpdateInput = {
    emitente?: EmitenteUpdateOneRequiredWithoutContadoresNestedInput
    contador?: ContadorUpdateOneRequiredWithoutEmitentesNestedInput
  }

  export type ContadorEmitenteUncheckedUpdateInput = {
    emitenteId?: StringFieldUpdateOperationsInput | string
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type ContadorEmitenteCreateManyInput = {
    id?: string
    emitenteId: string
    contadorId: string
  }

  export type ContadorEmitenteUpdateManyMutationInput = {

  }

  export type ContadorEmitenteUncheckedUpdateManyInput = {
    emitenteId?: StringFieldUpdateOperationsInput | string
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type EmitenteCreateInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    ie: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: EnderecoCreateNestedManyWithoutEmitenteInput
    contadores?: ContadorEmitenteCreateNestedManyWithoutEmitenteInput
  }

  export type EmitenteUncheckedCreateInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    ie: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutEmitenteInput
    contadores?: ContadorEmitenteUncheckedCreateNestedManyWithoutEmitenteInput
  }

  export type EmitenteUpdateInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUpdateManyWithoutEmitenteNestedInput
    contadores?: ContadorEmitenteUpdateManyWithoutEmitenteNestedInput
  }

  export type EmitenteUncheckedUpdateInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUncheckedUpdateManyWithoutEmitenteNestedInput
    contadores?: ContadorEmitenteUncheckedUpdateManyWithoutEmitenteNestedInput
  }

  export type EmitenteCreateManyInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    ie: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmitenteUpdateManyMutationInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmitenteUncheckedUpdateManyInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: StringFieldUpdateOperationsInput | string
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

  export type UsuarioContadorListRelationFilter = {
    every?: UsuarioContadorWhereInput
    some?: UsuarioContadorWhereInput
    none?: UsuarioContadorWhereInput
  }

  export type UsuarioContadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
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

  export type ContadorEmitenteListRelationFilter = {
    every?: ContadorEmitenteWhereInput
    some?: ContadorEmitenteWhereInput
    none?: ContadorEmitenteWhereInput
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

  export type ContadorEmitenteOrderByRelationAggregateInput = {
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

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ContadorRelationFilter = {
    is?: ContadorWhereInput
    isNot?: ContadorWhereInput
  }

  export type UsuarioContadorUsuarioIdContadorIdCompoundUniqueInput = {
    usuarioId: string
    contadorId: string
  }

  export type UsuarioContadorCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    contadorId?: SortOrder
  }

  export type UsuarioContadorMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    contadorId?: SortOrder
  }

  export type UsuarioContadorMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    contadorId?: SortOrder
  }

  export type EmitenteRelationFilter = {
    is?: EmitenteWhereInput
    isNot?: EmitenteWhereInput
  }

  export type ContadorEmitenteEmitenteIdContadorIdCompoundUniqueInput = {
    emitenteId: string
    contadorId: string
  }

  export type ContadorEmitenteCountOrderByAggregateInput = {
    id?: SortOrder
    emitenteId?: SortOrder
    contadorId?: SortOrder
  }

  export type ContadorEmitenteMaxOrderByAggregateInput = {
    id?: SortOrder
    emitenteId?: SortOrder
    contadorId?: SortOrder
  }

  export type ContadorEmitenteMinOrderByAggregateInput = {
    id?: SortOrder
    emitenteId?: SortOrder
    contadorId?: SortOrder
  }

  export type EnderecoListRelationFilter = {
    every?: EnderecoWhereInput
    some?: EnderecoWhereInput
    none?: EnderecoWhereInput
  }

  export type EnderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmitenteCnpjIeCompoundUniqueInput = {
    cnpj: string
    ie: string
  }

  export type EmitenteCpfIeCompoundUniqueInput = {
    cpf: string
    ie: string
  }

  export type EmitenteCountOrderByAggregateInput = {
    id?: SortOrder
    cod_dominio?: SortOrder
    nome?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    cpf?: SortOrder
    ie?: SortOrder
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
    ie?: SortOrder
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
    ie?: SortOrder
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

  export type ContadorNullableRelationFilter = {
    is?: ContadorWhereInput | null
    isNot?: ContadorWhereInput | null
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

  export type UsuarioContadorCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioContadorCreateWithoutUsuarioInput, UsuarioContadorUncheckedCreateWithoutUsuarioInput> | UsuarioContadorCreateWithoutUsuarioInput[] | UsuarioContadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioContadorCreateOrConnectWithoutUsuarioInput | UsuarioContadorCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioContadorCreateManyUsuarioInputEnvelope
    connect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
  }

  export type UsuarioContadorUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioContadorCreateWithoutUsuarioInput, UsuarioContadorUncheckedCreateWithoutUsuarioInput> | UsuarioContadorCreateWithoutUsuarioInput[] | UsuarioContadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioContadorCreateOrConnectWithoutUsuarioInput | UsuarioContadorCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioContadorCreateManyUsuarioInputEnvelope
    connect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
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

  export type UsuarioContadorUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioContadorCreateWithoutUsuarioInput, UsuarioContadorUncheckedCreateWithoutUsuarioInput> | UsuarioContadorCreateWithoutUsuarioInput[] | UsuarioContadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioContadorCreateOrConnectWithoutUsuarioInput | UsuarioContadorCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioContadorUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioContadorUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioContadorCreateManyUsuarioInputEnvelope
    set?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    disconnect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    delete?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    connect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    update?: UsuarioContadorUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioContadorUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioContadorUpdateManyWithWhereWithoutUsuarioInput | UsuarioContadorUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioContadorScalarWhereInput | UsuarioContadorScalarWhereInput[]
  }

  export type UsuarioContadorUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioContadorCreateWithoutUsuarioInput, UsuarioContadorUncheckedCreateWithoutUsuarioInput> | UsuarioContadorCreateWithoutUsuarioInput[] | UsuarioContadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioContadorCreateOrConnectWithoutUsuarioInput | UsuarioContadorCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioContadorUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioContadorUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioContadorCreateManyUsuarioInputEnvelope
    set?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    disconnect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    delete?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    connect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    update?: UsuarioContadorUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioContadorUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioContadorUpdateManyWithWhereWithoutUsuarioInput | UsuarioContadorUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioContadorScalarWhereInput | UsuarioContadorScalarWhereInput[]
  }

  export type UsuarioContadorCreateNestedManyWithoutContadorInput = {
    create?: XOR<UsuarioContadorCreateWithoutContadorInput, UsuarioContadorUncheckedCreateWithoutContadorInput> | UsuarioContadorCreateWithoutContadorInput[] | UsuarioContadorUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: UsuarioContadorCreateOrConnectWithoutContadorInput | UsuarioContadorCreateOrConnectWithoutContadorInput[]
    createMany?: UsuarioContadorCreateManyContadorInputEnvelope
    connect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
  }

  export type ContadorEmitenteCreateNestedManyWithoutContadorInput = {
    create?: XOR<ContadorEmitenteCreateWithoutContadorInput, ContadorEmitenteUncheckedCreateWithoutContadorInput> | ContadorEmitenteCreateWithoutContadorInput[] | ContadorEmitenteUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: ContadorEmitenteCreateOrConnectWithoutContadorInput | ContadorEmitenteCreateOrConnectWithoutContadorInput[]
    createMany?: ContadorEmitenteCreateManyContadorInputEnvelope
    connect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
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

  export type UsuarioContadorUncheckedCreateNestedManyWithoutContadorInput = {
    create?: XOR<UsuarioContadorCreateWithoutContadorInput, UsuarioContadorUncheckedCreateWithoutContadorInput> | UsuarioContadorCreateWithoutContadorInput[] | UsuarioContadorUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: UsuarioContadorCreateOrConnectWithoutContadorInput | UsuarioContadorCreateOrConnectWithoutContadorInput[]
    createMany?: UsuarioContadorCreateManyContadorInputEnvelope
    connect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
  }

  export type ContadorEmitenteUncheckedCreateNestedManyWithoutContadorInput = {
    create?: XOR<ContadorEmitenteCreateWithoutContadorInput, ContadorEmitenteUncheckedCreateWithoutContadorInput> | ContadorEmitenteCreateWithoutContadorInput[] | ContadorEmitenteUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: ContadorEmitenteCreateOrConnectWithoutContadorInput | ContadorEmitenteCreateOrConnectWithoutContadorInput[]
    createMany?: ContadorEmitenteCreateManyContadorInputEnvelope
    connect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
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

  export type UsuarioContadorUpdateManyWithoutContadorNestedInput = {
    create?: XOR<UsuarioContadorCreateWithoutContadorInput, UsuarioContadorUncheckedCreateWithoutContadorInput> | UsuarioContadorCreateWithoutContadorInput[] | UsuarioContadorUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: UsuarioContadorCreateOrConnectWithoutContadorInput | UsuarioContadorCreateOrConnectWithoutContadorInput[]
    upsert?: UsuarioContadorUpsertWithWhereUniqueWithoutContadorInput | UsuarioContadorUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: UsuarioContadorCreateManyContadorInputEnvelope
    set?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    disconnect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    delete?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    connect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    update?: UsuarioContadorUpdateWithWhereUniqueWithoutContadorInput | UsuarioContadorUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: UsuarioContadorUpdateManyWithWhereWithoutContadorInput | UsuarioContadorUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: UsuarioContadorScalarWhereInput | UsuarioContadorScalarWhereInput[]
  }

  export type ContadorEmitenteUpdateManyWithoutContadorNestedInput = {
    create?: XOR<ContadorEmitenteCreateWithoutContadorInput, ContadorEmitenteUncheckedCreateWithoutContadorInput> | ContadorEmitenteCreateWithoutContadorInput[] | ContadorEmitenteUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: ContadorEmitenteCreateOrConnectWithoutContadorInput | ContadorEmitenteCreateOrConnectWithoutContadorInput[]
    upsert?: ContadorEmitenteUpsertWithWhereUniqueWithoutContadorInput | ContadorEmitenteUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: ContadorEmitenteCreateManyContadorInputEnvelope
    set?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    disconnect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    delete?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    connect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    update?: ContadorEmitenteUpdateWithWhereUniqueWithoutContadorInput | ContadorEmitenteUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: ContadorEmitenteUpdateManyWithWhereWithoutContadorInput | ContadorEmitenteUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: ContadorEmitenteScalarWhereInput | ContadorEmitenteScalarWhereInput[]
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

  export type UsuarioContadorUncheckedUpdateManyWithoutContadorNestedInput = {
    create?: XOR<UsuarioContadorCreateWithoutContadorInput, UsuarioContadorUncheckedCreateWithoutContadorInput> | UsuarioContadorCreateWithoutContadorInput[] | UsuarioContadorUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: UsuarioContadorCreateOrConnectWithoutContadorInput | UsuarioContadorCreateOrConnectWithoutContadorInput[]
    upsert?: UsuarioContadorUpsertWithWhereUniqueWithoutContadorInput | UsuarioContadorUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: UsuarioContadorCreateManyContadorInputEnvelope
    set?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    disconnect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    delete?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    connect?: UsuarioContadorWhereUniqueInput | UsuarioContadorWhereUniqueInput[]
    update?: UsuarioContadorUpdateWithWhereUniqueWithoutContadorInput | UsuarioContadorUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: UsuarioContadorUpdateManyWithWhereWithoutContadorInput | UsuarioContadorUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: UsuarioContadorScalarWhereInput | UsuarioContadorScalarWhereInput[]
  }

  export type ContadorEmitenteUncheckedUpdateManyWithoutContadorNestedInput = {
    create?: XOR<ContadorEmitenteCreateWithoutContadorInput, ContadorEmitenteUncheckedCreateWithoutContadorInput> | ContadorEmitenteCreateWithoutContadorInput[] | ContadorEmitenteUncheckedCreateWithoutContadorInput[]
    connectOrCreate?: ContadorEmitenteCreateOrConnectWithoutContadorInput | ContadorEmitenteCreateOrConnectWithoutContadorInput[]
    upsert?: ContadorEmitenteUpsertWithWhereUniqueWithoutContadorInput | ContadorEmitenteUpsertWithWhereUniqueWithoutContadorInput[]
    createMany?: ContadorEmitenteCreateManyContadorInputEnvelope
    set?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    disconnect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    delete?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    connect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    update?: ContadorEmitenteUpdateWithWhereUniqueWithoutContadorInput | ContadorEmitenteUpdateWithWhereUniqueWithoutContadorInput[]
    updateMany?: ContadorEmitenteUpdateManyWithWhereWithoutContadorInput | ContadorEmitenteUpdateManyWithWhereWithoutContadorInput[]
    deleteMany?: ContadorEmitenteScalarWhereInput | ContadorEmitenteScalarWhereInput[]
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

  export type UsuarioCreateNestedOneWithoutContadoresInput = {
    create?: XOR<UsuarioCreateWithoutContadoresInput, UsuarioUncheckedCreateWithoutContadoresInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContadoresInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ContadorCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<ContadorCreateWithoutUsuariosInput, ContadorUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutUsuariosInput
    connect?: ContadorWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutContadoresNestedInput = {
    create?: XOR<UsuarioCreateWithoutContadoresInput, UsuarioUncheckedCreateWithoutContadoresInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContadoresInput
    upsert?: UsuarioUpsertWithoutContadoresInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutContadoresInput, UsuarioUpdateWithoutContadoresInput>, UsuarioUncheckedUpdateWithoutContadoresInput>
  }

  export type ContadorUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<ContadorCreateWithoutUsuariosInput, ContadorUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutUsuariosInput
    upsert?: ContadorUpsertWithoutUsuariosInput
    connect?: ContadorWhereUniqueInput
    update?: XOR<XOR<ContadorUpdateToOneWithWhereWithoutUsuariosInput, ContadorUpdateWithoutUsuariosInput>, ContadorUncheckedUpdateWithoutUsuariosInput>
  }

  export type EmitenteCreateNestedOneWithoutContadoresInput = {
    create?: XOR<EmitenteCreateWithoutContadoresInput, EmitenteUncheckedCreateWithoutContadoresInput>
    connectOrCreate?: EmitenteCreateOrConnectWithoutContadoresInput
    connect?: EmitenteWhereUniqueInput
  }

  export type ContadorCreateNestedOneWithoutEmitentesInput = {
    create?: XOR<ContadorCreateWithoutEmitentesInput, ContadorUncheckedCreateWithoutEmitentesInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutEmitentesInput
    connect?: ContadorWhereUniqueInput
  }

  export type EmitenteUpdateOneRequiredWithoutContadoresNestedInput = {
    create?: XOR<EmitenteCreateWithoutContadoresInput, EmitenteUncheckedCreateWithoutContadoresInput>
    connectOrCreate?: EmitenteCreateOrConnectWithoutContadoresInput
    upsert?: EmitenteUpsertWithoutContadoresInput
    connect?: EmitenteWhereUniqueInput
    update?: XOR<XOR<EmitenteUpdateToOneWithWhereWithoutContadoresInput, EmitenteUpdateWithoutContadoresInput>, EmitenteUncheckedUpdateWithoutContadoresInput>
  }

  export type ContadorUpdateOneRequiredWithoutEmitentesNestedInput = {
    create?: XOR<ContadorCreateWithoutEmitentesInput, ContadorUncheckedCreateWithoutEmitentesInput>
    connectOrCreate?: ContadorCreateOrConnectWithoutEmitentesInput
    upsert?: ContadorUpsertWithoutEmitentesInput
    connect?: ContadorWhereUniqueInput
    update?: XOR<XOR<ContadorUpdateToOneWithWhereWithoutEmitentesInput, ContadorUpdateWithoutEmitentesInput>, ContadorUncheckedUpdateWithoutEmitentesInput>
  }

  export type EnderecoCreateNestedManyWithoutEmitenteInput = {
    create?: XOR<EnderecoCreateWithoutEmitenteInput, EnderecoUncheckedCreateWithoutEmitenteInput> | EnderecoCreateWithoutEmitenteInput[] | EnderecoUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutEmitenteInput | EnderecoCreateOrConnectWithoutEmitenteInput[]
    createMany?: EnderecoCreateManyEmitenteInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type ContadorEmitenteCreateNestedManyWithoutEmitenteInput = {
    create?: XOR<ContadorEmitenteCreateWithoutEmitenteInput, ContadorEmitenteUncheckedCreateWithoutEmitenteInput> | ContadorEmitenteCreateWithoutEmitenteInput[] | ContadorEmitenteUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: ContadorEmitenteCreateOrConnectWithoutEmitenteInput | ContadorEmitenteCreateOrConnectWithoutEmitenteInput[]
    createMany?: ContadorEmitenteCreateManyEmitenteInputEnvelope
    connect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
  }

  export type EnderecoUncheckedCreateNestedManyWithoutEmitenteInput = {
    create?: XOR<EnderecoCreateWithoutEmitenteInput, EnderecoUncheckedCreateWithoutEmitenteInput> | EnderecoCreateWithoutEmitenteInput[] | EnderecoUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutEmitenteInput | EnderecoCreateOrConnectWithoutEmitenteInput[]
    createMany?: EnderecoCreateManyEmitenteInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type ContadorEmitenteUncheckedCreateNestedManyWithoutEmitenteInput = {
    create?: XOR<ContadorEmitenteCreateWithoutEmitenteInput, ContadorEmitenteUncheckedCreateWithoutEmitenteInput> | ContadorEmitenteCreateWithoutEmitenteInput[] | ContadorEmitenteUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: ContadorEmitenteCreateOrConnectWithoutEmitenteInput | ContadorEmitenteCreateOrConnectWithoutEmitenteInput[]
    createMany?: ContadorEmitenteCreateManyEmitenteInputEnvelope
    connect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
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

  export type ContadorEmitenteUpdateManyWithoutEmitenteNestedInput = {
    create?: XOR<ContadorEmitenteCreateWithoutEmitenteInput, ContadorEmitenteUncheckedCreateWithoutEmitenteInput> | ContadorEmitenteCreateWithoutEmitenteInput[] | ContadorEmitenteUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: ContadorEmitenteCreateOrConnectWithoutEmitenteInput | ContadorEmitenteCreateOrConnectWithoutEmitenteInput[]
    upsert?: ContadorEmitenteUpsertWithWhereUniqueWithoutEmitenteInput | ContadorEmitenteUpsertWithWhereUniqueWithoutEmitenteInput[]
    createMany?: ContadorEmitenteCreateManyEmitenteInputEnvelope
    set?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    disconnect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    delete?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    connect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    update?: ContadorEmitenteUpdateWithWhereUniqueWithoutEmitenteInput | ContadorEmitenteUpdateWithWhereUniqueWithoutEmitenteInput[]
    updateMany?: ContadorEmitenteUpdateManyWithWhereWithoutEmitenteInput | ContadorEmitenteUpdateManyWithWhereWithoutEmitenteInput[]
    deleteMany?: ContadorEmitenteScalarWhereInput | ContadorEmitenteScalarWhereInput[]
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

  export type ContadorEmitenteUncheckedUpdateManyWithoutEmitenteNestedInput = {
    create?: XOR<ContadorEmitenteCreateWithoutEmitenteInput, ContadorEmitenteUncheckedCreateWithoutEmitenteInput> | ContadorEmitenteCreateWithoutEmitenteInput[] | ContadorEmitenteUncheckedCreateWithoutEmitenteInput[]
    connectOrCreate?: ContadorEmitenteCreateOrConnectWithoutEmitenteInput | ContadorEmitenteCreateOrConnectWithoutEmitenteInput[]
    upsert?: ContadorEmitenteUpsertWithWhereUniqueWithoutEmitenteInput | ContadorEmitenteUpsertWithWhereUniqueWithoutEmitenteInput[]
    createMany?: ContadorEmitenteCreateManyEmitenteInputEnvelope
    set?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    disconnect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    delete?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    connect?: ContadorEmitenteWhereUniqueInput | ContadorEmitenteWhereUniqueInput[]
    update?: ContadorEmitenteUpdateWithWhereUniqueWithoutEmitenteInput | ContadorEmitenteUpdateWithWhereUniqueWithoutEmitenteInput[]
    updateMany?: ContadorEmitenteUpdateManyWithWhereWithoutEmitenteInput | ContadorEmitenteUpdateManyWithWhereWithoutEmitenteInput[]
    deleteMany?: ContadorEmitenteScalarWhereInput | ContadorEmitenteScalarWhereInput[]
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

  export type UsuarioContadorCreateWithoutUsuarioInput = {
    id?: string
    contador: ContadorCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioContadorUncheckedCreateWithoutUsuarioInput = {
    id?: string
    contadorId: string
  }

  export type UsuarioContadorCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioContadorWhereUniqueInput
    create: XOR<UsuarioContadorCreateWithoutUsuarioInput, UsuarioContadorUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioContadorCreateManyUsuarioInputEnvelope = {
    data: UsuarioContadorCreateManyUsuarioInput | UsuarioContadorCreateManyUsuarioInput[]
  }

  export type UsuarioContadorUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioContadorWhereUniqueInput
    update: XOR<UsuarioContadorUpdateWithoutUsuarioInput, UsuarioContadorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioContadorCreateWithoutUsuarioInput, UsuarioContadorUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioContadorUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioContadorWhereUniqueInput
    data: XOR<UsuarioContadorUpdateWithoutUsuarioInput, UsuarioContadorUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioContadorUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioContadorScalarWhereInput
    data: XOR<UsuarioContadorUpdateManyMutationInput, UsuarioContadorUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioContadorScalarWhereInput = {
    AND?: UsuarioContadorScalarWhereInput | UsuarioContadorScalarWhereInput[]
    OR?: UsuarioContadorScalarWhereInput[]
    NOT?: UsuarioContadorScalarWhereInput | UsuarioContadorScalarWhereInput[]
    id?: StringFilter<"UsuarioContador"> | string
    usuarioId?: StringFilter<"UsuarioContador"> | string
    contadorId?: StringFilter<"UsuarioContador"> | string
  }

  export type UsuarioContadorCreateWithoutContadorInput = {
    id?: string
    Usuario: UsuarioCreateNestedOneWithoutContadoresInput
  }

  export type UsuarioContadorUncheckedCreateWithoutContadorInput = {
    id?: string
    usuarioId: string
  }

  export type UsuarioContadorCreateOrConnectWithoutContadorInput = {
    where: UsuarioContadorWhereUniqueInput
    create: XOR<UsuarioContadorCreateWithoutContadorInput, UsuarioContadorUncheckedCreateWithoutContadorInput>
  }

  export type UsuarioContadorCreateManyContadorInputEnvelope = {
    data: UsuarioContadorCreateManyContadorInput | UsuarioContadorCreateManyContadorInput[]
  }

  export type ContadorEmitenteCreateWithoutContadorInput = {
    id?: string
    emitente: EmitenteCreateNestedOneWithoutContadoresInput
  }

  export type ContadorEmitenteUncheckedCreateWithoutContadorInput = {
    id?: string
    emitenteId: string
  }

  export type ContadorEmitenteCreateOrConnectWithoutContadorInput = {
    where: ContadorEmitenteWhereUniqueInput
    create: XOR<ContadorEmitenteCreateWithoutContadorInput, ContadorEmitenteUncheckedCreateWithoutContadorInput>
  }

  export type ContadorEmitenteCreateManyContadorInputEnvelope = {
    data: ContadorEmitenteCreateManyContadorInput | ContadorEmitenteCreateManyContadorInput[]
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

  export type UsuarioContadorUpsertWithWhereUniqueWithoutContadorInput = {
    where: UsuarioContadorWhereUniqueInput
    update: XOR<UsuarioContadorUpdateWithoutContadorInput, UsuarioContadorUncheckedUpdateWithoutContadorInput>
    create: XOR<UsuarioContadorCreateWithoutContadorInput, UsuarioContadorUncheckedCreateWithoutContadorInput>
  }

  export type UsuarioContadorUpdateWithWhereUniqueWithoutContadorInput = {
    where: UsuarioContadorWhereUniqueInput
    data: XOR<UsuarioContadorUpdateWithoutContadorInput, UsuarioContadorUncheckedUpdateWithoutContadorInput>
  }

  export type UsuarioContadorUpdateManyWithWhereWithoutContadorInput = {
    where: UsuarioContadorScalarWhereInput
    data: XOR<UsuarioContadorUpdateManyMutationInput, UsuarioContadorUncheckedUpdateManyWithoutContadorInput>
  }

  export type ContadorEmitenteUpsertWithWhereUniqueWithoutContadorInput = {
    where: ContadorEmitenteWhereUniqueInput
    update: XOR<ContadorEmitenteUpdateWithoutContadorInput, ContadorEmitenteUncheckedUpdateWithoutContadorInput>
    create: XOR<ContadorEmitenteCreateWithoutContadorInput, ContadorEmitenteUncheckedCreateWithoutContadorInput>
  }

  export type ContadorEmitenteUpdateWithWhereUniqueWithoutContadorInput = {
    where: ContadorEmitenteWhereUniqueInput
    data: XOR<ContadorEmitenteUpdateWithoutContadorInput, ContadorEmitenteUncheckedUpdateWithoutContadorInput>
  }

  export type ContadorEmitenteUpdateManyWithWhereWithoutContadorInput = {
    where: ContadorEmitenteScalarWhereInput
    data: XOR<ContadorEmitenteUpdateManyMutationInput, ContadorEmitenteUncheckedUpdateManyWithoutContadorInput>
  }

  export type ContadorEmitenteScalarWhereInput = {
    AND?: ContadorEmitenteScalarWhereInput | ContadorEmitenteScalarWhereInput[]
    OR?: ContadorEmitenteScalarWhereInput[]
    NOT?: ContadorEmitenteScalarWhereInput | ContadorEmitenteScalarWhereInput[]
    id?: StringFilter<"ContadorEmitente"> | string
    emitenteId?: StringFilter<"ContadorEmitente"> | string
    contadorId?: StringFilter<"ContadorEmitente"> | string
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

  export type UsuarioCreateWithoutContadoresInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutContadoresInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutContadoresInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutContadoresInput, UsuarioUncheckedCreateWithoutContadoresInput>
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
    emitentes?: ContadorEmitenteCreateNestedManyWithoutContadorInput
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
    emitentes?: ContadorEmitenteUncheckedCreateNestedManyWithoutContadorInput
    endereco?: EnderecoUncheckedCreateNestedOneWithoutContadorInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutContadorInput
  }

  export type ContadorCreateOrConnectWithoutUsuariosInput = {
    where: ContadorWhereUniqueInput
    create: XOR<ContadorCreateWithoutUsuariosInput, ContadorUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioUpsertWithoutContadoresInput = {
    update: XOR<UsuarioUpdateWithoutContadoresInput, UsuarioUncheckedUpdateWithoutContadoresInput>
    create: XOR<UsuarioCreateWithoutContadoresInput, UsuarioUncheckedCreateWithoutContadoresInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutContadoresInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutContadoresInput, UsuarioUncheckedUpdateWithoutContadoresInput>
  }

  export type UsuarioUpdateWithoutContadoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutContadoresInput = {
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
    emitentes?: ContadorEmitenteUpdateManyWithoutContadorNestedInput
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
    emitentes?: ContadorEmitenteUncheckedUpdateManyWithoutContadorNestedInput
    endereco?: EnderecoUncheckedUpdateOneWithoutContadorNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutContadorNestedInput
  }

  export type EmitenteCreateWithoutContadoresInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    ie: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: EnderecoCreateNestedManyWithoutEmitenteInput
  }

  export type EmitenteUncheckedCreateWithoutContadoresInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    ie: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutEmitenteInput
  }

  export type EmitenteCreateOrConnectWithoutContadoresInput = {
    where: EmitenteWhereUniqueInput
    create: XOR<EmitenteCreateWithoutContadoresInput, EmitenteUncheckedCreateWithoutContadoresInput>
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
    usuarios?: UsuarioContadorCreateNestedManyWithoutContadorInput
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
    usuarios?: UsuarioContadorUncheckedCreateNestedManyWithoutContadorInput
    endereco?: EnderecoUncheckedCreateNestedOneWithoutContadorInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutContadorInput
  }

  export type ContadorCreateOrConnectWithoutEmitentesInput = {
    where: ContadorWhereUniqueInput
    create: XOR<ContadorCreateWithoutEmitentesInput, ContadorUncheckedCreateWithoutEmitentesInput>
  }

  export type EmitenteUpsertWithoutContadoresInput = {
    update: XOR<EmitenteUpdateWithoutContadoresInput, EmitenteUncheckedUpdateWithoutContadoresInput>
    create: XOR<EmitenteCreateWithoutContadoresInput, EmitenteUncheckedCreateWithoutContadoresInput>
    where?: EmitenteWhereInput
  }

  export type EmitenteUpdateToOneWithWhereWithoutContadoresInput = {
    where?: EmitenteWhereInput
    data: XOR<EmitenteUpdateWithoutContadoresInput, EmitenteUncheckedUpdateWithoutContadoresInput>
  }

  export type EmitenteUpdateWithoutContadoresInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUpdateManyWithoutEmitenteNestedInput
  }

  export type EmitenteUncheckedUpdateWithoutContadoresInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUncheckedUpdateManyWithoutEmitenteNestedInput
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
    usuarios?: UsuarioContadorUpdateManyWithoutContadorNestedInput
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
    usuarios?: UsuarioContadorUncheckedUpdateManyWithoutContadorNestedInput
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

  export type ContadorEmitenteCreateWithoutEmitenteInput = {
    id?: string
    contador: ContadorCreateNestedOneWithoutEmitentesInput
  }

  export type ContadorEmitenteUncheckedCreateWithoutEmitenteInput = {
    id?: string
    contadorId: string
  }

  export type ContadorEmitenteCreateOrConnectWithoutEmitenteInput = {
    where: ContadorEmitenteWhereUniqueInput
    create: XOR<ContadorEmitenteCreateWithoutEmitenteInput, ContadorEmitenteUncheckedCreateWithoutEmitenteInput>
  }

  export type ContadorEmitenteCreateManyEmitenteInputEnvelope = {
    data: ContadorEmitenteCreateManyEmitenteInput | ContadorEmitenteCreateManyEmitenteInput[]
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

  export type ContadorEmitenteUpsertWithWhereUniqueWithoutEmitenteInput = {
    where: ContadorEmitenteWhereUniqueInput
    update: XOR<ContadorEmitenteUpdateWithoutEmitenteInput, ContadorEmitenteUncheckedUpdateWithoutEmitenteInput>
    create: XOR<ContadorEmitenteCreateWithoutEmitenteInput, ContadorEmitenteUncheckedCreateWithoutEmitenteInput>
  }

  export type ContadorEmitenteUpdateWithWhereUniqueWithoutEmitenteInput = {
    where: ContadorEmitenteWhereUniqueInput
    data: XOR<ContadorEmitenteUpdateWithoutEmitenteInput, ContadorEmitenteUncheckedUpdateWithoutEmitenteInput>
  }

  export type ContadorEmitenteUpdateManyWithWhereWithoutEmitenteInput = {
    where: ContadorEmitenteScalarWhereInput
    data: XOR<ContadorEmitenteUpdateManyMutationInput, ContadorEmitenteUncheckedUpdateManyWithoutEmitenteInput>
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
    usuarios?: UsuarioContadorCreateNestedManyWithoutContadorInput
    emitentes?: ContadorEmitenteCreateNestedManyWithoutContadorInput
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
    usuarios?: UsuarioContadorUncheckedCreateNestedManyWithoutContadorInput
    emitentes?: ContadorEmitenteUncheckedCreateNestedManyWithoutContadorInput
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
    usuarios?: UsuarioContadorUpdateManyWithoutContadorNestedInput
    emitentes?: ContadorEmitenteUpdateManyWithoutContadorNestedInput
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
    usuarios?: UsuarioContadorUncheckedUpdateManyWithoutContadorNestedInput
    emitentes?: ContadorEmitenteUncheckedUpdateManyWithoutContadorNestedInput
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
    usuarios?: UsuarioContadorCreateNestedManyWithoutContadorInput
    emitentes?: ContadorEmitenteCreateNestedManyWithoutContadorInput
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
    usuarios?: UsuarioContadorUncheckedCreateNestedManyWithoutContadorInput
    emitentes?: ContadorEmitenteUncheckedCreateNestedManyWithoutContadorInput
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
    ie: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contadores?: ContadorEmitenteCreateNestedManyWithoutEmitenteInput
  }

  export type EmitenteUncheckedCreateWithoutEnderecosInput = {
    id?: string
    cod_dominio?: string | null
    nome: string
    razao_social: string
    cnpj?: string | null
    cpf?: string | null
    ie: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contadores?: ContadorEmitenteUncheckedCreateNestedManyWithoutEmitenteInput
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
    usuarios?: UsuarioContadorUpdateManyWithoutContadorNestedInput
    emitentes?: ContadorEmitenteUpdateManyWithoutContadorNestedInput
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
    usuarios?: UsuarioContadorUncheckedUpdateManyWithoutContadorNestedInput
    emitentes?: ContadorEmitenteUncheckedUpdateManyWithoutContadorNestedInput
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
    ie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contadores?: ContadorEmitenteUpdateManyWithoutEmitenteNestedInput
  }

  export type EmitenteUncheckedUpdateWithoutEnderecosInput = {
    cod_dominio?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contadores?: ContadorEmitenteUncheckedUpdateManyWithoutEmitenteNestedInput
  }

  export type UsuarioContadorCreateManyUsuarioInput = {
    id?: string
    contadorId: string
  }

  export type UsuarioContadorUpdateWithoutUsuarioInput = {
    contador?: ContadorUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioContadorUncheckedUpdateWithoutUsuarioInput = {
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioContadorUncheckedUpdateManyWithoutUsuarioInput = {
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioContadorCreateManyContadorInput = {
    id?: string
    usuarioId: string
  }

  export type ContadorEmitenteCreateManyContadorInput = {
    id?: string
    emitenteId: string
  }

  export type CertificadoCreateManyContadorInput = {
    id?: string
    requerente?: string | null
    validade?: Date | string | null
    fileBase64?: string | null
    createdAt?: Date | string
  }

  export type UsuarioContadorUpdateWithoutContadorInput = {
    Usuario?: UsuarioUpdateOneRequiredWithoutContadoresNestedInput
  }

  export type UsuarioContadorUncheckedUpdateWithoutContadorInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioContadorUncheckedUpdateManyWithoutContadorInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ContadorEmitenteUpdateWithoutContadorInput = {
    emitente?: EmitenteUpdateOneRequiredWithoutContadoresNestedInput
  }

  export type ContadorEmitenteUncheckedUpdateWithoutContadorInput = {
    emitenteId?: StringFieldUpdateOperationsInput | string
  }

  export type ContadorEmitenteUncheckedUpdateManyWithoutContadorInput = {
    emitenteId?: StringFieldUpdateOperationsInput | string
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

  export type ContadorEmitenteCreateManyEmitenteInput = {
    id?: string
    contadorId: string
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

  export type ContadorEmitenteUpdateWithoutEmitenteInput = {
    contador?: ContadorUpdateOneRequiredWithoutEmitentesNestedInput
  }

  export type ContadorEmitenteUncheckedUpdateWithoutEmitenteInput = {
    contadorId?: StringFieldUpdateOperationsInput | string
  }

  export type ContadorEmitenteUncheckedUpdateManyWithoutEmitenteInput = {
    contadorId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContadorCountOutputTypeDefaultArgs instead
     */
    export type ContadorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContadorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmitenteCountOutputTypeDefaultArgs instead
     */
    export type EmitenteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmitenteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContadorDefaultArgs instead
     */
    export type ContadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContadorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioContadorDefaultArgs instead
     */
    export type UsuarioContadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioContadorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContadorEmitenteDefaultArgs instead
     */
    export type ContadorEmitenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContadorEmitenteDefaultArgs<ExtArgs>
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