all:
	cd nextjs-frontend && yarn build
deploy:
	surge /home/gabs/nutshell/nutshell-website/nextjs-frontend/out nutshellbiotech.com
