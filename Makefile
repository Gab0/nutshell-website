all:
	cd frontend && yarn export
deploy:
	surge /home/gabs/nutshell/nutshell-website/frontend/out nutshellbiotech.com
