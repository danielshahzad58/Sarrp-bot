import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import random
from discord import Game

Client = discord.client
client: Bot = commands.Bot(command_prefix= "!", description= "Im a bot.")


@client.event
async def on_ready():
    await client.change_presence(game=Game(name="answering you questions"))
    print("logged in")
    print("Online")
    print("---------")  

@client.event
async def on_message (message):
        if message.author.bot:
            return  
        if message.content.upper() == "HI":
            await client.send_message(message.channel,"hi :wink:")   #hi

        if message.content.upper() == "HELLO":
            await client.send_message(message.channel,"hello")    #hello

        if message.content.upper() == "HOW ARE YOU":
            await client.send_message(message.channel,"I am fine. How about you") #how are you

        if message.content.upper() == "WHAT ARE YOU DOING":
            await client.send_message(message.channel,"Nothing just talking to you")#WHAT ARE YOU DOING

        if message.content.upper() == "BYE":
            await client.send_message(message.channel,"Bye have a good day") #BYE

        if message.content.upper() == "WILL YOU BE MY FRIEND":
            await client.send_message(message.channel,"sure :wink:")

        if message.content.upper() == "HELP": #help
            await client.send_message(message.channel,"If you need any help feel free to leave a message in #questions")#help

        if message.content.upper() == "HOW YOU DOING": #help
            await client.send_message(message.channel,"good")    

        if message.content.upper().startswith == "WHAT TIME DOES THE RP START": 
            await client.send_message(message.channel,"check the #schedule for the update and also sign it. If you dont know how to do that feel free to ask an admin")

        if message.content.upper() == "WHENS THE NEXT RP":
            await client.send_message(message.channel,"check the #schedule for the update and also sign it. If you dont know how to do that feel free to ask an admin")

        if message.content.upper().startswith == "WHEN IS THE NEXT ROLEPLAY":
            await client.send_message(message.channel,"check the #schedule for the update and also sign it. If you dont know how to do that feel free to ask an admin")
            
        if message.content.upper().startswith("WHO ARE YOU"):
            await client.send_message(message.channel, "I am just a Bot who answer you questions")

        if message.content.upper().startswith("LOL"):
            await client.send_message(message.channel, "lol")    

        if message.content.upper().startswith("code 1212"):
            await client.send_message(message.channel, "@everyone please join pre lobby briefing for an rp")

        if message.content.upper().startswith("CODE 1213"):
            await client.send_message(message.channel, "@everyone please sign the #schedule for an rp tommarow. Dm an admin or ask in #questions if you dont know how to do that ")   

        if message.content.upper() == "JOKE":
           responses = ['Q: What goes up and down but does not move? A: Stairs',
                        'Q: Where should a 500 pound alien go? A: On a diet',
                        'Q: What did one toilet say to the other?A: You look a bit flushed.',
                        'Q: Why did the picture go to jail? A: Because it was framed.',
                        'Q: What did one wall say to the other wall? A: I will meet you at the corner.',
                        'Q: What did the paper say to the pencil? A: Write on!',
                        'Q: What do you call a boy named Lee that no one talks to? A: Lonely',
                        'Q: What gets wetter the more it dries? A: A towel.',
                        'Q: Why do bicycles fall over? A: Because they are two-tired!',
                        'Q: Why do dragons sleep during the day? A: So they can fight knights!',
                        'Q: What did Cinderella say when her photos did not show up? A: Someday my prints will come!',
                        'Q: Why was the broom late?  A: It over swept!',
                        'Q: What part of the car is the laziest? A: The wheels, because they are always tired!',
                        'Q: What did the stamp say to the envelope? A: Stick with me and we will go places!',
                        'Q: What is blue and goes ding dong? A: An Avon lady at the North Pole!',
                        'Q: We are you long in the hospital? A: No, I was the same size I am now!' ,
                        'Q: Why could not the pirate play cards? A: Because he was sitting on the deck!' ,
                        'Q: What did the laundryman say to the impatient customer? A: Keep your shirt on!' ,
                        'Q: What is the difference between a TV and a newspaper?A: Ever tried swatting a fly with a TV?',
                        'Q: What did one elevator say to the other elevator?  A: I think I am coming down with something!' ,
                        'Q: Why was the belt arrested? A: Because it held up some pants!' ,
                        'Q: Why was everyone so tired on April 1st? A: They had just finished a March of 31 days.' ,
                        'Q: Which hand is it better to write with? A: Neither, it Is best to write with a pen!',
                        'Q: Why cant your nose be 12 inches long? A: Because then it would be a foot!',
                        'Q: What makes the calendar seem so popular? A: Because it has a lot of dates!',
                        'Q: Why did Mickey Mouse take a trip into space? A: He wanted to find Pluto!',
                        'Q: What is green and has yellow wheels? A: Grass…..I lied about the wheels!',
                        'Q: What is it that even the most careful person overlooks?A: Her nose!',
                        'Q: Did you hear about the robbery last night? A: Two clothes pins held up a pair of pants!',
                        'Q: Why do you go to bed every night? A: Because the bed wont come to you',
                        'Q: Why did Billy go out with a prune A: Because he could not find a date!',
                        'Q: Why do eskimos do their laundry in Tide A: Because it is too cold out-tide!',
                        'Q: How do you cure a headache? A: Put your head through a window and the pane will just disappear!',
                        'Q: What has four wheels and flies?A: A garbage truck! Q: What kind of car does Mickey Mouses wife drive? A: A minnie van!',
                        'Q: Why dont traffic lights ever go swimming? A: Because they take too long to change!',
                        'Q: Why did the man run around his bed? A: To catch up on his sleep!',
                        'Q: Why did the robber take a bath before he stole from the bank? A: He wanted to make a clean get away!'] 
           await client.send_message(message.channel, random.choice(responses))

        if message.content.upper() == "EMOJI":
           responses = [':grinning:', ':grimacing:', ':grin:', ':joy:', ':smiley:', ':smile:', ':sweat_smile:', ':laughing:', ':innocent: :wink:', ':blush:', ':slight_smile:' ,':upside_down:' , ':relaxed:', ':yum:', ':relieved:', ':heart_eyes:', ':kissing_heart:', ':kissing:', ':kissing_smiling_eyes:', ':kissing_closed_eyes:', ':stuck_out_tongue_winking_eye:',  ':stuck_out_tongue_closed_eyes: :stuck_out_tongue:', ':money_mouth:', ':nerd:', ':sunglasses:', ':hugging:', ':smirk:', ':no_mouth:', ':neutral_face:', ':expressionless:', ':unamused:', ':rolling_eyes:', ':thinking:', ':flushed:', ':disappointed:', ':worried:', ':angry:', ':rage:', ':pensive:', ':confused:', ':slight_frown:', ':frowning2:', ':persevere:', ':confounded:', ':tired_face:', ':weary:', ':triumph:', ':open_mouth:', ':scream:', ':fearful:', ':hushed:', ':hushed:', ':frowning:', ':anguished:', ':cry: ', ':disappointed_relieved:', ' :sleepy:', ' :sweat:', ' :sob: ', ':dizzy_face:', ' :astonished:', ' :zipper_mouth:', ' :mask: ', ':thermometer_face: :head_bandage:', ' :sleeping:', ' :zzz:', ' :poop:', ':smiling_imp:', ' :imp:', ' :japanese_ogre:', ' :japanese_goblin:', ' :skull:', ' :ghost:', ' :alien:', ' :robot:', ' :smiley_cat: ', ':smile_cat:', ' :joy_cat:', ' :heart_eyes_cat:', ' :smirk_cat:', ' :kissing_cat:', ' :scream_cat:', ' :crying_cat_face: ', ':pouting_cat:', ' :raised_hands:', ' :clap:', ' :wave:', ' :thumbsup:', ' :thumbsdown:', ' :punch:', ' :fist:', ' :v:', ' :ok_hand:', ' :raised_hand:', ' :open_hands:', ' :sneezing_face:', ' :prince:', ' :mrs_claus:', ' :man_in_tuxedo:', ' :cowboy:', ' :clown:', ' :nauseated_face:', ' :rofl:', ' :drooling_face:', ' :lying_face:', ' :pregnant_woman:', ' :shrug:', ' :monkey_face:', ' :penguin:', ' :baby_chick:', ' :hatching_chick:', ' :hatched_chick:', ' :bee:', ' :bug:', ' :snail:']
           await client.send_message(message.channel, random.choice(responses))
            
        if message.content.upper().startswith("HEY"):
            await client.send_message(message.channel, "hi there")

        if message.content.upper().startswith("!SAY"):
            args = message.content.split(" ")   
            await client.send_message(message.channel, "%s" % (" ".join(args[1:])))
            
        if message.content.upper().startswith("CAT"):
            embed = embed
            discord.Embed(title='Title',description='Description')
            embed.set_image(url='https://cdn.nekos.life/meow/0237A.jpg')
            await bot.send_message(message.channel, embed=embed)

        if message.content.upper().startswith('CURRENT SCHEDULE'):
            embed = discord.Embed(title="Roleplay Schedule", description="Mandatory Attendance Expected From Each Enlisted Is 3 Days During A Consecutive Week.", color=0x00ff00)
            embed.add_field(name="RPs Will Consist On All Days Presented Below At", value="8:00pm Pacific Standard Time", inline=False)
            embed.add_field(name="•3:00pm Universal Time", value="•10:00pm Central Standard Time", inline=False)
            embed.add_field(name="•11:00am Eastern Standard Time", value="•4:00am Greenwich Mean Time (UK)", inline=False)
            embed.add_field(name="•5:00am British Summer Time (UK)", value="If you see any mistake then please DM the owner", inline=False)
            embed.add_field(name="•Monday- Scheduled RP", value="•Tuesday- Recruiting day", inline=False)
            embed.add_field(name="•Wednesday- Scheduled RP", value="•Thursday- Scheduled RP", inline=False)
            embed.add_field(name="•Friday- Recruiting Day", value="•Saturday- Scheduled RP", inline=False)
            embed.add_field(name="•Sunday- Recruiting Day", value="This Schedule might be changed later", inline=False)
            await client.send_message(message.channel, embed=embed)

             

            
client.login(process.env.BOT_TOKEN);

