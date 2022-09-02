session="gen-me"

session_exists=$(tmux ls | grep $session)

if ["$session_exists" != ""]
then
  tmux new-session -d -s $session

  tmux rename-window -t 1 "dev"
  tmux send-keys -t "dev" "code ." C-m
  
  tmux new-window -t $session:2 -n "pscale" 
  tmux send-keys -t "pscale" "npx prisma studio" C-m

  tmux split-window -v 
  tmux send-keys -t "pscale" "npm run start:pscale" C-m

  tmux split-window -h 
  tmux send-keys -t "pscale" "npm run start:pscale:shadow" C-m
fi

tmux a -t $session:1
