autoload -Uz compinit
compinit
eval "$(starship init zsh)"
source <(kubectl completion zsh)
source <(gh completion -s zsh)
source <(rct completion zsh)

# Force a widely compatible TERM for SSH sessions
alias ssh="TERM=xterm-256color ssh"
alias cat=bat
