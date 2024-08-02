import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { GamePass, IDL } from "./game_pass";
import { PublicKey } from "@solana/web3.js";
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

describe("game_pass_new", async () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.GamePass as Program<GamePass>;


  // Get the path to the JSON file
  const filePath = path.join(os.homedir(), '.config', 'solana', 'id.json');

  const data = fs.readFileSync(filePath, 'utf-8');
  let key = JSON.parse(data);
  const pg = anchor.web3.Keypair.fromSecretKey(Uint8Array.from(key));

  const [GamePassPDA, gameBump] = await PublicKey.findProgramAddress(
    [Buffer.from("game_pass"), pg.publicKey.toBuffer()],
    program.programId
  );

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.intializeGamePass().accounts({
      user: new PublicKey('target/types/game_pass.ts'),
      gamePass: GamePassPDA,
      systemProgram: anchor.web3.SystemProgram.programId,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
    })
      .signers([pg])
      .rpc();


    let account = program.account.gamePass.fetch(GamePassPDA.toBase58());
    let owner = (await account).owner.toBase58()

    console.log(owner);

    console.log("Your transaction signature", tx);
  });
});
