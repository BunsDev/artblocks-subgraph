// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AllowedHoldersOfProjects extends ethereum.Event {
  get params(): AllowedHoldersOfProjects__Params {
    return new AllowedHoldersOfProjects__Params(this);
  }
}

export class AllowedHoldersOfProjects__Params {
  _event: AllowedHoldersOfProjects;

  constructor(event: AllowedHoldersOfProjects) {
    this._event = event;
  }

  get _projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _ownedNFTAddresses(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }

  get _ownedNFTProjectIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class PricePerTokenInWeiUpdated extends ethereum.Event {
  get params(): PricePerTokenInWeiUpdated__Params {
    return new PricePerTokenInWeiUpdated__Params(this);
  }
}

export class PricePerTokenInWeiUpdated__Params {
  _event: PricePerTokenInWeiUpdated;

  constructor(event: PricePerTokenInWeiUpdated) {
    this._event = event;
  }

  get _projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _pricePerTokenInWei(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ProjectCurrencyInfoUpdated extends ethereum.Event {
  get params(): ProjectCurrencyInfoUpdated__Params {
    return new ProjectCurrencyInfoUpdated__Params(this);
  }
}

export class ProjectCurrencyInfoUpdated__Params {
  _event: ProjectCurrencyInfoUpdated;

  constructor(event: ProjectCurrencyInfoUpdated) {
    this._event = event;
  }

  get _projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _currencyAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _currencySymbol(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class PurchaseToDisabledUpdated extends ethereum.Event {
  get params(): PurchaseToDisabledUpdated__Params {
    return new PurchaseToDisabledUpdated__Params(this);
  }
}

export class PurchaseToDisabledUpdated__Params {
  _event: PurchaseToDisabledUpdated;

  constructor(event: PurchaseToDisabledUpdated) {
    this._event = event;
  }

  get _projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _purchaseToDisabled(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class RegisteredNFTAddress extends ethereum.Event {
  get params(): RegisteredNFTAddress__Params {
    return new RegisteredNFTAddress__Params(this);
  }
}

export class RegisteredNFTAddress__Params {
  _event: RegisteredNFTAddress;

  constructor(event: RegisteredNFTAddress) {
    this._event = event;
  }

  get _NFTAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RemovedHoldersOfProjects extends ethereum.Event {
  get params(): RemovedHoldersOfProjects__Params {
    return new RemovedHoldersOfProjects__Params(this);
  }
}

export class RemovedHoldersOfProjects__Params {
  _event: RemovedHoldersOfProjects;

  constructor(event: RemovedHoldersOfProjects) {
    this._event = event;
  }

  get _projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _ownedNFTAddresses(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }

  get _ownedNFTProjectIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class UnregisteredNFTAddress extends ethereum.Event {
  get params(): UnregisteredNFTAddress__Params {
    return new UnregisteredNFTAddress__Params(this);
  }
}

export class UnregisteredNFTAddress__Params {
  _event: UnregisteredNFTAddress;

  constructor(event: UnregisteredNFTAddress) {
    this._event = event;
  }

  get _NFTAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinterHolderV0__getPriceInfoResult {
  value0: boolean;
  value1: BigInt;
  value2: string;
  value3: Address;

  constructor(
    value0: boolean,
    value1: BigInt,
    value2: string,
    value3: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }
}

export class MinterHolderV0 extends ethereum.SmartContract {
  static bind(address: Address): MinterHolderV0 {
    return new MinterHolderV0("MinterHolderV0", address);
  }

  allowedProjectHolders(
    param0: BigInt,
    param1: Address,
    param2: BigInt
  ): boolean {
    let result = super.call(
      "allowedProjectHolders",
      "allowedProjectHolders(uint256,address,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return result[0].toBoolean();
  }

  try_allowedProjectHolders(
    param0: BigInt,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowedProjectHolders",
      "allowedProjectHolders(uint256,address,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  genArt721CoreAddress(): Address {
    let result = super.call(
      "genArt721CoreAddress",
      "genArt721CoreAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_genArt721CoreAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "genArt721CoreAddress",
      "genArt721CoreAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getNumRegisteredNFTAddresses(): BigInt {
    let result = super.call(
      "getNumRegisteredNFTAddresses",
      "getNumRegisteredNFTAddresses():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNumRegisteredNFTAddresses(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumRegisteredNFTAddresses",
      "getNumRegisteredNFTAddresses():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPriceInfo(_projectId: BigInt): MinterHolderV0__getPriceInfoResult {
    let result = super.call(
      "getPriceInfo",
      "getPriceInfo(uint256):(bool,uint256,string,address)",
      [ethereum.Value.fromUnsignedBigInt(_projectId)]
    );

    return new MinterHolderV0__getPriceInfoResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toString(),
      result[3].toAddress()
    );
  }

  try_getPriceInfo(
    _projectId: BigInt
  ): ethereum.CallResult<MinterHolderV0__getPriceInfoResult> {
    let result = super.tryCall(
      "getPriceInfo",
      "getPriceInfo(uint256):(bool,uint256,string,address)",
      [ethereum.Value.fromUnsignedBigInt(_projectId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MinterHolderV0__getPriceInfoResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toString(),
        value[3].toAddress()
      )
    );
  }

  getRegisteredNFTAddressAt(_index: BigInt): Address {
    let result = super.call(
      "getRegisteredNFTAddressAt",
      "getRegisteredNFTAddressAt(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );

    return result[0].toAddress();
  }

  try_getRegisteredNFTAddressAt(_index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRegisteredNFTAddressAt",
      "getRegisteredNFTAddressAt(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isAllowlistedNFT(
    _projectId: BigInt,
    _ownedNFTAddress: Address,
    _ownedNFTTokenId: BigInt
  ): boolean {
    let result = super.call(
      "isAllowlistedNFT",
      "isAllowlistedNFT(uint256,address,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_projectId),
        ethereum.Value.fromAddress(_ownedNFTAddress),
        ethereum.Value.fromUnsignedBigInt(_ownedNFTTokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_isAllowlistedNFT(
    _projectId: BigInt,
    _ownedNFTAddress: Address,
    _ownedNFTTokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAllowlistedNFT",
      "isAllowlistedNFT(uint256,address,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_projectId),
        ethereum.Value.fromAddress(_ownedNFTAddress),
        ethereum.Value.fromUnsignedBigInt(_ownedNFTTokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minterFilterAddress(): Address {
    let result = super.call(
      "minterFilterAddress",
      "minterFilterAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_minterFilterAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "minterFilterAddress",
      "minterFilterAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  minterType(): string {
    let result = super.call("minterType", "minterType():(string)", []);

    return result[0].toString();
  }

  try_minterType(): ethereum.CallResult<string> {
    let result = super.tryCall("minterType", "minterType():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  projectMaxHasBeenInvoked(param0: BigInt): boolean {
    let result = super.call(
      "projectMaxHasBeenInvoked",
      "projectMaxHasBeenInvoked(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBoolean();
  }

  try_projectMaxHasBeenInvoked(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "projectMaxHasBeenInvoked",
      "projectMaxHasBeenInvoked(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  projectMaxInvocations(param0: BigInt): BigInt {
    let result = super.call(
      "projectMaxInvocations",
      "projectMaxInvocations(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_projectMaxInvocations(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "projectMaxInvocations",
      "projectMaxInvocations(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _genArt721Address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _minterFilter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AllowHoldersOfProjectsCall extends ethereum.Call {
  get inputs(): AllowHoldersOfProjectsCall__Inputs {
    return new AllowHoldersOfProjectsCall__Inputs(this);
  }

  get outputs(): AllowHoldersOfProjectsCall__Outputs {
    return new AllowHoldersOfProjectsCall__Outputs(this);
  }
}

export class AllowHoldersOfProjectsCall__Inputs {
  _call: AllowHoldersOfProjectsCall;

  constructor(call: AllowHoldersOfProjectsCall) {
    this._call = call;
  }

  get _projectId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ownedNFTAddresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _ownedNFTProjectIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class AllowHoldersOfProjectsCall__Outputs {
  _call: AllowHoldersOfProjectsCall;

  constructor(call: AllowHoldersOfProjectsCall) {
    this._call = call;
  }
}

export class AllowRemoveHoldersOfProjectsCall extends ethereum.Call {
  get inputs(): AllowRemoveHoldersOfProjectsCall__Inputs {
    return new AllowRemoveHoldersOfProjectsCall__Inputs(this);
  }

  get outputs(): AllowRemoveHoldersOfProjectsCall__Outputs {
    return new AllowRemoveHoldersOfProjectsCall__Outputs(this);
  }
}

export class AllowRemoveHoldersOfProjectsCall__Inputs {
  _call: AllowRemoveHoldersOfProjectsCall;

  constructor(call: AllowRemoveHoldersOfProjectsCall) {
    this._call = call;
  }

  get _projectId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ownedNFTAddressesAdd(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _ownedNFTProjectIdsAdd(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _ownedNFTAddressesRemove(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get _ownedNFTProjectIdsRemove(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }
}

export class AllowRemoveHoldersOfProjectsCall__Outputs {
  _call: AllowRemoveHoldersOfProjectsCall;

  constructor(call: AllowRemoveHoldersOfProjectsCall) {
    this._call = call;
  }
}

export class PurchaseCall extends ethereum.Call {
  get inputs(): PurchaseCall__Inputs {
    return new PurchaseCall__Inputs(this);
  }

  get outputs(): PurchaseCall__Outputs {
    return new PurchaseCall__Outputs(this);
  }
}

export class PurchaseCall__Inputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }

  get _projectId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ownedNFTAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _ownedNFTTokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class PurchaseCall__Outputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class Purchase1Call extends ethereum.Call {
  get inputs(): Purchase1Call__Inputs {
    return new Purchase1Call__Inputs(this);
  }

  get outputs(): Purchase1Call__Outputs {
    return new Purchase1Call__Outputs(this);
  }
}

export class Purchase1Call__Inputs {
  _call: Purchase1Call;

  constructor(call: Purchase1Call) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Purchase1Call__Outputs {
  _call: Purchase1Call;

  constructor(call: Purchase1Call) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PurchaseToCall extends ethereum.Call {
  get inputs(): PurchaseToCall__Inputs {
    return new PurchaseToCall__Inputs(this);
  }

  get outputs(): PurchaseToCall__Outputs {
    return new PurchaseToCall__Outputs(this);
  }
}

export class PurchaseToCall__Inputs {
  _call: PurchaseToCall;

  constructor(call: PurchaseToCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PurchaseToCall__Outputs {
  _call: PurchaseToCall;

  constructor(call: PurchaseToCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PurchaseTo1Call extends ethereum.Call {
  get inputs(): PurchaseTo1Call__Inputs {
    return new PurchaseTo1Call__Inputs(this);
  }

  get outputs(): PurchaseTo1Call__Outputs {
    return new PurchaseTo1Call__Outputs(this);
  }
}

export class PurchaseTo1Call__Inputs {
  _call: PurchaseTo1Call;

  constructor(call: PurchaseTo1Call) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _projectId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ownedNFTAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _ownedNFTTokenId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class PurchaseTo1Call__Outputs {
  _call: PurchaseTo1Call;

  constructor(call: PurchaseTo1Call) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RegisterNFTAddressCall extends ethereum.Call {
  get inputs(): RegisterNFTAddressCall__Inputs {
    return new RegisterNFTAddressCall__Inputs(this);
  }

  get outputs(): RegisterNFTAddressCall__Outputs {
    return new RegisterNFTAddressCall__Outputs(this);
  }
}

export class RegisterNFTAddressCall__Inputs {
  _call: RegisterNFTAddressCall;

  constructor(call: RegisterNFTAddressCall) {
    this._call = call;
  }

  get _NFTAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RegisterNFTAddressCall__Outputs {
  _call: RegisterNFTAddressCall;

  constructor(call: RegisterNFTAddressCall) {
    this._call = call;
  }
}

export class RemoveHoldersOfProjectsCall extends ethereum.Call {
  get inputs(): RemoveHoldersOfProjectsCall__Inputs {
    return new RemoveHoldersOfProjectsCall__Inputs(this);
  }

  get outputs(): RemoveHoldersOfProjectsCall__Outputs {
    return new RemoveHoldersOfProjectsCall__Outputs(this);
  }
}

export class RemoveHoldersOfProjectsCall__Inputs {
  _call: RemoveHoldersOfProjectsCall;

  constructor(call: RemoveHoldersOfProjectsCall) {
    this._call = call;
  }

  get _projectId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ownedNFTAddresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _ownedNFTProjectIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class RemoveHoldersOfProjectsCall__Outputs {
  _call: RemoveHoldersOfProjectsCall;

  constructor(call: RemoveHoldersOfProjectsCall) {
    this._call = call;
  }
}

export class SetProjectMaxInvocationsCall extends ethereum.Call {
  get inputs(): SetProjectMaxInvocationsCall__Inputs {
    return new SetProjectMaxInvocationsCall__Inputs(this);
  }

  get outputs(): SetProjectMaxInvocationsCall__Outputs {
    return new SetProjectMaxInvocationsCall__Outputs(this);
  }
}

export class SetProjectMaxInvocationsCall__Inputs {
  _call: SetProjectMaxInvocationsCall;

  constructor(call: SetProjectMaxInvocationsCall) {
    this._call = call;
  }

  get _projectId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetProjectMaxInvocationsCall__Outputs {
  _call: SetProjectMaxInvocationsCall;

  constructor(call: SetProjectMaxInvocationsCall) {
    this._call = call;
  }
}

export class UnregisterNFTAddressCall extends ethereum.Call {
  get inputs(): UnregisterNFTAddressCall__Inputs {
    return new UnregisterNFTAddressCall__Inputs(this);
  }

  get outputs(): UnregisterNFTAddressCall__Outputs {
    return new UnregisterNFTAddressCall__Outputs(this);
  }
}

export class UnregisterNFTAddressCall__Inputs {
  _call: UnregisterNFTAddressCall;

  constructor(call: UnregisterNFTAddressCall) {
    this._call = call;
  }

  get _NFTAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnregisterNFTAddressCall__Outputs {
  _call: UnregisterNFTAddressCall;

  constructor(call: UnregisterNFTAddressCall) {
    this._call = call;
  }
}

export class UpdatePricePerTokenInWeiCall extends ethereum.Call {
  get inputs(): UpdatePricePerTokenInWeiCall__Inputs {
    return new UpdatePricePerTokenInWeiCall__Inputs(this);
  }

  get outputs(): UpdatePricePerTokenInWeiCall__Outputs {
    return new UpdatePricePerTokenInWeiCall__Outputs(this);
  }
}

export class UpdatePricePerTokenInWeiCall__Inputs {
  _call: UpdatePricePerTokenInWeiCall;

  constructor(call: UpdatePricePerTokenInWeiCall) {
    this._call = call;
  }

  get _projectId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _pricePerTokenInWei(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdatePricePerTokenInWeiCall__Outputs {
  _call: UpdatePricePerTokenInWeiCall;

  constructor(call: UpdatePricePerTokenInWeiCall) {
    this._call = call;
  }
}
