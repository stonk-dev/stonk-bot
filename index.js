import { 
    Client, 
    GatewayIntentBits, 
    codeBlock,
    blockQuote
} from "discord.js";

import dotenv from "dotenv";
import botRegister from "./src/register.js";

dotenv.config();
const { commands, regisCmd } = botRegister.register();

regisCmd();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    //ping
    if (interaction.commandName === "ping") {
        const reason =  interaction.options.getString("code") ?? "No reason provided";
        await interaction.reply(codeBlock("js", `console.log(${reason})`));
    }
    //help
    if (interaction.commandName === "help") {
        await interaction.reply(blockQuote(`
        ### คำสั่งการงาน
        ${`/`}
        `));
    }
});

client.login(process.env.TOKEN);
