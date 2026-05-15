# Mac configs
Holds custom config files to be used on Mac

## System wide keybindings
For system shortcuts to resemlbe Linux shortcuts and have a better use with external keyboards

* create a folder ~/Library/KeyBindings
* copy DefaultKeyBinding.dict there
* restart Mac

## VS code
VS code shortcuts to resemble linux, add support for tab changes, correct ctrl button assignment also keeping "option" key for Mac keyboard use

* Open: Code -> Preferences -> Keyboard shortcuts
* Click "open keyboard shortcuts (JSON)" to the right on tab panel
* Add/modify from `keybindings.json`

## Finicky

* Copy `finicky.js` to `~/.finicky.js`

## Useful apps
* finicky (https://github.com/johnste/finicky)
* karabiner elements
* Scroll Reverser
* bluesnooze
* ImageOptim
* OnyX
* Mackup

## Defaults
```
defaults write com.apple.dock "autohide-time-modifier" -float "0.2"
defaults write com.apple.dock "autohide-delay" -float "0.1"
defaults write com.apple.dock "show-recents" -bool "false"
killall Dock
```
reference: https://macos-defaults.com/

## Etc
# my PS1 (old)
`PS1='\n\D{%Y-%m-%d %H:%M} \u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\n\$ '`
