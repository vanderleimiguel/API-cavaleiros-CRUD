# -------------------------------------------------------------
# docker para desenvolvimento local

# instala o pacote node
# FROM node:alpine

# cria a pasta app
# WORKDIR /app

# copia package json 
# COPY package*.json .

# instala dependencias
# RUN npm install

# copiar demais arquivos
# COPY . .

# EXPOSE 3000

# ENTRYPOINT ["node", "index.js"]

# peimwiro teste, nao deu certo CMD ["npm", "run", "start:dev"]

#criado o arquivo .dockerignore

# digitar no terminal o comando abaixo
# docker build -t back-dev2 .

# no docker vai em images, play, colocar o valor da porta

#teste de iniciar container pelo terminal
# docker run -p 3000:3000 -d back-dev2 -e MONGO_URL="mongodb+srv://adminCavaleiro:QPEtzyMi3cK6ZeD4@cluster0.xkvgmva.mongodb.net/?retryWrites=true&w=majority"

# -------------------------------------------------------------

# versao produção
FROM node:alpine
