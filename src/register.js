import { REST, Routes } from "discord.js";
import dotenv from "dotenv";

function register() {

  dotenv.config();
  //cmd here!
  const commands = [

    {
      name: "ping",
      description: "Replies with Pong!",
      options: [
        {
          name: "code",
          description: "Code string",
          type: 3,
          required: true
        }
      ]
    },
    {
      name: "help",
      description: "รวมคำสั่งต่าง ๆ"
    },
  ];

  //regis cmd
  async function regisCmd() {
    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

    try {
      console.log("Started refreshing application (/) commands.");

      await rest.put(Routes.applicationCommands(process.env.ClientID), {
        body: commands,
      });

      console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }
  }

  return {commands,regisCmd}
}

export default { register };
