import { Event, Lavamusic } from "../../structures/index.js";
import { CommandInteraction, Interaction } from "discord.js";
export default class InteractionCreate extends Event {
    constructor(client: Lavamusic, file: string);
    run(interaction: Interaction | CommandInteraction | any): Promise<void>;
}
/**
 * Project: lavamusic
 * user: Blacky
 * Company: Coders
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */ 
