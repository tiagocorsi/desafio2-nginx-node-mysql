# Derivando da imagem oficial do MySQL
FROM mysql:5.7

RUN rm -rf ./db

# Adicionando os scripts SQL para serem executados na criação do banco
COPY ./scripts/ /docker-entrypoint-initdb.d/