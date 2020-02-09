all:
	gitfolio build scanf --theme dark

refresh:
	make
	git add -p
	git commit -m "Fetch changes from GitHub"
	git push origin master
