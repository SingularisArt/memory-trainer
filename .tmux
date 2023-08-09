#!/usr/bin/bash

source info.sh

set -e
SESSION_NAME="Memory Trainer"

if tmux has-session -t="$SESSION_NAME" 2> /dev/null; then
  tmux attach -t "$SESSION_NAME"
  exit
fi

tmux new-session -d -s "$SESSION_NAME"

tmux rename-session "$SESSION_NAME"

tmux rename-window "Server"
tmux send-keys "cd frontend; clear; npm start" Enter
tmux split-window -h
tmux send-keys "cd server; clear; npm start" Enter

tmux new-window

tmux rename-window "Editor"
tmux send-keys "cd frontend; nvim" Enter

tmux new-window

tmux rename-window "MariDB"
tmux send-keys "mariadb --user=\"$USERNAME\" --password=\"$PASSWORD\"" Enter

tmux attach -t "$SESSION_NAME:Editor"
