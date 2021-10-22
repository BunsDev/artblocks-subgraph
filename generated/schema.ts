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

    this.set("projectId", Value.fromBigInt(BigInt.zero()));
    this.set("active", Value.fromBoolean(false));
    this.set("artist", Value.fromString(""));
    this.set("artistAddress", Value.fromBytes(Bytes.empty()));
    this.set("complete", Value.fromBoolean(false));
    this.set("dynamic", Value.fromBoolean(false));
    this.set("invocations", Value.fromBigInt(BigInt.zero()));
    this.set("locked", Value.fromBoolean(false));
    this.set("maxInvocations", Value.fromBigInt(BigInt.zero()));
    this.set("paused", Value.fromBoolean(false));
    this.set("pricePerTokenInWei", Value.fromBigInt(BigInt.zero()));
    this.set("scriptCount", Value.fromBigInt(BigInt.zero()));
    this.set("useHashString", Value.fromBoolean(false));
    this.set("useIpfs", Value.fromBoolean(false));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("updatedAt", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Project entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Project entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Project", id.toString(), this);
    }
  }

  static load(id: string): Project | null {
    return changetype<Project | null>(store.get("Project", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get projectId(): BigInt {
    let value = this.get("projectId");
    return value!.toBigInt();
  }

  set projectId(value: BigInt) {
    this.set("projectId", Value.fromBigInt(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value!.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }

  get additionalPayee(): Bytes | null {
    let value = this.get("additionalPayee");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set additionalPayee(value: Bytes | null) {
    if (!value) {
      this.unset("additionalPayee");
    } else {
      this.set("additionalPayee", Value.fromBytes(<Bytes>value));
    }
  }

  get additionalPayeePercentage(): BigInt | null {
    let value = this.get("additionalPayeePercentage");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set additionalPayeePercentage(value: BigInt | null) {
    if (!value) {
      this.unset("additionalPayeePercentage");
    } else {
      this.set("additionalPayeePercentage", Value.fromBigInt(<BigInt>value));
    }
  }

  get artist(): string {
    let value = this.get("artist");
    return value!.toString();
  }

  set artist(value: string) {
    this.set("artist", Value.fromString(value));
  }

  get artistAddress(): Bytes {
    let value = this.get("artistAddress");
    return value!.toBytes();
  }

  set artistAddress(value: Bytes) {
    this.set("artistAddress", Value.fromBytes(value));
  }

  get artistName(): string | null {
    let value = this.get("artistName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set artistName(value: string | null) {
    if (!value) {
      this.unset("artistName");
    } else {
      this.set("artistName", Value.fromString(<string>value));
    }
  }

  get baseIpfsUri(): string | null {
    let value = this.get("baseIpfsUri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set baseIpfsUri(value: string | null) {
    if (!value) {
      this.unset("baseIpfsUri");
    } else {
      this.set("baseIpfsUri", Value.fromString(<string>value));
    }
  }

  get baseUri(): string | null {
    let value = this.get("baseUri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set baseUri(value: string | null) {
    if (!value) {
      this.unset("baseUri");
    } else {
      this.set("baseUri", Value.fromString(<string>value));
    }
  }

  get complete(): boolean {
    let value = this.get("complete");
    return value!.toBoolean();
  }

  set complete(value: boolean) {
    this.set("complete", Value.fromBoolean(value));
  }

  get curationStatus(): string | null {
    let value = this.get("curationStatus");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set curationStatus(value: string | null) {
    if (!value) {
      this.unset("curationStatus");
    } else {
      this.set("curationStatus", Value.fromString(<string>value));
    }
  }

  get currencyAddress(): Bytes | null {
    let value = this.get("currencyAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set currencyAddress(value: Bytes | null) {
    if (!value) {
      this.unset("currencyAddress");
    } else {
      this.set("currencyAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get currencySymbol(): string | null {
    let value = this.get("currencySymbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currencySymbol(value: string | null) {
    if (!value) {
      this.unset("currencySymbol");
    } else {
      this.set("currencySymbol", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get dynamic(): boolean {
    let value = this.get("dynamic");
    return value!.toBoolean();
  }

  set dynamic(value: boolean) {
    this.set("dynamic", Value.fromBoolean(value));
  }

  get invocations(): BigInt {
    let value = this.get("invocations");
    return value!.toBigInt();
  }

  set invocations(value: BigInt) {
    this.set("invocations", Value.fromBigInt(value));
  }

  get ipfsHash(): string | null {
    let value = this.get("ipfsHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ipfsHash(value: string | null) {
    if (!value) {
      this.unset("ipfsHash");
    } else {
      this.set("ipfsHash", Value.fromString(<string>value));
    }
  }

  get license(): string | null {
    let value = this.get("license");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set license(value: string | null) {
    if (!value) {
      this.unset("license");
    } else {
      this.set("license", Value.fromString(<string>value));
    }
  }

  get locked(): boolean {
    let value = this.get("locked");
    return value!.toBoolean();
  }

  set locked(value: boolean) {
    this.set("locked", Value.fromBoolean(value));
  }

  get maxInvocations(): BigInt {
    let value = this.get("maxInvocations");
    return value!.toBigInt();
  }

  set maxInvocations(value: BigInt) {
    this.set("maxInvocations", Value.fromBigInt(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get paused(): boolean {
    let value = this.get("paused");
    return value!.toBoolean();
  }

  set paused(value: boolean) {
    this.set("paused", Value.fromBoolean(value));
  }

  get pricePerTokenInWei(): BigInt {
    let value = this.get("pricePerTokenInWei");
    return value!.toBigInt();
  }

  set pricePerTokenInWei(value: BigInt) {
    this.set("pricePerTokenInWei", Value.fromBigInt(value));
  }

  get royaltyPercentage(): BigInt | null {
    let value = this.get("royaltyPercentage");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set royaltyPercentage(value: BigInt | null) {
    if (!value) {
      this.unset("royaltyPercentage");
    } else {
      this.set("royaltyPercentage", Value.fromBigInt(<BigInt>value));
    }
  }

  get script(): string | null {
    let value = this.get("script");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set script(value: string | null) {
    if (!value) {
      this.unset("script");
    } else {
      this.set("script", Value.fromString(<string>value));
    }
  }

  get scripts(): Array<string> | null {
    let value = this.get("scripts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set scripts(value: Array<string> | null) {
    if (!value) {
      this.unset("scripts");
    } else {
      this.set("scripts", Value.fromStringArray(<Array<string>>value));
    }
  }

  get scriptCount(): BigInt {
    let value = this.get("scriptCount");
    return value!.toBigInt();
  }

  set scriptCount(value: BigInt) {
    this.set("scriptCount", Value.fromBigInt(value));
  }

  get scriptJSON(): string | null {
    let value = this.get("scriptJSON");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set scriptJSON(value: string | null) {
    if (!value) {
      this.unset("scriptJSON");
    } else {
      this.set("scriptJSON", Value.fromString(<string>value));
    }
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (!value) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(<Array<string>>value));
    }
  }

  get useHashString(): boolean {
    let value = this.get("useHashString");
    return value!.toBoolean();
  }

  set useHashString(value: boolean) {
    this.set("useHashString", Value.fromBoolean(value));
  }

  get useIpfs(): boolean {
    let value = this.get("useIpfs");
    return value!.toBoolean();
  }

  set useIpfs(value: boolean) {
    this.set("useIpfs", Value.fromBoolean(value));
  }

  get website(): string | null {
    let value = this.get("website");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set website(value: string | null) {
    if (!value) {
      this.unset("website");
    } else {
      this.set("website", Value.fromString(<string>value));
    }
  }

  get owners(): Array<string> | null {
    let value = this.get("owners");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set owners(value: Array<string> | null) {
    if (!value) {
      this.unset("owners");
    } else {
      this.set("owners", Value.fromStringArray(<Array<string>>value));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value!.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get activatedAt(): BigInt | null {
    let value = this.get("activatedAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set activatedAt(value: BigInt | null) {
    if (!value) {
      this.unset("activatedAt");
    } else {
      this.set("activatedAt", Value.fromBigInt(<BigInt>value));
    }
  }

  get scriptUpdatedAt(): BigInt | null {
    let value = this.get("scriptUpdatedAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set scriptUpdatedAt(value: BigInt | null) {
    if (!value) {
      this.unset("scriptUpdatedAt");
    } else {
      this.set("scriptUpdatedAt", Value.fromBigInt(<BigInt>value));
    }
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get openSeaSaleLookupTables(): Array<string> {
    let value = this.get("openSeaSaleLookupTables");
    return value!.toStringArray();
  }

  set openSeaSaleLookupTables(value: Array<string>) {
    this.set("openSeaSaleLookupTables", Value.fromStringArray(value));
  }
}

export class ProjectScript extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("index", Value.fromBigInt(BigInt.zero()));
    this.set("project", Value.fromString(""));
    this.set("script", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProjectScript entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ProjectScript entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ProjectScript", id.toString(), this);
    }
  }

  static load(id: string): ProjectScript | null {
    return changetype<ProjectScript | null>(store.get("ProjectScript", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get project(): string {
    let value = this.get("project");
    return value!.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get script(): string {
    let value = this.get("script");
    return value!.toString();
  }

  set script(value: string) {
    this.set("script", Value.fromString(value));
  }
}

export class Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("admin", Value.fromBytes(Bytes.empty()));
    this.set("renderProviderAddress", Value.fromBytes(Bytes.empty()));
    this.set("renderProviderPercentage", Value.fromBigInt(BigInt.zero()));
    this.set("mintWhitelisted", Value.fromBytesArray(new Array(0)));
    this.set("nextProjectId", Value.fromBigInt(BigInt.zero()));
    this.set("updatedAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Contract entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Contract", id.toString(), this);
    }
  }

  static load(id: string): Contract | null {
    return changetype<Contract | null>(store.get("Contract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get admin(): Bytes {
    let value = this.get("admin");
    return value!.toBytes();
  }

  set admin(value: Bytes) {
    this.set("admin", Value.fromBytes(value));
  }

  get renderProviderAddress(): Bytes {
    let value = this.get("renderProviderAddress");
    return value!.toBytes();
  }

  set renderProviderAddress(value: Bytes) {
    this.set("renderProviderAddress", Value.fromBytes(value));
  }

  get renderProviderPercentage(): BigInt {
    let value = this.get("renderProviderPercentage");
    return value!.toBigInt();
  }

  set renderProviderPercentage(value: BigInt) {
    this.set("renderProviderPercentage", Value.fromBigInt(value));
  }

  get mintWhitelisted(): Array<Bytes> {
    let value = this.get("mintWhitelisted");
    return value!.toBytesArray();
  }

  set mintWhitelisted(value: Array<Bytes>) {
    this.set("mintWhitelisted", Value.fromBytesArray(value));
  }

  get randomizerContract(): Bytes | null {
    let value = this.get("randomizerContract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set randomizerContract(value: Bytes | null) {
    if (!value) {
      this.unset("randomizerContract");
    } else {
      this.set("randomizerContract", Value.fromBytes(<Bytes>value));
    }
  }

  get nextProjectId(): BigInt {
    let value = this.get("nextProjectId");
    return value!.toBigInt();
  }

  set nextProjectId(value: BigInt) {
    this.set("nextProjectId", Value.fromBigInt(value));
  }

  get projects(): Array<string> | null {
    let value = this.get("projects");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set projects(value: Array<string> | null) {
    if (!value) {
      this.unset("projects");
    } else {
      this.set("projects", Value.fromStringArray(<Array<string>>value));
    }
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (!value) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(<Array<string>>value));
    }
  }

  get whitelisted(): Array<string> | null {
    let value = this.get("whitelisted");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set whitelisted(value: Array<string> | null) {
    if (!value) {
      this.unset("whitelisted");
    } else {
      this.set("whitelisted", Value.fromStringArray(<Array<string>>value));
    }
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value!.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }
}

export class Whitelisting extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromString(""));
    this.set("contract", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Whitelisting entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Whitelisting entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Whitelisting", id.toString(), this);
    }
  }

  static load(id: string): Whitelisting | null {
    return changetype<Whitelisting | null>(store.get("Whitelisting", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
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
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (!value) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(<Array<string>>value));
    }
  }

  get projectsOwned(): Array<string> | null {
    let value = this.get("projectsOwned");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set projectsOwned(value: Array<string> | null) {
    if (!value) {
      this.unset("projectsOwned");
    } else {
      this.set("projectsOwned", Value.fromStringArray(<Array<string>>value));
    }
  }

  get projectsCreated(): Array<string> | null {
    let value = this.get("projectsCreated");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set projectsCreated(value: Array<string> | null) {
    if (!value) {
      this.unset("projectsCreated");
    } else {
      this.set("projectsCreated", Value.fromStringArray(<Array<string>>value));
    }
  }

  get whitelistedOn(): Array<string> | null {
    let value = this.get("whitelistedOn");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set whitelistedOn(value: Array<string> | null) {
    if (!value) {
      this.unset("whitelistedOn");
    } else {
      this.set("whitelistedOn", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class AccountProject extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromString(""));
    this.set("project", Value.fromString(""));
    this.set("count", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccountProject entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccountProject entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccountProject", id.toString(), this);
    }
  }

  static load(id: string): AccountProject | null {
    return changetype<AccountProject | null>(store.get("AccountProject", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get project(): string {
    let value = this.get("project");
    return value!.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value!.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromString(""));
    this.set("invocation", Value.fromBigInt(BigInt.zero()));
    this.set("hash", Value.fromBytes(Bytes.empty()));
    this.set("owner", Value.fromString(""));
    this.set("project", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("updatedAt", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get invocation(): BigInt {
    let value = this.get("invocation");
    return value!.toBigInt();
  }

  set invocation(value: BigInt) {
    this.set("invocation", Value.fromBigInt(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    return value!.toBytes();
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get project(): string {
    let value = this.get("project");
    return value!.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value!.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get openSeaSaleLookupTables(): Array<string> {
    let value = this.get("openSeaSaleLookupTables");
    return value!.toStringArray();
  }

  set openSeaSaleLookupTables(value: Array<string>) {
    this.set("openSeaSaleLookupTables", Value.fromStringArray(value));
  }
}

export class OpenSeaSale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("blockTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("summaryTokensSold", Value.fromString(""));
    this.set("seller", Value.fromBytes(Bytes.empty()));
    this.set("buyer", Value.fromBytes(Bytes.empty()));
    this.set("paymentToken", Value.fromBytes(Bytes.empty()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("isPrivate", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OpenSeaSale entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OpenSeaSale entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OpenSeaSale", id.toString(), this);
    }
  }

  static load(id: string): OpenSeaSale | null {
    return changetype<OpenSeaSale | null>(store.get("OpenSeaSale", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get saleType(): string | null {
    let value = this.get("saleType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set saleType(value: string | null) {
    if (!value) {
      this.unset("saleType");
    } else {
      this.set("saleType", Value.fromString(<string>value));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get summaryTokensSold(): string {
    let value = this.get("summaryTokensSold");
    return value!.toString();
  }

  set summaryTokensSold(value: string) {
    this.set("summaryTokensSold", Value.fromString(value));
  }

  get openSeaSaleLookupTables(): Array<string> {
    let value = this.get("openSeaSaleLookupTables");
    return value!.toStringArray();
  }

  set openSeaSaleLookupTables(value: Array<string>) {
    this.set("openSeaSaleLookupTables", Value.fromStringArray(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get paymentToken(): Bytes {
    let value = this.get("paymentToken");
    return value!.toBytes();
  }

  set paymentToken(value: Bytes) {
    this.set("paymentToken", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get isPrivate(): boolean {
    let value = this.get("isPrivate");
    return value!.toBoolean();
  }

  set isPrivate(value: boolean) {
    this.set("isPrivate", Value.fromBoolean(value));
  }
}

export class OpenSeaSaleLookupTable extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("project", Value.fromString(""));
    this.set("token", Value.fromString(""));
    this.set("openSeaSale", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save OpenSeaSaleLookupTable entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OpenSeaSaleLookupTable entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OpenSeaSaleLookupTable", id.toString(), this);
    }
  }

  static load(id: string): OpenSeaSaleLookupTable | null {
    return changetype<OpenSeaSaleLookupTable | null>(
      store.get("OpenSeaSaleLookupTable", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get project(): string {
    let value = this.get("project");
    return value!.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get openSeaSale(): string {
    let value = this.get("openSeaSale");
    return value!.toString();
  }

  set openSeaSale(value: string) {
    this.set("openSeaSale", Value.fromString(value));
  }
}
