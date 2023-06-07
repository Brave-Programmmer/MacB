# MacB
This is a android Application for managing the accounts of companys.
***
<p align="center">
//APK Available soon//
<p>
***
### General

- Client Side Custom Armor Colors (with animated rainbow)
- Custom Command Aliases
- Griffin Burrow Locator and Waypoints
- Track Mythological Event drops
- Track Gaia Construct Hits
- Reparty Command Which Yields to Other Mods
- Auto Accept Reparty
- ~~Trick or Treat Chest Alert~~
- Custom Key Shortcuts
- Better Auction House Price Input
- Copy Deaths to Clipboard
- Spam Hider for
    - Profile messages
    - Mort messages
    - Boss messages
    - Oruo (Trivia puzzle) messages
    - Autopet messages
    - Ability messages
        - Implosion
        - Midas Staff
        - Spirit Sceptre
        - Giant Sword
        - Livid Dagger
        - Staff of the Rising Sun
    - Cooldown messages
    - Mana messages
    - Blocks in the way messages
    - Dungeon blessings
    - Wither & blood key pickups
    - Superboom TNT pickups
    - Revive stone pickups
    - Combo messages
    - Blessing enchant and bait messages
    - Wither and Undead Essence unlock messages
    - Healing messages
    - Sea Creature and Fishing Treasure messages
    - Compact Enchantment messages
    - Mining ability messages
- <details><summary>Custom Spam Hider</summary>

    - 3 modes: StartsWith, Contains, Regex
    - Toggle for skyblock only
    - Custom Name and Pattern
    - Can use unformatted or formatted text
    - Works with existing spam GUI element
  </details>
- Custom Enchant Names
- <details> <summary>Moveable Item Highlight</summary>
  The text for item name that shows up when you swap items</details>
- <details><summary>Moveable Action Bar</summary>
  The text used to display skyblock information.
  Doesn't show up when using anything that removes text.</details> 
  </details>

<details>
  <summary>Dungeons</summary>
***

             { 
                  list.map((l, i) => ( 
                 <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{l.name}</ListItem.Title>
                        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem> 
                 ))
              } 
