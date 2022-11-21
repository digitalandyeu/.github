# Servers and services

## server@digitalandy archive

```






# 1clickInstall: https://openlitespeed.org/kb/1-click-install/
# Manual install: https://docs.openlitespeed.org/installation/repo

$ sudo wget https://raw.githubusercontent.com/litespeedtech/ols1clk/master/ols1clk.sh
$ sudo bash ols1clk.sh --email digitalandyeu@gmail.com --lsphp 80 --adminpassword gjYQ2acSKDzDBntY
$ ln -s /usr/local/lsws/password .litespeed_password

# Edit group and user
$ sudo nano /usr/local/lsws/conf/httpd_config.conf

# Run script again to apply correct group & user
$ sudo bash ols1clk.sh -E digitalandyeu@gmail.com --lsphp 80 -A gjYQ2acSKDzDBntY -R gjYQ2acSKDzDBntYgjYQ2acSKDzDBntY -W --wordpresspath /var/www/wp.digitalandy --dbname wp_digitalandy --dbuser wp_digitalandy --dbpassword gjYQ2acSKDzDBntYgjYQ2acSKDzDBntY --prefix wpdb_ --wpuser digitalandyeu@gmail.com --wppassword gjYQ2acSKDzDBntYgjYQ2acSKDzDBntY --wordpressplus wp.digitalandy.software
$ reboot

$ mariadb --help --verbose
$ mysqld --help --verbose | grep bind-address

# Remote access
$ sudo nano /etc/mysql/mariadb.conf.d/50-server.cnf
# bind-address = 0.0.0.0
$ reboot

CREATE USER 'digitalandy_remote'@'%' IDENTIFIED BY 'gjYQ2acSKDzDBntYgjYQ2acSKDzDBntY';
GRANT ALL PRIVILEGES ON *.* TO 'digitalandy_remote'@'%' IDENTIFIED BY 'gjYQ2acSKDzDBntYgjYQ2acSKDzDBntY' WITH GRANT OPTION;

# TablePlus:
mariadb://digitalandy_remote:gjYQ2acSKDzDBntYgjYQ2acSKDzDBntY@159.89.106.194?statusColor=AA7941&enviroment=development&name=Main%20&%20Development%20server%20%F0%9F%9B%A0%20&tLSMode=0&usePrivateKey=false&safeModeLevel=0&advancedSafeModeLevel=0&driverVersion=0

$ apt install certbot
# Wildcard https://codex.so/wildcard-ssl-certificate-by-let-s-encrypt
$ certbot certonly --manual -d *.digitalandy.software -d digitalandy.software --agree-tos --manual-public-ip-logging-ok --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory --register-unsafely-without-email --rsa-key-size 4096
$ host -t txt _acme-challenge.digitalandy.software

# Successfully received certificate.
# Certificate is saved at: /etc/letsencrypt/live/digitalandy.software/fullchain.pem
# Key is saved at:         /etc/letsencrypt/live/digitalandy.software/privkey.pem
# This certificate expires on 2023-01-23.
# These files will be updated when the certificate renews.
# NEXT STEPS:
# - This certificate will not be renewed automatically. Autorenewal of --manual certificates requires the use of an authentication hook script (--manual-auth-hook) but one was not provided. To renew this certificate, repeat this same certbot command before the certificate's expiry date.

# install composer https://www.digitalocean.com/community/tutorials/how-to-install-composer-on-ubuntu-20-04-quickstart
$ cd ~
$ curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
$ sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer

# phpmyadmin admin
# Download https://www.phpmyadmin.net/downloads/
$ cd /var/www
$ wget https://files.phpmyadmin.net/phpMyAdmin/5.2.0/phpMyAdmin-5.2.0-english.zip
$ sudo apt install unzip
$ unzip phpMyAdmin-5.2.0-english.zip
$ sudo mv -f phpMyAdmin-5.2.0-english phpmyadmin
$ rm phpMyAdmin-5.2.0-english.zip
$ cd phpmyadmin && mkdir tmp && chmod 777 tmp
# Add context to Virtual Host wordpress:
# URL: /phpmyadmin/
# Location: /var/www/phpmyadmin
# Index Files: index.php
# Auto Index: Off
# Access Allowed: *
# Add Default Charset: Off

# Create temp folder Continue install
# mysql > SHOW DATABASES;
# mysql > CREATE DATABASE phpmyadmin;
# The configuration file now needs a secret passphrase (blowfish_secret). 
# https://stackoverflow.com/questions/34961109/what-is-a-blowfish-secret-in-phpmyadmin
# $cfg['blowfish_secret'] = '7yRxkscr/SB4Sb729H7HdnbNqZxJOQ==';

# Multiple virtual hosts https://docs.litespeedtech.com/cloud/images/wordpress/#how-do-i-create-additional-virtual-hosts
# cache https://openlitespeed.org/kb/how-to-set-up-custom-headers/
$ sudo apt install php-imagick && reboot
# https://www.cloudpages.cloud/blog/how-to-install-the-php-imagemagick-extension/
# https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-20-04-quickstart

# ln -s /home/digitalandy/public /var/www/digitalandy.software
$ chown -R www-data:www-data /var/www
$ sudo find /var/www -type d -exec chmod 0755 {} \;
$ sudo find /var/www -type f -exec chmod 0664 {} \;

$ sudo adduser da
# set password
$ su - da

# Add key
$ touch ~/.ssh/authorized_keys
$ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys 

#$ usermod -aG digitalandy www-data
#$ usermod -aG digitalandy digitalandy

$ sudo apt install redis
$ sudo apt install lsphp80-redis
$ reboot
$ ss -tulpn | grep redis
# 127.0.0.1:6379

# generating ssh server keys
$ ssh-keygen -t ed25519 -C "server@digitalandy.software"
# > ~/.ssh/server@da.pub
$ cat ~/.ssh/server@da && cat ~/.ssh/server@da.pub
$ sudo apt install gh
$ gh auth login
# Prefer SSH and use the 

$ wp package install aaemnnosttv/wp-cli-login-command 

# Create Vhost with a cli
# https://docs.litespeedtech.com/cloud/wordpress/#how-do-i-create-additional-virtual-hosts
$ su - root
$ touch /root/.db_password
$ nano .db_password # root_mysql_pass="gjYQ2acSKDzDBntYgjYQ2acSKDzDBntY"

$ wget https://raw.githubusercontent.com/litespeedtech/ls-cloud-image/master/Setup/vhsetup.sh
$ chmod +x vhsetup.sh
$ bash vhsetup.sh

# https://share.cleanshot.com/h78SmO
# 8080 Default config
# Example default config https://share.cleanshot.com/k6aUGr

---- 
# users and permissions:
# check users & groups
$ compgen -u & groups da

# append user to group 
$ getent group & sudo usermod -aG sudo da

$ sudo getent group sudo
$ sudo usermod -aG sudo root && sudo usermod -aG sudo remote


```
