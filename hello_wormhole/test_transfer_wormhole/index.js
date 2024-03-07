import { Wormhole } from "@wormhole-foundation/connect-sdk";
import { EvmPlatform } from "@wormhole-foundation/connect-sdk-evm";

// register the protocol by importing the module
import "@wormhole-foundation/connect-sdk-evm-cctp";

  // init Wormhole object, passing config for which network
  // to use (e.g. Mainnet/Testnet) and what Platforms to support
  const wh = new Wormhole("Testnet", [EvmPlatform]);

  // 1.0 USDC in base units 
  const amt = normalizeAmount("1.0", 6)

  const srcAddress = Wormhole.chainAddress("Ethereum", "0xD0dC8A261Ad1B75A92C5e502AE10c3Fde042b879") 
  const dstAddress = Wormhole.chainAddress("Avalanche", "0xD0dC8A261Ad1B75A92C5e502AE10c3Fde042b879") 

  const xfer = await wh.circleTransfer(
    amt, // 
    srcAddress,
    dstAddress
  );
  console.log(xfer);


  console.log("Starting Transfer");
  const srcTxids = await xfer.initiateTransfer(src.signer);
  console.log(`Started Transfer: `, srcTxids);

  // See https://developers.circle.com/stablecoins/docs/required-block-confirmations for reasonable timeout settings
  // based on origin chain
  const timeout = 60 * 1000;

  console.log("Waiting for Attestation");
  const attestIds = await xfer.fetchAttestation(timeout);
  console.log(`Got Attestation: `, attestIds);


  console.log("Completing Transfer");
  const dstTxids = await xfer.completeTransfer(dst.signer);
  console.log(`Completed Transfer: `, dstTxids);
