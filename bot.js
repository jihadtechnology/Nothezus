var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "^" //The text before commands, you can put anything that you prefer

    if(message.author.id != "659155387433615391" && message.channel.id === "568070294028288000"){
        if(msg.startsWith('^', 0)){
            if(msg === prefix + "help" && message.channel.id === "568070294028288000"){
                message.channel.send('worke!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand ^help right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '.' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
