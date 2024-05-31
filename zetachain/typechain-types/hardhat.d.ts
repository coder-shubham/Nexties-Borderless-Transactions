/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Ownable2Step",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable2Step__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ConnectorErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConnectorErrors__factory>;
    getContractFactory(
      name: "ZetaInteractorErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZetaInteractorErrors__factory>;
    getContractFactory(
      name: "ZetaCommonErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZetaCommonErrors__factory>;
    getContractFactory(
      name: "ZetaConnector",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZetaConnector__factory>;
    getContractFactory(
      name: "ZetaReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZetaReceiver__factory>;
    getContractFactory(
      name: "ZetaTokenConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZetaTokenConsumer__factory>;
    getContractFactory(
      name: "ZetaInteractor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZetaInteractor__factory>;
    getContractFactory(
      name: "ZetaConnectorBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZetaConnectorBase__factory>;
    getContractFactory(
      name: "IZRC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZRC20__factory>;
    getContractFactory(
      name: "ZContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZContract__factory>;
    getContractFactory(
      name: "SystemContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SystemContract__factory>;
    getContractFactory(
      name: "SystemContractErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SystemContractErrors__factory>;
    getContractFactory(
      name: "OnlySystem",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OnlySystem__factory>;
    getContractFactory(
      name: "CrossChainMessage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainMessage__factory>;
    getContractFactory(
      name: "Swap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Swap__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Ownable2Step",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable2Step>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ConnectorErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConnectorErrors>;
    getContractAt(
      name: "ZetaInteractorErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZetaInteractorErrors>;
    getContractAt(
      name: "ZetaCommonErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZetaCommonErrors>;
    getContractAt(
      name: "ZetaConnector",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZetaConnector>;
    getContractAt(
      name: "ZetaReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZetaReceiver>;
    getContractAt(
      name: "ZetaTokenConsumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZetaTokenConsumer>;
    getContractAt(
      name: "ZetaInteractor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZetaInteractor>;
    getContractAt(
      name: "ZetaConnectorBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZetaConnectorBase>;
    getContractAt(
      name: "IZRC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZRC20>;
    getContractAt(
      name: "ZContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZContract>;
    getContractAt(
      name: "SystemContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SystemContract>;
    getContractAt(
      name: "SystemContractErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SystemContractErrors>;
    getContractAt(
      name: "OnlySystem",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OnlySystem>;
    getContractAt(
      name: "CrossChainMessage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainMessage>;
    getContractAt(
      name: "Swap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Swap>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
