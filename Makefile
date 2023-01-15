all:
	cd nextjs-frontend && yarn export
deploy:
	surge /home/gabs/nutshell/nutshell-website/nextjs-frontend/out nutshellbiotech.com
