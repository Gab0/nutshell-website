all:
	cd nextjs-frontend && yarn build
deploy:
	surge /home/gabs/nutshell/nutshell-website/nextjs-frontend/.next/server/pages nutshellbiotech.com 
