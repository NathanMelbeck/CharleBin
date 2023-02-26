install:
	bin/composer install

start:
	php -S localhost:8080

test:
	curl -s localhost:8080 | grep -q "<title>PrivateBin</title>"
dev: 
	//lancer le serveur php en mode debug
	php -dxdebug.mode=debug -dxdebug.start_with_request=yes -S localhost:8080