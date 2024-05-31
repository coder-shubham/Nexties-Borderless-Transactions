/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  OnlySystem,
  OnlySystemInterface,
} from "../../../../@zetachain/toolkit/contracts/OnlySystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "OnlySystemContract",
    type: "error",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220dda7fab467374f0e9963c05daeae857b1eb2b94986cd0668fd1bfa074da7e57564736f6c63430008070033";

type OnlySystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OnlySystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OnlySystem__factory extends ContractFactory {
  constructor(...args: OnlySystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OnlySystem> {
    return super.deploy(overrides || {}) as Promise<OnlySystem>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OnlySystem {
    return super.attach(address) as OnlySystem;
  }
  override connect(signer: Signer): OnlySystem__factory {
    return super.connect(signer) as OnlySystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OnlySystemInterface {
    return new utils.Interface(_abi) as OnlySystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OnlySystem {
    return new Contract(address, _abi, signerOrProvider) as OnlySystem;
  }
}
