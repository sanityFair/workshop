#!/usr/bin/env zsh

if [[ $(command -v zsh) ]]; then
  echo "ZSH exists."
  node -v
  npm audit
else 
  echo "ZSH isn't found."
  exit 1
fi

if [[ "$ZSH_NAME" == "zsh" ]]; then
  echo "ZSH seems to be being used as this shell."
  exit 0
else
  echo "ZSH is (probably) not the shell being used."
  exit 1
fi
