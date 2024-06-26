/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ZetaInteractorErrors,
  ZetaInteractorErrorsInterface,
} from "../../../../../../@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInteractorErrors";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "InvalidCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDestinationChainId",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidZetaMessageCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidZetaRevertCall",
    type: "error",
  },
] as const;

export class ZetaInteractorErrors__factory {
  static readonly abi = _abi;
  static createInterface(): ZetaInteractorErrorsInterface {
    return new utils.Interface(_abi) as ZetaInteractorErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaInteractorErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZetaInteractorErrors;
  }
}
