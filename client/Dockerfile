FROM php:latest

RUN docker-php-ext-install pdo pdo_mysql mysqli

WORKDIR /var/www/html/public

CMD ["php", "-S", "0.0.0.0:8080", "-t", "/var/www/html/public"]