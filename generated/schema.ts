// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Project extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Project entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Project entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Project", id.toString(), this);
  }

  static load(id: string): Project | null {
    return store.get("Project", id) as Project | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }

  get additionalPayee(): Bytes | null {
    let value = this.get("additionalPayee");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set additionalPayee(value: Bytes | null) {
    if (value === null) {
      this.unset("additionalPayee");
    } else {
      this.set("additionalPayee", Value.fromBytes(value as Bytes));
    }
  }

  get additionalPayeePercentage(): BigInt | null {
    let value = this.get("additionalPayeePercentage");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set additionalPayeePercentage(value: BigInt | null) {
    if (value === null) {
      this.unset("additionalPayeePercentage");
    } else {
      this.set("additionalPayeePercentage", Value.fromBigInt(value as BigInt));
    }
  }

  get artist(): string {
    let value = this.get("artist");
    return value.toString();
  }

  set artist(value: string) {
    this.set("artist", Value.fromString(value));
  }

  get artistAddress(): Bytes {
    let value = this.get("artistAddress");
    return value.toBytes();
  }

  set artistAddress(value: Bytes) {
    this.set("artistAddress", Value.fromBytes(value));
  }

  get artistName(): string | null {
    let value = this.get("artistName");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set artistName(value: string | null) {
    if (value === null) {
      this.unset("artistName");
    } else {
      this.set("artistName", Value.fromString(value as string));
    }
  }

  get baseIpfsUri(): string | null {
    let value = this.get("baseIpfsUri");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set baseIpfsUri(value: string | null) {
    if (value === null) {
      this.unset("baseIpfsUri");
    } else {
      this.set("baseIpfsUri", Value.fromString(value as string));
    }
  }

  get baseUri(): string | null {
    let value = this.get("baseUri");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set baseUri(value: string | null) {
    if (value === null) {
      this.unset("baseUri");
    } else {
      this.set("baseUri", Value.fromString(value as string));
    }
  }

  get complete(): boolean {
    let value = this.get("complete");
    return value.toBoolean();
  }

  set complete(value: boolean) {
    this.set("complete", Value.fromBoolean(value));
  }

  get curationStatus(): string | null {
    let value = this.get("curationStatus");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set curationStatus(value: string | null) {
    if (value === null) {
      this.unset("curationStatus");
    } else {
      this.set("curationStatus", Value.fromString(value as string));
    }
  }

  get currencyAddress(): Bytes | null {
    let value = this.get("currencyAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set currencyAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("currencyAddress");
    } else {
      this.set("currencyAddress", Value.fromBytes(value as Bytes));
    }
  }

  get currencySymbol(): string | null {
    let value = this.get("currencySymbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currencySymbol(value: string | null) {
    if (value === null) {
      this.unset("currencySymbol");
    } else {
      this.set("currencySymbol", Value.fromString(value as string));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get dynamic(): boolean {
    let value = this.get("dynamic");
    return value.toBoolean();
  }

  set dynamic(value: boolean) {
    this.set("dynamic", Value.fromBoolean(value));
  }

  get invocations(): BigInt {
    let value = this.get("invocations");
    return value.toBigInt();
  }

  set invocations(value: BigInt) {
    this.set("invocations", Value.fromBigInt(value));
  }

  get ipfsHash(): string | null {
    let value = this.get("ipfsHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ipfsHash(value: string | null) {
    if (value === null) {
      this.unset("ipfsHash");
    } else {
      this.set("ipfsHash", Value.fromString(value as string));
    }
  }

  get license(): string | null {
    let value = this.get("license");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set license(value: string | null) {
    if (value === null) {
      this.unset("license");
    } else {
      this.set("license", Value.fromString(value as string));
    }
  }

  get locked(): boolean {
    let value = this.get("locked");
    return value.toBoolean();
  }

  set locked(value: boolean) {
    this.set("locked", Value.fromBoolean(value));
  }

  get maxInvocations(): BigInt {
    let value = this.get("maxInvocations");
    return value.toBigInt();
  }

  set maxInvocations(value: BigInt) {
    this.set("maxInvocations", Value.fromBigInt(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get paused(): boolean {
    let value = this.get("paused");
    return value.toBoolean();
  }

  set paused(value: boolean) {
    this.set("paused", Value.fromBoolean(value));
  }

  get pricePerTokenInWei(): BigInt {
    let value = this.get("pricePerTokenInWei");
    return value.toBigInt();
  }

  set pricePerTokenInWei(value: BigInt) {
    this.set("pricePerTokenInWei", Value.fromBigInt(value));
  }

  get royaltyPercentage(): BigInt | null {
    let value = this.get("royaltyPercentage");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set royaltyPercentage(value: BigInt | null) {
    if (value === null) {
      this.unset("royaltyPercentage");
    } else {
      this.set("royaltyPercentage", Value.fromBigInt(value as BigInt));
    }
  }

  get script(): string | null {
    let value = this.get("script");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set script(value: string | null) {
    if (value === null) {
      this.unset("script");
    } else {
      this.set("script", Value.fromString(value as string));
    }
  }

  get scriptCount(): BigInt {
    let value = this.get("scriptCount");
    return value.toBigInt();
  }

  set scriptCount(value: BigInt) {
    this.set("scriptCount", Value.fromBigInt(value));
  }

  get scriptJSON(): string | null {
    let value = this.get("scriptJSON");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set scriptJSON(value: string | null) {
    if (value === null) {
      this.unset("scriptJSON");
    } else {
      this.set("scriptJSON", Value.fromString(value as string));
    }
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(value as Array<string>));
    }
  }

  get useHashString(): boolean {
    let value = this.get("useHashString");
    return value.toBoolean();
  }

  set useHashString(value: boolean) {
    this.set("useHashString", Value.fromBoolean(value));
  }

  get useIpfs(): boolean {
    let value = this.get("useIpfs");
    return value.toBoolean();
  }

  set useIpfs(value: boolean) {
    this.set("useIpfs", Value.fromBoolean(value));
  }

  get website(): string | null {
    let value = this.get("website");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set website(value: string | null) {
    if (value === null) {
      this.unset("website");
    } else {
      this.set("website", Value.fromString(value as string));
    }
  }

  get osTotalVolumeInWei(): BigInt {
    let value = this.get("osTotalVolumeInWei");
    return value.toBigInt();
  }

  set osTotalVolumeInWei(value: BigInt) {
    this.set("osTotalVolumeInWei", Value.fromBigInt(value));
  }

  get owners(): Array<string> | null {
    let value = this.get("owners");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set owners(value: Array<string> | null) {
    if (value === null) {
      this.unset("owners");
    } else {
      this.set("owners", Value.fromStringArray(value as Array<string>));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get activatedAt(): BigInt | null {
    let value = this.get("activatedAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set activatedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("activatedAt");
    } else {
      this.set("activatedAt", Value.fromBigInt(value as BigInt));
    }
  }

  get scriptUpdatedAt(): BigInt | null {
    let value = this.get("scriptUpdatedAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set scriptUpdatedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("scriptUpdatedAt");
    } else {
      this.set("scriptUpdatedAt", Value.fromBigInt(value as BigInt));
    }
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }
}

export class Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Contract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Contract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Contract", id.toString(), this);
  }

  static load(id: string): Contract | null {
    return store.get("Contract", id) as Contract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get admin(): Bytes {
    let value = this.get("admin");
    return value.toBytes();
  }

  set admin(value: Bytes) {
    this.set("admin", Value.fromBytes(value));
  }

  get artblocksAddress(): Bytes {
    let value = this.get("artblocksAddress");
    return value.toBytes();
  }

  set artblocksAddress(value: Bytes) {
    this.set("artblocksAddress", Value.fromBytes(value));
  }

  get artblocksPercentage(): BigInt {
    let value = this.get("artblocksPercentage");
    return value.toBigInt();
  }

  set artblocksPercentage(value: BigInt) {
    this.set("artblocksPercentage", Value.fromBigInt(value));
  }

  get mintWhitelisted(): Array<Bytes> {
    let value = this.get("mintWhitelisted");
    return value.toBytesArray();
  }

  set mintWhitelisted(value: Array<Bytes>) {
    this.set("mintWhitelisted", Value.fromBytesArray(value));
  }

  get randomizerContract(): Bytes | null {
    let value = this.get("randomizerContract");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set randomizerContract(value: Bytes | null) {
    if (value === null) {
      this.unset("randomizerContract");
    } else {
      this.set("randomizerContract", Value.fromBytes(value as Bytes));
    }
  }

  get nextProjectId(): BigInt {
    let value = this.get("nextProjectId");
    return value.toBigInt();
  }

  set nextProjectId(value: BigInt) {
    this.set("nextProjectId", Value.fromBigInt(value));
  }

  get projects(): Array<string> | null {
    let value = this.get("projects");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set projects(value: Array<string> | null) {
    if (value === null) {
      this.unset("projects");
    } else {
      this.set("projects", Value.fromStringArray(value as Array<string>));
    }
  }

  get whitelisted(): Array<string> | null {
    let value = this.get("whitelisted");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set whitelisted(value: Array<string> | null) {
    if (value === null) {
      this.unset("whitelisted");
    } else {
      this.set("whitelisted", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Whitelisting extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Whitelisting entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Whitelisting entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Whitelisting", id.toString(), this);
  }

  static load(id: string): Whitelisting | null {
    return store.get("Whitelisting", id) as Whitelisting | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(value as Array<string>));
    }
  }

  get projectsOwned(): Array<string> | null {
    let value = this.get("projectsOwned");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set projectsOwned(value: Array<string> | null) {
    if (value === null) {
      this.unset("projectsOwned");
    } else {
      this.set("projectsOwned", Value.fromStringArray(value as Array<string>));
    }
  }

  get projectsCreated(): Array<string> | null {
    let value = this.get("projectsCreated");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set projectsCreated(value: Array<string> | null) {
    if (value === null) {
      this.unset("projectsCreated");
    } else {
      this.set(
        "projectsCreated",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }

  get whitelistedOn(): Array<string> | null {
    let value = this.get("whitelistedOn");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set whitelistedOn(value: Array<string> | null) {
    if (value === null) {
      this.unset("whitelistedOn");
    } else {
      this.set("whitelistedOn", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class AccountProject extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AccountProject entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AccountProject entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AccountProject", id.toString(), this);
  }

  static load(id: string): AccountProject | null {
    return store.get("AccountProject", id) as AccountProject | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get project(): string {
    let value = this.get("project");
    return value.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get invocation(): BigInt {
    let value = this.get("invocation");
    return value.toBigInt();
  }

  set invocation(value: BigInt) {
    this.set("invocation", Value.fromBigInt(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    return value.toBytes();
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get project(): string {
    let value = this.get("project");
    return value.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (value === null) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(value as string));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get tokenOpenSeaSaleLookupTable(): Array<string> {
    let value = this.get("tokenOpenSeaSaleLookupTable");
    return value.toStringArray();
  }

  set tokenOpenSeaSaleLookupTable(value: Array<string>) {
    this.set("tokenOpenSeaSaleLookupTable", Value.fromStringArray(value));
  }
}

export class OpenSeaSale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OpenSeaSale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OpenSeaSale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OpenSeaSale", id.toString(), this);
  }

  static load(id: string): OpenSeaSale | null {
    return store.get("OpenSeaSale", id) as OpenSeaSale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get saleType(): string | null {
    let value = this.get("saleType");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set saleType(value: string | null) {
    if (value === null) {
      this.unset("saleType");
    } else {
      this.set("saleType", Value.fromString(value as string));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get summaryTokensSold(): string {
    let value = this.get("summaryTokensSold");
    return value.toString();
  }

  set summaryTokensSold(value: string) {
    this.set("summaryTokensSold", Value.fromString(value));
  }

  get tokenOpenSeaSaleLookupTable(): Array<string> {
    let value = this.get("tokenOpenSeaSaleLookupTable");
    return value.toStringArray();
  }

  set tokenOpenSeaSaleLookupTable(value: Array<string>) {
    this.set("tokenOpenSeaSaleLookupTable", Value.fromStringArray(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get paymentToken(): Bytes {
    let value = this.get("paymentToken");
    return value.toBytes();
  }

  set paymentToken(value: Bytes) {
    this.set("paymentToken", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class TokenOpenSeaSaleLookupTable extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save TokenOpenSeaSaleLookupTable entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenOpenSeaSaleLookupTable entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenOpenSeaSaleLookupTable", id.toString(), this);
  }

  static load(id: string): TokenOpenSeaSaleLookupTable | null {
    return store.get(
      "TokenOpenSeaSaleLookupTable",
      id
    ) as TokenOpenSeaSaleLookupTable | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get openSeaSale(): string {
    let value = this.get("openSeaSale");
    return value.toString();
  }

  set openSeaSale(value: string) {
    this.set("openSeaSale", Value.fromString(value));
  }
}
