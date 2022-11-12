# -------------------------------------------------------------


# instala o pacote node
FROM node:alpine

# cria a pasta app
WORKDIR /app

# copia package json 
COPY package*.json .

# instala dependencias
RUN npm install

# copiar demais arquivos
COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]

#criado o arquivo .dockerignore

# digitar no terminal o comando abaixo
# docker build -t back-cav .

# no docker vai em images, play, colocar o valor da porta

# -------------------------------------------------------------


