#!/usr/bin/bash

set -e
SESSION_NAME="Memory Trainer"

tmuxAttachCommand=""
if [ "$TMUX" != "" ]; then
  tmuxAttachCommand="tmux switch-client -t \"$SESSION_NAME:Editor\""
else
  tmuxAttachCommand="tmux attach -t \"$SESSION_NAME:Editor\""
fi

if tmux has-session -t "$SESSION_NAME" 2> /dev/null; then
  eval "$tmuxAttachCommand"
fi

tmux new-session -d -s "$SESSION_NAME"

tmux rename-window -t "$SESSION_NAME" "Server"
tmux send-keys -t "$SESSION_NAME" "cd clear; npm start" Enter
tmux split-window -t "$SESSION_NAME" -h
tmux send-keys -t "$SESSION_NAME" "cd server; clear; npm start" Enter

tmux new-window -t "$SESSION_NAME"

tmux rename-window -t "$SESSION_NAME" "Editor"
tmux send-keys -t "$SESSION_NAME" "cd frontend; nvim" Enter

tmux new-window -t "$SESSION_NAME"

tmux rename-window -t "$SESSION_NAME" "MariDB"

password="$HOME/.local/bin/get-password programming/mariadb/account-1"
username="$HOME/.local/bin/get-password programming/mariadb/account-1 'account'"

tmux send-keys -t "$SESSION_NAME" \
  "mariadb --user=\"\`$username\`\" --password=\"\`$password\`\"" \
  Enter

tmux new-window -t "$SESSION_NAME"

tmux rename-window -t "$SESSION_NAME" "Git"
tmux send-keys -t "$SESSION_NAME" "clear; wgs" Enter

eval "$tmuxAttachCommand"
